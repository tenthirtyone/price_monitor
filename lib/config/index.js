const { oneMinute } = require("./constants");

module.exports = {
  interval: 1000,
  bitstamp: {
    currencyPairs: ["BTCUSD", "ETHUSD"],
  },
  binance: {
    currencyPairs: ["BTCUSD", "ETHUSD"],
  },
  coinbase: {
    coinbaseKey: process.env.ADMIN_COINBASE_KEY || null,
    coinbaseSecret: process.env.ADMIN_COINBASE_SECRET || null,
    currencyPairs: ["BTC-USD", "ETH-USD"],
  },
};
