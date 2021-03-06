const fetch = require("node-fetch");
const Logger = require("../logger");

class Bitstamp {
  constructor(config, db) {
    this.config = config;
    this.db = db;
    this.logger = new Logger("Bitstamp");
    this.apiUrl = this.config.apiUrl;
    this.currencyPairs = this.config.currencyPairs;

    this.logger.info("Started");
  }

  async getPrices(timestamp) {
    this.logger.debug(`getPrices()`);
    this.currencyPairs.forEach(async (currencyPair) => {
      const price = await this.getSpotPrice(currencyPair.ticker);

      const day = timestamp.getDate();
      const month = timestamp.getMonth();
      const year = timestamp.getFullYear();

      await this.db.savePrice({
        exchange: "Bitstamp",
        ...currencyPair,
        price,
        timestamp,
        day,
        month,
        year,
      });
      this.logger.info(`\t${currencyPair.currency}\t${timestamp}\t ${price}`);
    });
  }

  async getSpotPrice(currencyPair) {
    this.logger.debug(`getSpotPrice(${currencyPair})`);
    let res, price;
    try {
      res = await fetch(`${this.apiUrl}${currencyPair}`);
      price = await res.json();
    } catch (e) {
      return console.log(e);
    }
    //console.log(price);

    return price.last;
  }
}

module.exports = Bitstamp;
