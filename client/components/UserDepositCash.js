// @flow
import React from 'react'
import CashAmount from './CashAmount'
import type {User} from '../../lib/users'

type Props = {user: User, updateUserFn: () => Promise<*>}
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
