// @flow
import * as User from '../models/users'
import {getCurrentShareHoldings} from '../../lib/users'
import {getLiveValueOfShareHoldings} from '../../lib/transactions'

export async function read (req, res) {
  const user = User.getSingletonUser()
  const shareHoldings = getCurrentShareHoldings(user)

  const shareHoldingsValue = await getLiveValueOfShareHoldings(shareHoldings)

  res.end(JSON.stringify({...user, shareHoldingsValue}))
}
