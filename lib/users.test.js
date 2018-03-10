// @flow
import {addTransaction, getCurrentBalance} from './users'

describe('The User', function () {
  it('should add or remove amounts to their cash balance', function () {
    const add = { amount: 1337 }
    const remove = { amount: -337 }

    let user = { transactions: [] }
    user = addTransaction(user, add)
    user = addTransaction(user, remove)

    expect(getCurrentBalance(user)).toBe(1000)
  })

  it('should execute buy or sell orders for a quantity of stock', function () {
  })
})
