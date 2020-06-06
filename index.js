require("dotenv").config();
const Logger = require("./lib/logger");
const config = require("./lib/config");
const Coinbase = require("./lib/coinbase");
const Binance = require("./lib/binance");
const Bitstamp = require("./lib/bitstamp");

class PriceMonitor {
  constructor() {
    this.config = config;
    this.logger = new Logger("PriceMonitor");
    this.coinbase = new Coinbase(this.config.coinbase);
    this.binance = new Binance(this.config.binance);
    this.bitstamp = new Bitstamp(this.config.bitstamp);
  }

  async init() {
    this.coinbase.getPrices();
    this.binance.getPrices();
    this.bitstamp.getPrices();
  }
}

if (require.main === module) {
  const priceMonitor = new PriceMonitor();
  priceMonitor.init();
} else {
  module.exports = PriceMonitor;
}
