import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  coinbaseWalletConnector,
  injectedConnector,
  walletConnectConnector,
} from "../utils/connectors";
import { logFirebaseEvent } from "../services/firebase.service";
import { openSnackbarComp } from "../components/AppSnackbar";

const useAuth = () => {
  const { activate } = useWeb3React();

  const login = useCallback(
    (type?: "WALLETCONNECT" | "COINBASE") => {
      let connector: any = injectedConnector;
      if (type === "COINBASE") {
        connector = coinbaseWalletConnector;
      } else if (type === "WALLETCONNECT") {
        connector = walletConnectConnector;
      }
      activate(connector, async (error: Error) => {
        console.error(error);
        logFirebaseEvent("wallet_connection_failed", {
          errorName: error.name,
          errorMsg: error.message,
        });
        if (error.name === "UnsupportedChainIdError") {
          openSnackbarComp(
            "error",
            "Unsupported chain, Please connect Rinkeby Test Network to continue."
          );
        } else {
          openSnackbarComp("error", error.name || error.message);
        }
      });
    },
    [activate]
  );

  return { login };
};

export default useAuth;
