// @flow
import React from 'react'
import CashAmount from './CashAmount'

type Props = {user: User, updateUserFn: () => void}
const UserDepositCash = ({user, updateUserFn}: Props) => {
  return (
    <CashAmount
      user={user}
      buttonText='Deposit Cash'
      apiEndPoint='/api/deposits'
      updateUserFn={updateUserFn}
    />
  )
}

export default UserDepositCash
