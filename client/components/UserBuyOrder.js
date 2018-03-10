// @flow
import React from 'react'
import StockOrder from './StockOrder'

type Props = {
  user: User,
  updateUserFn: () => void
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
