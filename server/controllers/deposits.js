// @flow
import {makeDeposit} from '../../lib/cashAmounts'
import {createCashAmountTransactionWith} from '../helpers/transactions'

export const create = createCashAmountTransactionWith(({amount}) => makeDeposit(amount))
