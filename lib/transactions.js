// @flow
import type {CashAmount} from './cashAmounts'
import type {StockOrder, ShareHolding} from './stockOrders'
import {getShareHolding} from './stockOrders'

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
  const prevQuantity = acc[equitySymbol] || 0
  return {
    ...acc,
    [equitySymbol]: quantity + prevQuantity
  }
}

// The value that a transaction contributes to a users balance
export function getValue (transaction: Transaction): number {
  if (isCashAmount(transaction)) {
    return parseInt(transaction.amount)
  }
  return parseInt(-transaction.quantity * transaction.pricePerShare)
}

function isCashAmount (transaction: Transaction): boolean {
  return transaction.amount != null
}

function isStockOrder (transaction: Transaction): boolean {
  return transaction.equitySymbol != null
}

export function getTotalValue (transactions: Transactions): number {
  return transactions
    .map(getValue)
    .reduce((acc, value) => acc + value, 0)
}
