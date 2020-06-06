require("dotenv").config();
const config = require("./lib/config");
const Coinbase = require("./lib/coinbase");

class PriceMonitor {
  constructor() {
    this.config = config;
    this.coinbase = new Coinbase(this.config.coinbase);
    this.
  }

  init() {}
}

if (require.main === module) {
  const priceMonitor = new PriceMonitor();
  priceMonitor.init();
} else {
  module.exports = PriceMonitor;
}
