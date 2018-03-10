// @flow
import React from 'react'
import StockOrder from './StockOrder'
import type {User} from '../../lib/users'

type Props = {
  user: User,
  updateUserFn: () => Promise<*>
}

const UserBuyOrder = ({user, updateUserFn}: Props) => {
  return (
    <StockOrder
      user={user}
      updateUserFn={updateUserFn}
      buttonText='Buy'
      apiEndPoint='/api/buyOrders' />
  )
}

export default UserBuyOrder
