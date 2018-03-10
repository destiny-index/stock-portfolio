// @flow
import {makeBuyOrder} from '../../lib/stockOrders'
import {createStockOrderTransactionWith} from '../helpers/transactions'

export const create = createStockOrderTransactionWith(makeBuyOrder)
