// @flow
import * as User from '../models/users'
import {fetchLivePrice} from '../../lib/stockOrders'

export function createCashAmountTransactionWith (transactionCreator) {
  return function (req, res) {
    const newTransaction = transactionCreator(req.body)
    updateAndRespondWithUpdate(newTransaction, res)
  }
}

export function createStockOrderTransactionWith (asyncTransactionCreator) {
  return async function (req, res) {
    const {quantity, equitySymbol} = req.body
    try {
      const newTransaction = await asyncTransactionCreator(quantity, fetchLivePrice, equitySymbol)
      updateAndRespondWithUpdate(await newTransaction, res)
    } catch (err) {
      res.status(500).end(err.message)
    }
  }
}

function updateAndRespondWithUpdate (newTransaction, res) {
  const updatedUser = User.addTransactionToSingletonUser(newTransaction)
  res.status(201).end(JSON.stringify(updatedUser.transactions))
}
