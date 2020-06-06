const fetch = require("node-fetch");

class Bitstamp {
  constructor(config) {
    this.config = config;
    this.currencyPairs = this.config.currencyPairs;
  }

  async getSpotPrice(currencyPair) {
    let res, price;
    try {
      res = await fetch(
        "https://www.binance.com/api/v3/avgPrice?symbol=ETHBUSD"
      );
      price = res.json();
    } catch (e) {
      return console.log(e);
    }

    return price;
  }
}

module.exports = Bitstamp;
