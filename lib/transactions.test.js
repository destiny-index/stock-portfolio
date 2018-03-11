// @flow
import {getBalanceValue, getTotalBalanceValue} from './transactions'

describe('A Transaction', function () {
  let cashAmount, stockOrder

  beforeEach(function () {
    cashAmount = { amount: 100 }
    stockOrder = { quantity: 20, pricePerShare: 10, equitySymbol: 'ASDF' }
  })

  it('should have a value', function () {
    expect(getBalanceValue(cashAmount)).toBe(cashAmount.amount)
    expect(getBalanceValue(stockOrder)).toBe(-stockOrder.quantity * stockOrder.pricePerShare)
  })

  it('should sum up the values of multiple transactions', function () {
    const totalValue = cashAmount.amount * 3
    expect(getTotalBalanceValue([cashAmount, cashAmount, cashAmount])).toBe(totalValue)
  })
})
