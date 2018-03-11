// @flow
import type {CashAmount} from './cashAmounts'
import type {StockOrder, ShareHolding} from './stockOrders'
import {getShareHolding, fetchLivePrices} from './stockOrders'

type EquitySymbol = string
type Quantity = number

export type ShareHoldings = {[EquitySymbol]: Quantity}
export type Transaction = CashAmount | StockOrder
export type Transactions = Array<Transaction>

export function getTotalShareHoldings (transactions: Transactions): ShareHoldings {
  return transactions
    .filter(isStockOrder)
    .map(getShareHolding)
    .reduce(mergeShareHoldings, {})
}

function mergeShareHoldings (acc: ShareHoldings, {quantity, equitySymbol}: ShareHolding) {
  const prevQuantity = parseInt(acc[equitySymbol]) || 0
  return {
    ...acc,
    [equitySymbol]: parseInt(quantity) + prevQuantity
  }
}

export async function getLiveValueOfShareHoldings (shareHoldings: ShareHoldings): number {
  const prices = await fetchLivePrices(Object.keys(shareHoldings))
  const getQuantity = index => Object.values(shareHoldings)[index]
  return prices.reduce((acc, val, index) => {
    return acc + val * getQuantity(index)
  }, 0)
}

export function getBalanceValue (transaction: Transaction): number {
  if (isCashAmount(transaction)) {
    return parseInt(transaction.amount) // Cash Amounts increase Balance
  }
  return parseInt(-transaction.quantity * transaction.pricePerShare) // Buy Orders decrease Balance
}

export function getTotalBalanceValue (transactions: Transactions): number {
  return transactions
    .map(getBalanceValue)
    .reduce((acc, value) => acc + value, 0)
}

function isCashAmount (transaction: Transaction): boolean %checks {
  return transaction.amount != null
}

function isStockOrder (transaction: Transaction): boolean %checks {
  return transaction.equitySymbol != null
}
