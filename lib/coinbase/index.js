const fetch = require("node-fetch");
const Logger = require("../logger");

class Coinbase {
  constructor(config) {
    this.config = config;
    this.logger = new Logger("Coinbase");
    this.apiUrl = this.config.apiUrl;
    this.currencyPairs = this.config.currencyPairs;

    this.logger.info("Started");
  }

  getPrices(timestamp) {
    this.logger.debug(`getPrices()`);
    this.currencyPairs.forEach(async (currencyPair) => {
      const price = await this.getSpotPrice(currencyPair.ticker);

      this.logger.info(`${currencyPair.currency}: ${price}`);
    });
  }

  async getSpotPrice(currencyPair) {
    this.logger.debug(`getSpotPrice(${currencyPair})`);
    let res, price;
    try {
      res = await fetch(`${this.apiUrl}/${currencyPair}/spot`);
      price = await res.json();
    } catch (e) {
      return console.log(e);
    }

    return price.data.amount;
  }
}

module.exports = Coinbase;
