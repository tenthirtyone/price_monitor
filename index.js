require("dotenv").config();
const config = require("./lib/config");
const Coinbase = require("./lib/coinbase");
const Binance = require("./lib/binance");
const Bitstamp = require("./lib/bitstamp");

class PriceMonitor {
  constructor() {
    this.config = config;
    this.coinbase = new Coinbase(this.config.coinbase);
    this.binance = new Binance(this.config.binance);
    this.bitstamp = new Bitstamp(this.config.bitstamp);
  }

  async init() {
    //console.log(await this.coinbase.getSpotPrice());
    //console.log(await this.binance.getSpotPrice());
    console.log(await this.bitstamp.getSpotPrice());
  }
}

if (require.main === module) {
  const priceMonitor = new PriceMonitor();
  priceMonitor.init();
} else {
  module.exports = PriceMonitor;
}
