// @flow
import * as User from '../models/users'

export function create (req, res) {
  const user = User.getSingletonUser()

  User.replaceSingletonUser({
    ...user,
    transactions: [...user.transactions, newTransaction]
  })

  res.status(201).end(JSON.stringify().transactions)
}
