// @flow
import {makeUser, addTransaction, getCurrentBalance, getCurrentShareHoldings} from './users'
import {makeDeposit, makeWithdrawal} from './cashAmounts'
import {makeBuyOrder, makeSellOrder} from './stockOrders'

describe('The User', function () {
  it('should add or remove amounts to their cash balance', function () {
    const add = makeDeposit(1337)
    const remove = makeWithdrawal(337)

    let user = makeUser()
    user = addTransaction(user, add)
    user = addTransaction(user, remove)

    expect(getCurrentBalance(user)).toBe(1000)
  })

  it('should execute buy or sell orders for a quantity of stock', async function () {
    const fetchPrice = async () => 20
    const buy1 = await makeBuyOrder(10, fetchPrice, 'ASDF')
    const buy2 = await makeBuyOrder(10, fetchPrice, 'HJKL')
    const sell = await makeSellOrder(5, fetchPrice, 'ASDF')

    let user = makeUser()
    user = addTransaction(user, buy1)
    user = addTransaction(user, buy2)
    user = addTransaction(user, sell)

    expect(getCurrentShareHoldings(user)).toEqual({'ASDF': 5, 'HJKL': 10})
  })

  it('should calculate the balance correctly', async function () {
    const add = makeDeposit(1337)
    const remove = makeWithdrawal(337)

    const fetchPrice = async () => 20
    const buy = await makeBuyOrder(10, fetchPrice, 'ASDF')
    const sell = await makeSellOrder(5, fetchPrice, 'ASDF')

    let user = makeUser()
    user = addTransaction(user, add)
    user = addTransaction(user, remove)
    user = addTransaction(user, buy)
    user = addTransaction(user, sell)

    expect(getCurrentBalance(user)).toBe(900)
  })
})
