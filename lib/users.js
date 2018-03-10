// @flow
import {getTotalValue} from './transactions'
import type {Transactions} from './transactions'

export type User = {
  transactions: Transactions
}

export function getCurrentBalance (user: User) {
  const initialBalance = 0
  return getTotalValue(user.transactions) + initialBalance
}

export function addTransaction (user: User, transaction: Transaction): User {
  return {
    ...user,
    transactions: [...user.transactions, transaction]
  }
}
