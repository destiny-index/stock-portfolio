// @flow
import express from 'express'
import * as users from './controllers/users'

const app = express()

app.get('/api/users', users.read)

app.listen(3000)
