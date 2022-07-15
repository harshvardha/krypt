require("@nomicfoundation/hardhat-toolbox");

const INFURA_PROJECT_ID = "6cf2036f8f2e4a7c8c684f25e801f1ba"
const ROPSTEN_PRIVATE_KEY = "da11b48a14732088eef08fb32a141896867c9b4418dd6edf48beae428df6741f"
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 3,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  },
  path: {
    artifacts: "./src/artifacts"
  }
};
