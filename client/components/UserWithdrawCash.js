// @flow
import React from 'react'
import CashAmount from './CashAmount'
import type {User} from '../../lib/users'

type Props = {user: User, updateUserFn: () => Promise<*>}

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
