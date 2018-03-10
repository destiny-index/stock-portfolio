// @flow
import React from 'react'
import CashAmount from './CashAmount'

type Props = {user: User, updateUserFn: () => void}

const UserWithdrawCash = ({user, updateUserFn}: Props) => {
  return (
    <CashAmount
      user={user}
      buttonText='Withdraw Cash'
      apiEndPoint='/api/withdrawals'
      updateUserFn={updateUserFn}
    />
  )
}

export default UserWithdrawCash
