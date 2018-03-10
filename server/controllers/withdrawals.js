// @flow
import {makeWithdrawal} from '../../lib/cashAmounts'
import {createCashAmountTransactionWith} from '../helpers/transactions'

export const create = createCashAmountTransactionWith(({amount}) => makeWithdrawal(amount))
