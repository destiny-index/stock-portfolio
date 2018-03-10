// @flow
import React from 'react'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import type {User} from '../../lib/users'

type Props = {
  user: User,
  buttonText: string,
  apiEndPoint: string,
  updateUserFn: () => Promise<*>
}
type State = { equitySymbol: string, quantity: string }

const initialState = { equitySymbol: '', quantity: '' }

class StockOrder extends React.Component<Props, State> {
  state = initialState

  handleChange = (e: mixed, {name, value}: {name: string, value: string}) => {
    this.setState({ [name]: value })
  }

  handleClick = async () => {
    await axios.post(this.props.apiEndPoint, {
      equitySymbol: this.state.equitySymbol,
      quantity: this.state.quantity
    })
    this.setState(initialState)
    this.props.updateUserFn()
  }

  render = () => {
    return (
      <Form>
        <Form.Group>
          <Form.Input
            width={4}
            placeholder='Equity Symbol'
            name='equitySymbol'
            value={this.state.equitySymbol}
            onChange={this.handleChange}
          />
          <Form.Input
            width={2}
            placeholder='Qty.'
            name='quantity'
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <Form.Button
            content={this.props.buttonText}
            onClick={this.handleClick}
          />
        </Form.Group>
      </Form>
    )
  }
}

export default StockOrder
