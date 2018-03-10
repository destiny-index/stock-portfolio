// @flow
import React from 'react'
import {Table} from 'semantic-ui-react'

import type {User} from '../../lib/users'
import {getCurrentShareHoldings} from '../../lib/users'

type Props = { user: User }

const UserShareHoldings = ({user}: Props) => {
  const entries = Object.entries(getCurrentShareHoldings(user))
  const rows = entries.map(([equity, qty], index) =>
    <Table.Row key={index}>
      <Table.Cell>{equity}</Table.Cell>
      <Table.Cell>{qty}</Table.Cell>
    </Table.Row>
  )

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Equity</Table.HeaderCell>
          <Table.HeaderCell>Qty.</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows}
      </Table.Body>
    </Table>
  )
}

export default UserShareHoldings
