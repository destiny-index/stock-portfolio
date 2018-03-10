// @flow
import React from 'react'
import {getCurrentBalance} from '../../lib/users'

const UserCashBalance = ({user}: {user: User}) => (
  <div>
    <span>Current Cash Balance:</span>
    <span>{getCurrentBalance(user)}</span>
  </div>
)

export default UserCashBalance
