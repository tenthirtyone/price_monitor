const Client = require("coinbase").Client;
const { oneMinute } = require("../config/constants");

class Coinbase {
  constructor(config) {
    this.config = config;
    this.currencyPairs = this.config.currencyPairs;
    this.client = new Client({
      apiKey: this.config.coinbaseKey,
      apiSecret: this.config.coinbaseSecret,
      strictSSL: false,
    });
  }

  getSpotPrice(currencyPair) {
    return new Promise((res, rej) => {
      this.client.getSpotPrice({ currencyPair }, function (err, data) {
        if (err) {
          return rej(err);
        }

        res(data);
      });
    });
  }
}

module.exports = Coinbase;
