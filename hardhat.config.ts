import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox"; // Termasuk etherscan & lainnya
import "@nomicfoundation/hardhat-ignition";
import "hardhat-deploy";
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
      viaIR: true,
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.SEPOLIA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    blast: {
      url: process.env.BLAST_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	viction: {
      url: process.env.VICTION_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
	  chainId: 88,          // penting agar gas estimation valid
	  timeout: 120_000,     // optional, jika RPC lambat
    },
	velas: {
      url: process.env.VELAS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
	  chainId: 106,          // penting agar gas estimation valid
    },
	bitkub: {
      url: process.env.BITKUB_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
	  chainId: 96,          // penting agar gas estimation valid
    },
    genosis: {
      url: process.env.GNOSIS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    imx: {
      chainId: 13371,
      url: process.env.IMX_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    taiko: {
      chainId: 167000,
      url: process.env.TAIKO_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    milko: {
      chainId: 2001,
      url: process.env.MILKO_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    opbnb: {
      chainId: 204,
      url: process.env.OPBNB_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    bsc: {
      chainId: 56,
      url: process.env.BNB_RPC || "https://1rpc.io/bnb",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    ronin: {
      chainId: 2020,
      url: process.env.RONIN_RPC || "https://1rpc.io/bnb",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    optimism: {
      chainId: 10,
      url: process.env.OP_RPC || "https://opt-mainnet.g.alchemy.com/v2/qi5_1Bm-wpo9DsBe86PJw6fo7Xn8WodS",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    moonriver: {
      chainId: 1285,
      url: process.env.MOONRIVER_RPC || "https://opt-mainnet.g.alchemy.com/v2/qi5_1Bm-wpo9DsBe86PJw6fo7Xn8WodS",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    zora: {
      chainId: 7777777,
      url: process.env.ZORA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    light: {
      chainId: 1890,
      url: process.env.LIGHT_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    red: {
      chainId: 690,
      url: process.env.RED_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    mode: {
      chainId: 34443,
      url: process.env.MODE_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    linea: {
      chainId: 59144,
      url: process.env.LINEA_RPC || "https://linea-mainnet.g.alchemy.com/v2/QwybaS9jgl9NhS0MH7OBIUkBvziDlr5Q",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    arb: {
      chainId: 42161,
      url: process.env.ARB_RPC || "https://arb-mainnet.g.alchemy.com/v2/QwybaS9jgl9NhS0MH7OBIUkBvziDlr5Q",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    mantle: {
      chainId: 5000,
      url: process.env.MNT_RPC || "https://mantle-mainnet.g.alchemy.com/v2/QwybaS9jgl9NhS0MH7OBIUkBvziDlr5Q",
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
    gravity: {
      chainId: 1625,
      url: process.env.GRAVITY_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    astar: {
      chainId: 592,
      url: process.env.ASTAR_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    polygon: {
      chainId: 137,
      url: process.env.POLYGON_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    monad: {
      chainId: 143,
      url: process.env.MONAD_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    pharos: {
      chainId: 688688,
      url: process.env.PHAROS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    kcc: {
      chainId: 321,
      url: process.env.KCC_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    plume: {
      chainId: 98866,
      url: process.env.PLUME_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    unichain: {
      chainId: 130,
      url: process.env.UNICHAIN_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    oasis: {
      chainId: 248,
      url: process.env.OASIS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    reya: {
      chainId: 1729,
      url: process.env.REYA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    telos: {
      chainId: 40,
      url: process.env.TELOS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    lens: {
      chainId: 232,
      url: process.env.LENS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    scroll: {
      chainId: 534352,
      url: process.env.SCROLL_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    metis: {
      chainId: 1088,
      url: process.env.METIS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    soneium: {
      chainId: 1868,
      url: process.env.SONEIUM_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    sonic: {
      chainId: 146,
      url: process.env.SONIC_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    zkevm: {
      chainId: 1101,
      url: process.env.ZKEVM_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    zksync: {
      chainId: 324,
      url: process.env.ZKSYNC_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    lisk: {
      chainId: 1135,
      url: process.env.LISK_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    avax: {
      chainId: 43114,
      url: process.env.AVAX_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    moonbeam: {
      chainId: 1284,
      url: process.env.MOONBEAM_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    kava: {
      chainId: 2222,
      url: process.env.KAVA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    celo: {
      chainId: 42220,
      url: process.env.CELO_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    fantom: {
      chainId: 250,
      url: process.env.FANTOM_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    rari: {
      chainId: 1380012617,
      url: process.env.RARI_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    manta: {
      chainId: 169,
      url: process.env.MANTA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    bob: {
      chainId: 60808,
      url: process.env.BOB_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    harmony: {
      chainId: 1666600000,
      url: process.env.HARMONY_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	aurora: {
      chainId: 1313161554,
      url: process.env.AURORA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	thunder: {
      chainId: 108,
      url: process.env.THUNDER_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    vana: {
      chainId: 1480,
      url: process.env.VANA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    core: {
      chainId: 1116,
      url: process.env.CORE_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    zeta: {
      chainId: 7000,
      url: process.env.ZETA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    xdc: {
      chainId: 50,
      url: process.env.XDC_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    etherlink: {
      chainId: 42793,
      url: process.env.ETHERLINK_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    nova: {
      chainId: 42170,
      url: process.env.NOVA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    zkf: {
      chainId: 42766,
      url: process.env.ZKF_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    pls: {
      chainId: 369,
      url: process.env.PLS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    btr: {
      chainId: 200901,
      url: process.env.BTR_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    ink: {
      chainId: 57073,
      url: process.env.INK_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    merlin: {
      chainId: 4200,
      url: process.env.MERLIN_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    sei: {
      chainId: 1329,
      url: process.env.SEI_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    fuse: {
      chainId: 122,
      url: process.env.FUSE_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    ethereum: {
      chainId: 1,
      url: process.env.ETH_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    ape: {
      chainId: 33139,
      url: process.env.APE_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    tern: {
      chainId: 819,
      url: process.env.TERN_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    canto: {
      chainId: 7700,
      url: process.env.CANTO_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    dfk: {
      chainId: 53935,
      url: process.env.DFK_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    file: {
      chainId: 314,
      url: process.env.FILE_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    xlayer: {
      chainId: 196,
      url: process.env.XLAYER_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    bera: {
      chainId: 80094,
      url: process.env.BERA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    cronos: {
      chainId: 25,
      url: process.env.CRONOS_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    kaia: {
      chainId: 8217,
      url: process.env.KAIA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    bsctest: {
      chainId: 97,
      url: process.env.BSC_TEST || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    zksynctest: {
      chainId: 300,
      url: process.env.ZKSYNCT_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    zircuit: {
      chainId: 48900,
      url: process.env.ZIRCUIT_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    hyper: {
      chainId: 999,
      url: process.env.HYPER_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	ancient: {
      chainId: 888888888,
      url: process.env.ANCIENT_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	sei: {
      chainId: 1329,
      url: process.env.SEI_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	shibuya: {
      chainId: 81,
      url: process.env.SHIBUYA_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	okt: {
      chainId: 66,
      url: process.env.OKT_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	super: {
      chainId: 55244,
      url: process.env.SUPER_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	degen: {
      chainId: 666666666,
      url: process.env.DEGEN_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	allienx: {
      chainId: 10241024,
      url: process.env.ALLIENX_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	songbird: {
      chainId: 19,
      url: process.env.SONG_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
	oasis_emerald: {
      chainId: 42262,
      url: process.env.EMERALD_RPC || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    enabled: true,
    apiKey: {
      zircuit: process.env.ETHERSCAN_API_KEY || "",
      okt: process.env.ETHERSCAN_API_KEY || "",
      hyper: process.env.ETHERSCAN_API_KEY || "",
      imx: process.env.ETHERSCAN_API_KEY || "",
      sonic: process.env.ETHERSCAN_API_KEY || "",
      ronin: process.env.ETHERSCAN_API_KEY || "",
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      kaia: process.env.ETHERSCAN_API_KEY || "",
      cronos: process.env.ETHERSCAN_API_KEY || "",
      kava: process.env.ETHERSCAN_API_KEY || "",
      ethereum: process.env.ETHERSCAN_API_KEY || "",
      bera: process.env.ETHERSCAN_API_KEY || "",
      pharos: "comptutor.id",
      world: process.env.WORLD_ETHER_API || "",
      base: process.env.BASE_ETHER_API || "",
      moonbeam: process.env.BASE_ETHER_API || "",
      moonriver: process.env.BASE_ETHER_API || "",
      optimisticEthereum: process.env.OP_ETHER_API || "",
      arb: process.env.ARB_ETHER_API || "",
      mantle: process.env.MNT_ETHER_API || "",
      gravity: process.env.GRAVITY_ETHER_API || "",
      linea: process.env.LINEA_ETHER_API || "",
      polygon: process.env.POLYGON_ETHER_API || "",
      bsc: process.env.BNB_ETHER_API || "",
      plume: process.env.PLUME_API || "",
      lens: process.env.LENS_API || '',
      genosis: process.env.GNOSIS_API || '',
      monad: process.env.GNOSIS_API || '',
      unichain: process.env.GNOSIS_API || '',
      scroll: process.env.SCROLL_API || '',
      metis: process.env.METIS_API || '',
      soneium: process.env.SONEIUM_API || '',
      mode: process.env.MODE_API || '',
      taiko: process.env.TAIKO_API || '',
      blast: process.env.BLAST_API || '',
      zkevm: process.env.ZKEVM_API || '',
      zksync: process.env.ZKSYNC_API || '',
      zksynctest: process.env.ZKSYNC_API || '',
      celo: process.env.CELO_API || '',
      fantom: process.env.FANTOM_API || '',
      rari: process.env.RARI_API || '',
      manta: process.env.MANTA_API || '',
      bob: process.env.MANTA_API || '',
      oasis: process.env.OASIS_API || '',
      oasis_t: process.env.OASIS_API || '',
      zora: process.env.ZORA_API || '',
      lisk: process.env.LISK_API || '',
      avax: process.env.AVAX_API || '',
      xdc: process.env.XDC_API || '',
      nova: process.env.NOVA_API || '',
      astar: process.env.NOVA_API || '',
      zkf: process.env.NOVA_API || '',
      light: process.env.NOVA_API || '',
      red: process.env.NOVA_API || '',
      opbnb: process.env.NOVA_API || '',
      pls: process.env.NOVA_API || '',
      btr: process.env.NOVA_API || '',
      ink: process.env.NOVA_API || '',
      telos: process.env.NOVA_API || '',
      kcc: process.env.NOVA_API || '',
      sei: process.env.NOVA_API || '',
      merlin: process.env.MERLIN_API || '',
      fuse: process.env.MERLIN_API || '',
      tern: process.env.TERN_API || '',
      ape: process.env.MERLIN_API || '',
      canto: process.env.CANTO_EXP || '',
      dfk: process.env.DFK_API || '',
      xlayer: process.env.DFK_API || '',
      harmony: process.env.DFK_API || '',
      aurora: process.env.DFK_API || '',
      vana: process.env.DFK_API || '',
      core: process.env.CORE_API || '',
      zeta: process.env.CORE_API || '',
      milko: process.env.CORE_API || '',
      bsctest: process.env.BNB_ETHER_API || '',
      shibuya: process.env.BNB_ETHER_API || '',
      viction: process.env.BNB_ETHER_API || '',
      thunder: process.env.BNB_ETHER_API || '',
      super: process.env.BNB_ETHER_API || '',
      ancient: process.env.BNB_ETHER_API || '',
      velas: process.env.BNB_ETHER_API || '',
      bitkub: process.env.BNB_ETHER_API || '',
      degen: process.env.BNB_ETHER_API || '',
      allienx: process.env.BNB_ETHER_API || '',
      songbird: process.env.BNB_ETHER_API || '',
      oasis_emerald: process.env.BNB_ETHER_API || '',
    },
    customChains: [
      {
        network: "dfk",
        chainId: 53935, 
        urls: {
          apiURL: "https://53935.snowtrace.io/api",
          browserURL: "https://53935.snowtrace.io",
        },
      },
	  {
        network: "allienx",
        chainId: 10241024, 
        urls: {
          apiURL: "https://explorer.alienxchain.io/api",
          browserURL: "https://explorer.alienxchain.io",
        },
      },
	  {
        network: "songbird",
        chainId: 19, 
        urls: {
          apiURL: "https://songbird-explorer.flare.network/api",
          browserURL: "https://songbird-explorer.flare.network",
        },
      },
	  {
        network: "velas",
        chainId: 106, 
        urls: {
          apiURL: "https://explorer.velas.com/api",
          browserURL: "https://explorer.velas.com",
        },
      },
	  {
        network: "degen",
        chainId: 666666666, 
        urls: {
          apiURL: "https://explorer.degen.tips/api",
          browserURL: "https://explorer.degen.tips",
        },
      },
	  {
        network: "bitkub",
        chainId: 96, 
        urls: {
          apiURL: "hhttps://www.kubscan.com/api",
          browserURL: "https://www.kubscan.com",
        },
      },
      {
        network: "ancient",
        chainId: 888888888, 
        urls: {
          apiURL: "https://scan.ancient8.gg/api",
          browserURL: "https://scan.ancient8.gg",
        },
      },
	  {
        network: "oasis",
        chainId: 248, 
        urls: {
          apiURL: "https://explorer.oasys.games/api",
          browserURL: "https://explorer.oasys.games",
        },
      },
	  {
        network: "viction",
        chainId: 88, 
        urls: {
          apiURL: "https://tomoscan.io/api",
          browserURL: "https://tomoscan.io",
        },
      },
      {
        network: "imx",
        chainId: 13371, 
        urls: {
          apiURL: "https://explorer.immutable.com/api",
          browserURL: "https://explorer.immutable.com",
        },
      },
      {
        network: "hyper",
        chainId: 999, 
        urls: {
          apiURL: "https://hyperevmscan.io/api",
          browserURL: "https://hyperevmscan.io/",
        },
      },
	  {
        network: "super",
        chainId: 55244, 
        urls: {
          apiURL: "https://explorer.superposition.so/api",
          browserURL: "https://explorer.superposition.so",
        },
      },
      {
        network: "oasis_t",
        chainId: 20197, 
        urls: {
          apiURL: "https://explorer.sandverse.oasys.games/api",
          browserURL: "https://explorer.sandverse.oasys.games",
        },
      },
	  {
        network: "thunder",
        chainId: 108, 
        urls: {
          apiURL: "https://explorer-mainnet.thundercore.com",
          browserURL: "https://explorer-mainnet.thundercore.com/",
        },
      },
      {
        network: "zksynctest",
        chainId: 300, 
        urls: {
          apiURL: "https://sepolia.explorer.zksync.io/api",
          browserURL: "https://sepolia.explorer.zksync.io",
        },
      },
      {
        network: "zeta",
        chainId: 7000, 
        urls: {
          apiURL: "https://zetachain.blockscout.com/api",
          browserURL: "https://zetachain.blockscout.com",
        },
      },
      {
        network: "sonic",
        chainId: 146, 
        urls: {
          apiURL: "https://sonicscan.org/api",
          browserURL: "https://sonicscan.org",
        },
      },
      {
        network: "zircuit",
        chainId: 48900, 
        urls: {
          apiURL: "https://explorer.zircuit.com/api",
          browserURL: "https://explorer.zircuit.com",
        },
      },
      {
        network: "harmony",
        chainId: 1666600000, 
        urls: {
          apiURL: "https://explorer.harmony.one/api",
          browserURL: "https://explorer.harmony.one/",
        },
      },
	  {
        network: "aurora",
        chainId: 1313161554, 
        urls: {
          apiURL: "https://explorer.mainnet.aurora.dev",
          browserURL: "https://explorer.mainnet.aurora.dev",
        },
      },
      {
        network: "vana",
        chainId: 1480, 
        urls: {
          apiURL: "https://vanascan.io/api",
          browserURL: "https://vanascan.io",
        },
      },
      {
        network: "core",
        chainId: 1116, 
        urls: {
          apiURL: "https://openapi.coredao.org/api",
          browserURL: "https://scan.coredao.org/",
        },
      },
      {
        network: "milko",
        chainId: 2001, 
        urls: {
          apiURL: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api",
          browserURL: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
        },
      },
      {
        network: "ronin",
        chainId: 2020, 
        urls: {
          apiURL: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api",
          browserURL: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
        },
      },
      {
        network: "bsctest",
        chainId: 97, 
        urls: {
          apiURL: "https://testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com",
        },
      },
      {
        network: "etherlink",
        chainId: 42793  , 
        urls: {
          apiURL: "https://testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com",
        },
      },
      {
        network: "moonriver",
        chainId: 1285, 
        urls: {
          apiURL: "https://moonriver.moonscan.io/api",
          browserURL: "https://moonriver.moonscan.io/",
        },
      },
      {
        network: "xlayer",
        chainId: 196, 
        urls: {
          apiURL: "https://www.oklink.com/x-layer/api",
          browserURL: "https://www.oklink.com/x-layer",
        },
      },
      {
        network: "polygon",
        chainId: 137, 
        urls: {
          apiURL: "https://api.polygonscan.com/api",
          browserURL: "https://polygonscan.com",
        },
      },
      {
        network: "kava",
        chainId: 2222, 
        urls: {
          apiURL: "https://kavascan.comm/api",
          browserURL: "https://kavascan.com",
        },
      },
      {
        network: "cronos",
        chainId: 25, 
        urls: {
          apiURL: "https://cronoscan.com/api/v2",
          browserURL: "https://kavascan.com",
        },
      },
      {
        network: "sei",
        chainId: 1329, 
        urls: {
          apiURL: "https://seitrace.com/api/v2",
          browserURL: "https://seitrace.com",
        },
      },
      {
        network: "ethereum",
        chainId: 1, 
        urls: {
          apiURL: "https://api.etherscan.io/api",
          browserURL: "https://etherscan.io",
        },
      },
      {
        network: "canto",
        chainId: 7700, 
        urls: {
          apiURL: "https://www.oklink.com/canto/api",
          browserURL: "https://www.oklink.com/canto/",
        },
      },
      {
        network: "telos",
        chainId: 40, 
        urls: {
          apiURL: "https://www.teloscan.io//api",
          browserURL: "https://www.teloscan.io",
        },
      },
      {
        network: "pls",
        chainId: 369, 
        urls: {
          apiURL: "https://scan.9mm.pr/api",
          browserURL: "https://scan.9mm.pro",
        },
      },
      {
        network: "bera",
        chainId: 80094, 
        urls: {
          apiURL: "https://berascan.com/api",
          browserURL: "https://berascan.com",
        },
      },
      {
        network: "fuse",
        chainId: 122, 
        urls: {
          apiURL: "https://explorer.fuse.io/api",
          browserURL: "https://explorer.fuse.io/",
        },
      },
      {
        network: "btr",
        chainId: 200901, 
        urls: {
          apiURL: "https://api.btrscan.com/scan/api",
          browserURL: "https://www.btrscan.com",
        },
      },
      {
        network: "red",
        chainId: 690, 
        urls: {
          apiURL: "https://explorer.redstone.xyz/api",
          browserURL: "https://explorer.redstone.xyz",
        },
      },
      {
        network: "kaia",
        chainId: 8217, 
        urls: {
          apiURL: "https://kaiascan.io/api",
          browserURL: "https://kaiascan.io",
        },
      },
	  {
        network: "okt",
        chainId: 66, 
        urls: {
          apiURL: "https://kaiascan.io/api",
          browserURL: "https://kaiascan.io",
        },
      },
      {
        network: "telos",
        chainId: 40, 
        urls: {
          apiURL: "https://www.telostx.com/api",
          browserURL: "https://www.telostx.com",
        },
      },
      {
        network: "light",
        chainId: 1890, 
        urls: {
          apiURL: "https://phoenix.lightlink.io/api",
          browserURL: "https://phoenix.lightlink.io",
        },
      },
      {
        network: "opbnb",
        chainId: 204, 
        urls: {
          apiURL: "https://opbnbscan.com/api",
          browserURL: "https://opbnbscan.com",
        },
      },
      {
        network: "avax",
        chainId: 43114, 
        urls: {
          apiURL: "https://43114.snowtrace.dev/api",
          browserURL: "https://43114.snowtrace.dev",
        },
      },
      {
        network: "nova",
        chainId: 42170, 
        urls: {
          apiURL: "https://arbitrum-nova.blockscout.com/api",
          browserURL: "https://arbitrum-nova.blockscout.com",
        },
      },
      {
        network: "xdc",
        chainId: 50, 
        urls: {
          apiURL: "https://xdcscan.com/api",
          browserURL: "https://xdcscan.com",
        },
      },
      {
        network: "zora",
        chainId: 7777777, 
        urls: {
          apiURL: "https://explorer.zora.energy/api",
          browserURL: "https://explorer.zora.energy",
        },
      },
      {
        network: "lisk",
        chainId: 1135, 
        urls: {
          apiURL: "https://blockscout.lisk.com/api",
          browserURL: "https://blockscout.lisk.com",
        },
      },
      {
        network: "kcc",
        chainId: 321, 
        urls: {
          apiURL: "https://scan.kcc.io/api",
          browserURL: "https://scan.kcc.io",
        },
      },
      {
        network: "celo",
        chainId: 42220, 
        urls: {
          apiURL: "https://api.celoscan.io/api",
          browserURL: "https://celoscan.io",
        },
      },
      {
        network: "moonbeam",
        chainId: 1284, 
        urls: {
          apiURL: "https://api.moonbeam.moonscan.io/api",
          browserURL: "https://moonbeam.moonscan.io",
        },
      },
      {
        network: "rari",
        chainId: 1380012617, 
        urls: {
          apiURL: "https://mainnet.explorer.rarichain.org/api",
          browserURL: "https://mainnet.explorer.rarichain.org",
        },
      },
      {
        network: "zkevm",
        chainId: 1101, 
        urls: {
          apiURL: "https://api.zkevm.polygonscan.com/",
          browserURL: "https://zkevm.polygonscan.com",
        },
      },
      {
        network: "zksync",
        chainId: 324, 
        urls: {
          apiURL: "https://era.zksync.network/api",
          browserURL: "https://era.zksync.network",
        },
      },
      {
        network: "file",
        chainId: 314, 
        urls: {
          apiURL: "https://filecoin.blockscout.com/api",
          browserURL: "https://filecoin.blockscout.com",
        },
      },
      {
        network: "blast",
        chainId: 81457, 
        urls: {
          apiURL: "https://api.blastscan.io/api",
          browserURL: "https://blastscan.io",
        },
      },
      {
        network: "taiko",
        chainId: 167000, 
        urls: {
          apiURL: "https://blockscoutapi.mainnet.taiko.xyz/api",
          browserURL: "https://blockscout.mainnet.taiko.xyz",
        },
      },
      {
        network: "astar",
        chainId: 592, 
        urls: {
          apiURL: "hhttps://astar.blockscout.com/api",
          browserURL: "https://astar.blockscout.com",
        },
      },
      {
        network: "zkf",
        chainId: 42766, 
        urls: {
          apiURL: "https://scan.zkfair.io/api",
          browserURL: "https://scan.zkfair.io",
        },
      },
      {
        network: "unichain",
        chainId: 130, 
        urls: {
          apiURL: "https://unichain.blockscout.com/api",
          browserURL: "https://unichain.blockscout.com",
        },
      },
      {
        network: "mode",
        chainId: 34443, 
        urls: {
          apiURL: "https://explorer.mode.network/api",
          browserURL: "https://explorer.mode.network",
        },
      },
      {
        network: "soneium",
        chainId: 1868, 
        urls: {
          apiURL: "https://soneium.blockscout.com/api",
          browserURL: "https://soneium.blockscout.com",
        },
      },
      {
        network: "genosis",
        chainId: 100,
        urls: {
          apiURL: "https://gnosis.blockscout.com/api",
          browserURL: "https://gnosis.blockscout.com"
        }
      },
      {
        network: "linea",
        chainId: 59144, 
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://lineascan.build",
        },
      },
      {
        network: "scroll",
        chainId: 534352, 
        urls: {
          apiURL: "https://api.scrollscan.com/api",
          browserURL: "https://scrollscan.com",
        },
      },
      {
        network: "bsc",
        chainId: 56,
        urls: {
          apiURL: "https://api.bscscan.com/api",
          browserURL: "https://bscscan.com",
        },
      },
      {
        network: "metis",
        chainId: 1088,
        urls: {
          apiURL: "https://api.bscscan.com/api",
          browserURL: "https://bscscan.com",
        },
      },
      {
        network: "gravity",
        chainId: 1625, 
        urls: {
          apiURL: "https://andromeda-explorer.metis.io/api",
          browserURL: "https://andromeda-explorer.metis.io",
        },
      },
      {
        network: "plume",
        chainId: 98866, 
        urls: {
          apiURL: "https://explorer.plume.org/api",
          browserURL: "https://explorer.plume.org",
        },
      },
      {
        network: "lens",
        chainId: 232, 
        urls: {
          apiURL: "https://explorer.lens.xyz/api",
          browserURL: "hhttps://explorer.lens.xyz",
        },
      },
      {
        network: "mantle",
        chainId: 5000, 
        urls: {
          apiURL: "https://api.mantlescan.xyz/api",
          browserURL: "https://mantlescan.xyz",
        },
      },
      {
        network: "base",
        chainId: 8453, 
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
      {
        network: "tern",
        chainId: 819, 
        urls: {
          apiURL: "https://t3rn.calderaexplorer.xyz/api",
          browserURL: "https://t3rn.calderaexplorer.xyz",
        },
      },
      {
        network: "ape",
        chainId: 33139, 
        urls: {
          apiURL: "https://apechain.calderaexplorer.xyz/api",
          browserURL: "https://apechain.calderaexplorer.xyz",
        },
      },
      {
        network: "world",
        chainId: 480, 
        urls: {
          apiURL: "https://api.worldscan.org/api",
          browserURL: "https://worldscan.org",
        },
      },
      {
        network: "fantom",
        chainId: 250, 
        urls: {
          apiURL: "https://ftmscout.com/api",
          browserURL: "https://ftmscout.com",
        },
      },
      {
        network: "manta",
        chainId: 169, 
        urls: {
          apiURL: "https://pacific-explorer.manta.network/api",
          browserURL: "https://pacific-explorer.manta.network",
        },
      },
      {
        network: "monad",
        chainId: 143,
        urls: {
          apiURL: "https://sourcify-api-monad.blockvision.org", // <- digunakan jika sourcify aktif
          browserURL: "https://monadvision.com",
        },
      },
      {
        network: "pharos",
        chainId: 688688,
        urls: {
          apiURL: "https://api.socialscan.io/pharos-testnet/v1/explorer/command_api/contract", // <- digunakan jika sourcify aktif
          browserURL: "https://pharos-testnet.socialscan.io/tokens",
        },
      },
      {
        network: "bob",
        chainId: 60808,
        urls: {
          apiURL: "https://explorer.gobob.xyz/api", // <- digunakan jika sourcify aktif
          browserURL: "https://explorer.gobob.xyz",
        },
      },
      {
        network: "merlin",
        chainId: 4200,
        urls: {
          apiURL: "https://scan.merlinchain.io/api", // <- digunakan jika sourcify aktif
          browserURL: "https://scan.merlinchain.io",
        },
      },
	  {
        network: "shibuya",
        chainId: 	81,
        urls: {
          apiURL: "https://shibuya.blockscout.com/api", // <- digunakan jika sourcify aktif
          browserURL: "https://shibuya.blockscout.com",
        },
      },
      {
        network: "ink",
        chainId: 57073,
        urls: {
          apiURL: "https://explorer.inkonchain.com/api", // <- digunakan jika sourcify aktif
          browserURL: "https://explorer.inkonchain.com",
        },
      },
	  {
        network: "oasis_emerald",
        chainId: 42262,
        urls: {
          apiURL: "https://explorer.oasis.io/mainnet/emerald/", // <- digunakan jika sourcify aktif
          browserURL: "https://explorer.oasis.io/mainnet/emerald",
        },
      },
	  {
       network: "sei",
       chainId: 1329,
       urls: {
         apiURL: "https://seiscan.io/api", // <- digunakan jika sourcify aktif
         browserURL: "https://seiscan.io",
      },
	  },
    ],
  },
  contractSizer: {
    runOnCompile: true,
    only: ["UniversalGaslessRelayer"] // sesuaikan dengan nama kontrakmu
  },
  sourcify: {
    enabled: false, // <- enable sourcify untuk Monad
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://monadvision.com",
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
