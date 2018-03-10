// @flow
import React from 'react'
import StockOrder from './StockOrder'
import type {User} from '../../lib/users'

type Props = {
  user: User,
  updateUserFn: () => Promise<*>
}

const UserSellOrder = ({user, updateUserFn}: Props) => {
  return (
    <StockOrder
      user={user}
      updateUserFn={updateUserFn}
      buttonText='Sell'
      apiEndPoint='/api/sellOrders' />
  )
}

export default UserSellOrder
