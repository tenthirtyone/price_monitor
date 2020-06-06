const { oneMinute } = require("./constants");

module.exports = {
  coinbase: {
    coinbaseKey: process.env.ADMIN_COINBASE_KEY || null,
    coinbaseSecret: process.env.ADMIN_COINBASE_SECRET || null,
    currencyPairs: ["BTC-USD", "ETH-USD"],
    interval: 1000,
  },
};
