import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainnet
    // 3, // Ropsten
    4, // Rinkeby
    // 5, // Goerli
    // 42, // Kovan
    // 137, // Polygon
    // parseInt(process.env.REACT_APP_MATIC_CHAIN_ID as string),
  ],
});

export const coinbaseWalletConnector = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletConnectConnector = new WalletConnectConnector({
  infuraId: process.env.REACT_APP_INFURA_ID,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  supportedChainIds: [1, 3, 4, 5, 42],
});
