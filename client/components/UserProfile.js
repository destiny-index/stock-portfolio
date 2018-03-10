// @flow
import React from 'react'
import {Container} from 'semantic-ui-react'

import type {User} from '../../lib/users'
import UserCashBalance from './UserCashBalance'
import UserDepositCash from './UserDepositCash'
import UserWithdrawCash from './UserWithdrawCash'
import UserShareHoldings from './UserShareHoldings'
import UserBuyOrder from './UserBuyOrder'
import UserSellOrder from './UserSellOrder'

type Props = {
  user: User,
  updateUserFn: () => void
}

class UserProfile extends React.Component<Props> {
  render = () => {
    return (
      <Container>
        <UserCashBalance user={this.props.user} updateUserFn={this.props.updateUserFn} />
        <UserDepositCash user={this.props.user} updateUserFn={this.props.updateUserFn} />
        <UserWithdrawCash user={this.props.user} updateUserFn={this.props.updateUserFn} />
        <UserBuyOrder user={this.props.user} updateUserFn={this.props.updateUserFn} />
        <UserSellOrder user={this.props.user} updateUserFn={this.props.updateUserFn} />
        <UserShareHoldings user={this.props.user} updateUserFn={this.props.updateUserFn} />
      </Container>
    )
  }
}

export default UserProfile
