// @flow
import React from 'react'
import StockOrder from './StockOrder'

type Props = {
  user: User,
  updateUserFn: () => void
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
