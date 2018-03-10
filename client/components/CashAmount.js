// @flow
import React from 'react'
import {Form} from 'semantic-ui-react'
import axios from 'axios'
import type {User} from '../../lib/users'

type Props = {
  user: User,
  buttonText: string,
  apiEndPoint: string,
  updateUserFn: () => Promise<*>
}
type State = { amount: string }
const initialState = { amount: '' }

class CashAmount extends React.Component<Props, State> {
  state = initialState

  handleClick = async () => {
    const amount = parseInt(this.state.amount)
    if (amount) {
      await axios.post(this.props.apiEndPoint, { amount })
      this.setState(initialState)
      this.props.updateUserFn()
    }
  }

  handleChange = (e: mixed, {value}: {value: string}) => {
    this.setState({ amount: value })
  }

  render = () => (
    <Form>
      <Form.Group>
        <Form.Input
          width={4}
          placeholder='0.00'
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <Form.Button
          style={{width: '10em'}}
          content={this.props.buttonText}
          onClick={this.handleClick}
        />
      </Form.Group>
    </Form>
  )
}

export default CashAmount
