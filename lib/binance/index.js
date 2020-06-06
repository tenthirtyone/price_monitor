const fetch = require("node-fetch");

class Binance {
  constructor(config) {
    this.config = config;
    this.currencyPairs = this.config.currencyPairs;
  }

  async getSpotPrice(currencyPair) {
    let res, price;
    try {
      res = await fetch("https://www.bitstamp.net/api/ticker/btcusd");
      price = res.json();
    } catch (e) {
      return console.log(e);
    }

    return price;
  }
}

module.exports = Binance;
