// @flow
import path from 'path'
import express from 'express'
import * as users from './controllers/users'
import * as deposits from './controllers/deposits'
import * as withdrawals from './controllers/withdrawals'
import * as buyOrders from './controllers/buyOrders'
import * as sellOrders from './controllers/sellOrders'

const app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../public')))
app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('/api/users', users.read)
app.post('/api/deposits', deposits.create)
app.post('/api/withdrawals', withdrawals.create)
app.post('/api/buyOrders', buyOrders.create)
app.post('/api/sellOrders', sellOrders.create)

app.listen(process.env.PORT || 3000)
