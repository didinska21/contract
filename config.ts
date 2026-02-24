import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";
import "hardhat-contract-sizer";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.SEPOLIA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    optimism: {
      chainId: 10,
      url: process.env.OP_RPC || "https://opt-mainnet.g.alchemy.com/v2/qi5_1Bm-wpo9DsBe86PJw6fo7Xn8WodS",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    world: {
      chainId: 480,
      url: process.env.WORLD_MRPC || "https://worldchain-mainnet.g.alchemy.com/v2/qi5_1Bm-wpo9DsBe86PJw6fo7Xn8WodS",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    base: {
      chainId: 8453,
      url: process.env.BASE_RPC || "https://base-mainnet.g.alchemy.com/v2/qi5_1Bm-wpo9DsBe86PJw6fo7Xn8WodS",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    monad: {
      chainId: 10143,
      url: process.env.MONAD_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },bera: {
      chainId: 80094,
      url: process.env.BERA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      world: process.env.WORLD_ETHER_API || "",
      base: process.env.BASE_ETHER_API || "",
      optimism: process.env.OP_ETHER_API || "",
    },
    customChains: [
      {
        network: "optimism",
        chainId: 10, // <- isi sesuai chainId World Chain (isi ini nanti sesuai docs resmi)
        urls: {
          apiURL: "https://api.optimistic.etherscan.io/api",  // <- endpoint API mirip Etherscan?
          browserURL: "https://optimistic.etherscan.io",
        },
      },
      {
        network: "base",
        chainId: 8453, // <- isi sesuai chainId World Chain (isi ini nanti sesuai docs resmi)
        urls: {
          apiURL: "https://api.basescan.org/api",  // <- endpoint API mirip Etherscan?
          browserURL: "https://basescan.org",
        },
      },
      {
        network: "world",
        chainId: 480, // <- isi sesuai chainId World Chain (isi ini nanti sesuai docs resmi)
        urls: {
          apiURL: "https://api.worldscan.org/api",  // <- endpoint API mirip Etherscan?
          browserURL: "https://worldscan.org",
        },
      },
      {
        network: "monad",
        chainId: 10143,
        urls: {
          apiURL: "https://sourcify-api-monad.blockvision.org",
          browserURL: "https://explorer.testnet.monad.xyz",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};

export default config;
