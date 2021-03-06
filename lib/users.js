// @flow
import {getTotalBalanceValue, getTotalShareHoldings} from './transactions'
import type {Transaction, Transactions, ShareHoldings} from './transactions'

export type User = {
  transactions: Transactions,
  shareHoldingsValue?: number
}

export function makeUser (): User {
  return { transactions: [] }
}

export function getCurrentBalance (user: User) {
  const initialBalance = 0
  return getTotalBalanceValue(user.transactions) + initialBalance
}

export function addTransaction (user: User, transaction: Transaction): User {
  return {
    ...user,
    transactions: [...user.transactions, transaction]
  }
}

export function getCurrentShareHoldings (user: User): ShareHoldings {
  return getTotalShareHoldings(user.transactions)
}
