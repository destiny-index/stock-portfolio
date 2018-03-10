// @flow
import * as User from '../models/users'

export function read (req, res) {
  res.end(JSON.stringify(User.getSingletonUser()))
}
