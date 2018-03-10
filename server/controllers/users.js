// @flow
import * as User from '../models/users'
import {getCurrentShareHoldings} from '../../lib/users'

export function read (req, res) {
  const user = User.getSingletonUser()
  const shareHoldings = getCurrentShareHoldings(user)

  res.end(JSON.stringify(user))
}
