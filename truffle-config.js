const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "giraffe garden program modify brick truth ready enhance piano tennis account cram";

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/e2664f647af5423fa8672f931127d7b6")
      },
      network_id: 3
    }
  }
};