require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",

  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      accounts: [`${process.env.BLOCKCHAIN_RINKEBY_PRIVATE_KEY}`],
      url: `https://rinkeby.infura.io/v3/${process.env.BLOCKCHAIN_INFURA_KEY}`,
      chainId: 4,
    },
    hardhat: {
      chainId: 31337,
    },
  },
};
