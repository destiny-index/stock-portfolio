// @flow
import {makeSellOrder} from '../../lib/stockOrders'
import {createStockOrderTransactionWith} from '../helpers/transactions'

export const create = createStockOrderTransactionWith(makeSellOrder)
