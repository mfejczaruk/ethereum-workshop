require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.ethpandaops.io/",
      accounts: ['']
    },
  },
  defaultNetwork: "sepolia",
};
