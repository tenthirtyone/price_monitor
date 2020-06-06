const CoinbaseClient = require("coinbase").Client;
const { oneMinute } = require("../config/constants");

class Coinbase {
  constructor(config) {
    this.config = config;
    this.currencyPairs = this.config.currencyPairs;
    this.coinbase = new CoinbaseClient({
      apiKey: this.config.coinbaseKey,
      apiSecret: this.config.coinbaseSecret,
      strictSSL: false,
    });
  }

  getSpotPrice(currencyPair) {
    return new Promise((res, rej) => {
      this.coinbase.getSpotPrice({ currencyPair }, function (err, data) {
        if (err) {
          return rej(err);
        }

        res(data);
      });
    });
  }
}

module.exports = Coinbase;
