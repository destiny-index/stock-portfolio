// @flow
import {makeBuyOrder, makeSellOrder} from './stockOrders'

describe('A StockOrder', function () {
  it('should pull the pricePerShare from the callback function', async function () {
    const fetchPrice = async () => 20
    const buyOrder = await makeBuyOrder(3, fetchPrice, 'ASDF')
    expect(buyOrder.pricePerShare).toBe(20)
  })

  it('should have negative quantity if it is a sell order', async function () {
    const fetchPrice = async () => 20
    const sellOrder = await makeSellOrder(3, fetchPrice, 'ASDF')
    expect(sellOrder.quantity).toBe(-3)
  })
})
