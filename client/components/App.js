// @flow
import React from 'react'
import axios from 'axios'

import UserProfile from './UserProfile'
import type {User} from '../../lib/users'

type State = { user: User }
class App extends React.Component<*, State> {
  state = {
    user: null
  }

  updateUser = async () => {
    const {data} = await axios.get('/api/users')
    this.setState({ user: data })
  }

  componentDidMount = () => {
    this.updateUser()
  }

  render = () => (
    this.state.user != null
      ? <UserProfile user={this.state.user} updateUserFn={this.updateUser} />
      : null
  )
}

export default App
