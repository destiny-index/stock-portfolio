// @flow
import React from 'react'
import {Segment, Container, Header, Icon} from 'semantic-ui-react'

import type {User} from '../../lib/users'
import UserCashBalance from './UserCashBalance'
import UserDepositCash from './UserDepositCash'
import UserWithdrawCash from './UserWithdrawCash'
import UserShareHoldings from './UserShareHoldings'
import UserBuyOrder from './UserBuyOrder'
import UserSellOrder from './UserSellOrder'

const CashBalanceHeader = () => (
  <Header>
    <Icon name='dollar' />
    <Header.Content>
      Manage Cash Balance
      <Header.Subheader>
        Add or remove amounts cash amounts
      </Header.Subheader>
    </Header.Content>
  </Header>
)

const ShareHoldingsHeader = () => (
  <Header>
    <Icon name='line graph' />
    <Header.Content>
      Share Holdings
      <Header.Subheader>
        Buy or Sell orders of stock
      </Header.Subheader>
    </Header.Content>
  </Header>
)

type Props = {
  user: User,
  updateUserFn: () => Promise<*>
}

class UserProfile extends React.Component<Props> {
  render = () => {
    return (
      <Container>
        <Segment>
          <CashBalanceHeader />
          <UserDepositCash user={this.props.user} updateUserFn={this.props.updateUserFn} />
          <UserWithdrawCash user={this.props.user} updateUserFn={this.props.updateUserFn} />
          <UserCashBalance user={this.props.user} />

          <ShareHoldingsHeader />
          <UserBuyOrder user={this.props.user} updateUserFn={this.props.updateUserFn} />
          <UserSellOrder user={this.props.user} updateUserFn={this.props.updateUserFn} />
          <UserShareHoldings user={this.props.user} />
        </Segment>
      </Container>
    )
  }
}

export default UserProfile
