// @flow
export type CashAmount = { amount: number }

export function makeDeposit (amount: number): CashAmount {
  return { amount }
}

export function makeWithdrawal (amount: number): CashAmount {
  return { amount: -amount }
}
