// @flow
import {makeUser} from '../../lib/users'
import type {User} from '../../lib/users'
import type {Transaction} from '../../lib/transactions'

/* The app is for personal use so only create a singleton user.
 * We create the user in memory because a DB is not required. */
let user = makeUser()

export function getSingletonUser () {
  return user
}

export function replaceSingletonUser (updatedUser: User) {
  user = updatedUser
  return user
}

export function addTransactionToSingletonUser (transaction: Transaction) {
  user = {
    ...user,
    transactions: [...user.transactions, transaction]
  }
  return user
}
