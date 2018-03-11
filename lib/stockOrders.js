// @flow
import axios from 'axios'

export type StockOrder = {
  quantity: number,
  pricePerShare: number,
  equitySymbol: string
}

export type ShareHolding = {
  equitySymbol: string,
  quantity: number
}

const API_KEY = 'ALJYP66J0GRRIPBL' // This would normally be pulled from an environmental variable
const LIVE_DATA_URL = 'https://www.alphavantage.co/query'

export async function makeBuyOrder (
  quantity: number,
  fetchLivePrice: (equitySymbol: string) => Promise<number>,
  equitySymbol: string
) {
  return {
    quantity,
    pricePerShare: await fetchLivePrice(equitySymbol),
    equitySymbol
  }
}

export async function makeSellOrder (
  quantity: number,
  fetchLivePrice: (equitySymbol: string) => Promise<number>,
  equitySymbol: string
) {
  return {
    quantity: -quantity,
    pricePerShare: await fetchLivePrice(equitySymbol),
    equitySymbol
  }
}

export function getShareHolding (stockOrder: StockOrder): ShareHolding {
  return {
    equitySymbol: stockOrder.equitySymbol,
    quantity: stockOrder.quantity
  }
}

export async function fetchLivePrices (equitySymbols: Array<string>): Array<number> {
  return Promise.all(equitySymbols.map(fetchLivePrice))
}

export async function fetchLivePrice (equitySymbol: string) {
  const config = {
    params: {
      function: 'TIME_SERIES_INTRADAY',
      symbol: equitySymbol,
      interval: '1min',
      outputsize: 'compact',
      datatype: 'json',
      apikey: API_KEY
    }
  }
  const {data} = await axios.get(LIVE_DATA_URL, config)
  return parseIntradayData(data)
}

function parseIntradayData (data) {
  const error = data['Error Message']
  if (error != null) {
    throw new Error(error)
  }

  const lastRefreshed = data['Meta Data']['3. Last Refreshed']
  return parseInt(data['Time Series (1min)'][lastRefreshed]['4. close'])
}
