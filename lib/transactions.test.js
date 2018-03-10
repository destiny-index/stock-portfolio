// @flow
import {getValue, getTotalValue} from './transactions'

describe('A Transaction', function () {
  let cashAmount, stockOrder

  beforeEach(function () {
    cashAmount = { amount: 100 }
    stockOrder = { quantity: 20, pricePerShare: 10, equitySymbol: 'ASDF' }
  })

  it('should have a value', function () {
    expect(getValue(cashAmount)).toBe(cashAmount.amount)
    expect(getValue(stockOrder)).toBe(-stockOrder.quantity * stockOrder.pricePerShare)
  })

  it('should sum up the values of multiple transactions', function () {
    const totalValue = cashAmount.amount * 3
    expect(getTotalValue([cashAmount, cashAmount, cashAmount])).toBe(totalValue)
  })
})
