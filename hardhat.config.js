require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

PRIMARY_KEY= process.env.PRIMARY_KEY
TESTNET_RPC_URL= process.env.TESTNET_RPC_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "localhost",
  networks: {
    testnet: {
      url: TESTNET_RPC_URL,
      chainId: 97,
      accounts: [PRIMARY_KEY]
    }
  }
};
