import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MetamaskWalletIcon from "../../icons/metamaskIcon.svg";
import WalletConnectIcon from "../../icons/walletConnectIcon.svg";
import CoinbaseWalletIcon from "../../icons/coinbaseWalletIcon.svg";
// import { makeStyles } from "@mui/styles";

export let openWalletsModal: () => void;
export let closeWalletsModal: () => void;

// const useStyles = makeStyles((theme: any) => ({
//   root: {
//     backgroundColor: "#17172F",
//   },
// }));

const WalletsModal = () => {
  const { login } = useAuth();
  const { account } = useWeb3React();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    openWalletsModal = openModal;
    closeWalletsModal = closeModal;
  }, []);

  useEffect(() => {
    if (account) {
      closeModal();
    }
  }, [account]);

  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <DialogTitle>Connect a wallet</DialogTitle>
      <DialogContent>
        <List sx={{ width: "300px" }}>
          <ListItem>
            <Button
              style={{ textTransform: "none", justifyContent: "space-between" }}
              size="large"
              variant="contained"
              fullWidth
              onClick={() => login()}
              endIcon={
                <img
                  src={MetamaskWalletIcon}
                  alt=""
                  width={"24px"}
                  height={"24px"}
                />
              }
            >
              MetaMask
            </Button>
          </ListItem>
          <ListItem>
            <Button
              style={{ textTransform: "none", justifyContent: "space-between" }}
              size="large"
              variant="contained"
              fullWidth
              onClick={() => login("WALLETCONNECT")}
              endIcon={
                <img
                  src={WalletConnectIcon}
                  alt=""
                  width={"24px"}
                  height={"24px"}
                />
              }
            >
              WalletConnet
            </Button>
          </ListItem>
          <ListItem>
            <Button
              style={{ textTransform: "none", justifyContent: "space-between" }}
              size="large"
              variant="contained"
              fullWidth
              onClick={() => login("COINBASE")}
              endIcon={
                <img
                  src={CoinbaseWalletIcon}
                  alt=""
                  width={"24px"}
                  height={"24px"}
                />
              }
            >
              Coinbase Wallet
            </Button>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default WalletsModal;
