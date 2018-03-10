// @flow
import React from 'react'
import {getCurrentBalance} from '../../lib/users'
import {Table} from 'semantic-ui-react'

const UserCashBalance = ({user}: {user: User}) => (
  <Table collapsing basic='very'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Total Balance:</Table.HeaderCell>
        <Table.HeaderCell>${getCurrentBalance(user)}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  </Table>
)

export default UserCashBalance
