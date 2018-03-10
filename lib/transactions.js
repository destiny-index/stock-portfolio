// @flow
import type {CashAmount} from './cashAmounts'
import type {StockOrder} from './stockOrders'

export type Transaction = CashAmount | StockOrder
export type Transactions = Array<Transaction>

export function getValue (transaction: Transaction): number {
  if (transaction.amount != null) {
    return transaction.amount // value of CashAmount
  }
  return transaction.quantity * transaction.pricePerShare
}

export function getTotalValue (transactions: Transactions): number {
  return transactions
    .map(getValue)
    .reduce((acc, value) => acc + value, 0)
}
