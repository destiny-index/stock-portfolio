import {makeDeposit, makeWithdrawal} from './cashAmounts'

describe('A CashAmount', function () {
  it('should contain an amount', function () {
    expect(makeDeposit(100).amount).toBe(100)
  })

  it('should have negative value if withdrawing money', function () {
    expect(makeWithdrawal(100).amount).toBe(-100)
  })
})
