import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  linearProgressClasses,
  styled,
  TextField,
  Button,
  CircularProgress,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useGovernance from "../../hooks/useGovernance";
import { logFirebaseEvent } from "../../services/firebase.service";
import ReceiptDialog from "../ReceiptDialog";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { openSnackbarComp } from "../AppSnackbar";

const reasons = [
  "Own a unique piece of NFT music history",
  "Claim voting rights in NUSIC DAO",
  "Contribute to acquiring music catalogs",
  "Join a community of makers & actualizers",
  "Contribute to the NUSIC protocol deployment",
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#4AAB1A",
  },
}));
const useStyles = makeStyles((theme: any) => ({
  textFieldCssLabel: {
    color: "black",
  },
  inputRoot: {
    color: "black !important",
    paddingLeft: "25%",
    fontWeight: "600",
  },
  textFieldNotchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },
  textFieldCssFocused: {},
}));

const NFT_PRICE = Number(process.env.REACT_APP_NFT_PRICE || "0.01");

const NFTSale = () => {
  const classes = useStyles();
  const [selectedNoOfNFTs, setSelectedNoOfNFTs] = useState<number>(1);
  const { totalSupply: noOfNFTsSold, mintNFTs } = useGovernance();
  const { account } = useWeb3React();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const [isTxReceiptOpen, setIsTxReceiptOpen] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string>("");
  const [noOfNftsBought, setNoOfNftsBought] = useState<number>(0);

  const onMintClick = async () => {
    if (account) {
      setIsLoading(true);
      try {
        logFirebaseEvent("mint_tx_initiated", {
          noOfTokens: selectedNoOfNFTs,
          address: `wa-${account}`,
        });
        setNoOfNftsBought(selectedNoOfNFTs);
        const tx = await mintNFTs(selectedNoOfNFTs);
        setTxHash(tx.hash);
        const receipt = await tx.wait();
        logFirebaseEvent("mint_tx_successful", {
          noOfTokens: selectedNoOfNFTs,
          address: `wa-${account}`,
          txHash: `txh-${receipt.transactionHash}`,
        });
        setIsTxReceiptOpen(true);
        console.log({ receipt });
      } catch (e: any) {
        const errorMsg = e.code || e.data?.message || e.message;
        logFirebaseEvent("mint_tx_failed", {
          noOfTokens: selectedNoOfNFTs,
          address: `wa-${account}`,
          errorMsg,
        });
        if (e.code === "INSUFFICIENT_FUNDS") {
          openSnackbarComp(
            "error",
            "Insufficient funds available to make this transaction"
          );
        } else if (e.code === 4001) {
          openSnackbarComp("error", "Transaction has been denied by the User");
        } else {
          openSnackbarComp("error", errorMsg);
          console.error(e);
        }

        logFirebaseEvent("mint_tx_failed", {
          noOfTokens: selectedNoOfNFTs,
          address: `wa-${account}`,
          errorMsg,
        });
      }
      setIsLoading(false);
    } else {
      login();
    }
  };

  const setInputValue = (noOfNftsEntered: number) => {
    const maxNoAllowed = noOfNftsEntered >= 5 ? 5 : noOfNftsEntered;
    const allowedNos = maxNoAllowed < 0 ? 0 : maxNoAllowed;
    setSelectedNoOfNFTs(allowedNos || 1);
  };

  return (
    <Box>
      <Box minHeight={"100vh"} display="flex" alignItems="center">
        <Grid container mt={8}>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Box p={2}>
              <Box display="flex" justifyContent="center">
                <Typography variant="h4" align="center" fontWeight="bold">
                  NUSIC Governance NFT
                </Typography>
                <Box ml={1}>
                  <Chip label="TESTNET" color="primary" size="small" />
                </Box>
              </Box>
              <Box mt={4} display="flex" justifyContent="center">
                <Box width="250px" height="250px" position="relative">
                  <video
                    width="100%"
                    autoPlay
                    muted
                    loop
                    style={{ borderRadius: "8px" }}
                  >
                    <source src="/assets/NUSIC-NFT.webm" type="video/webm" />
                  </video>
                  <Box
                    position="absolute"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    width="100%"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    top="0"
                    borderRadius="8px"
                  >
                    <Typography
                      fontSize="h3.fontSize"
                      color="rgba(255, 255, 255, 0.5)"
                    >
                      Coming soon...
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box mt={4}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="caption">Current round</Typography>
                  <Typography variant="caption">Total NFTs</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={4}>
                  <Typography variant="h5" fontWeight="bold">
                    Seed
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    125
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%" }} position="relative">
                  <Box
                    position="absolute"
                    left={0}
                    top={0}
                    zIndex={10}
                    display="flex"
                    alignItems="center"
                    height="100%"
                    ml={2}
                  >
                    <Typography
                      variant="body2"
                      color="#2E2E44"
                      fontWeight="bold"
                    >
                      {noOfNFTsSold} minted
                    </Typography>
                  </Box>
                  <BorderLinearProgress
                    variant={noOfNFTsSold > 0 ? "determinate" : "indeterminate"}
                    value={(noOfNFTsSold * 100) / 125}
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "white",
                      height: "25px",
                    }}
                  />
                  <Box
                    position="absolute"
                    right={0}
                    top={0}
                    zIndex={10}
                    display="flex"
                    alignItems="center"
                    height="100%"
                    mr={2}
                  >
                    <Typography
                      variant="body2"
                      color="#2E2E44"
                      fontWeight="bold"
                    >
                      {125 - noOfNFTsSold} remaining
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                mt={4}
                p={2}
                borderRadius={"4px"}
                display="flex"
                justifyContent="center"
              >
                <Box
                  style={{ backgroundColor: "white" }}
                  px={{ xs: 5, sm: 10, md: 20, lg: 20 }}
                  py={5}
                  borderRadius="4px"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      color="primary.light"
                    >
                      {/* {NFT_PRICE} ETH */}
                      Try on Testnet
                    </Typography>
                    {/* <Box ml={2}>
                      <Typography color="primary.light">per NFT</Typography>
                    </Box> */}
                  </Box>
                  <Box
                    mt={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={0.5}
                  >
                    <Box
                      mr={2}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setInputValue(selectedNoOfNFTs + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Box>
                    <TextField
                      size="small"
                      style={{ width: "80px" }}
                      value={selectedNoOfNFTs}
                      onChange={(e) => {
                        setInputValue(parseInt(e.target.value) || 0);
                      }}
                      InputLabelProps={{
                        classes: {
                          root: classes.textFieldCssLabel,
                          focused: classes.textFieldCssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.inputRoot,
                          focused: classes.textFieldCssFocused,
                          notchedOutline: classes.textFieldNotchedOutline,
                        },
                      }}
                    ></TextField>
                    <Box
                      ml={2}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setInputValue(selectedNoOfNFTs - 1);
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Box>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    fontSize={"0.7rem"}
                    color="primary.light"
                  >
                    Max 5 NFTs per Mint
                  </Typography>
                  <Box
                    mt={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      size="large"
                      variant="contained"
                      onClick={onMintClick}
                      disabled={isLoading}
                      style={{
                        fontWeight: "bold",
                        borderRadius: "50px",
                        padding: "10px 20px",
                      }}
                    >
                      {isLoading ? (
                        <CircularProgress />
                      ) : account ? (
                        `Mint ${selectedNoOfNFTs} for ${(
                          selectedNoOfNFTs * NFT_PRICE
                        ).toFixed(2)} ETH`
                      ) : (
                        "Connect Wallet"
                      )}
                    </Button>
                  </Box>
                  {/* {isLoading && (
                    <Box mt={{ xs: 2, md: 0 }}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          window.open(
                            `https://rinkeby.etherscan.io/tx/${txHash}`
                          );
                        }}
                        style={{
                          fontWeight: "bold",
                          borderRadius: "50px",
                          padding: "10px 20px",
                        }}
                        fullWidth
                      >
                        View on Etherscan
                      </Button>
                    </Box>
                  )} */}
                </Box>
              </Box>
              {/* <Box mt={2}>
                <Typography align="center">
                  NUSIC DAO NFTs are live on the Rinkeby testnet, report a
                  critical vulnerability to recieve Ξ3
                </Typography>
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </Box>
      <Box minHeight={"100vh"} display="flex" alignItems="center">
        <Grid container p={2}>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <Box>
                <Typography variant="h4" align="center" fontWeight="bold">
                  Why mint a NUSIC Governance NFT?
                </Typography>{" "}
              </Box>
              <Box
                display="flex"
                flexWrap={"wrap"}
                justifyContent="center"
                mt={4}
              >
                {reasons.map((reason, i) => (
                  <Box
                    key={i}
                    p={2}
                    pt={4}
                    pb={4}
                    m={1}
                    style={{ backgroundColor: "white" }}
                    borderRadius={4}
                    width="255px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      align="center"
                      color="black"
                      variant="h6"
                      fontWeight="600"
                    >
                      {reason}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </Box>
      <Box minHeight={"100vh"} display="flex" alignItems="center">
        <Grid container p={2}>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <Typography variant="h4" align="center" fontWeight="bold">
                What’s the Initial Governance Offering?
              </Typography>
              <Box mt={4}>
                <Typography align="center">
                  We are offering NUSIC governance NFTs in a distributed release
                  across multiple rounds. This is to ensure a furthest possible
                  distribution of NUSIC DAO governance NFTs.
                </Typography>
              </Box>
              <Box
                mt={4}
                display={"flex"}
                justifyContent="center"
                flexWrap="wrap"
              >
                <Box m={2}>
                  <Box mt={2} mb={2}>
                    <Typography align="center" variant="h5" fontWeight="bold">
                      SEED
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                  >
                    <Box
                      mb={2}
                      borderRadius={"50%"}
                      style={{ backgroundColor: "#C557CE" }}
                      width="200px"
                      height="200px"
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <Typography variant="h5">100 NFTs</Typography>
                    </Box>
                  </Box>
                  <Box
                    p={2}
                    style={{ backgroundColor: "white" }}
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    borderRadius="10px"
                  >
                    <Typography color="black" fontWeight="bold">
                      Rallying the initial contributors
                    </Typography>
                  </Box>
                </Box>
                <Box m={2}>
                  <Box mt={2} mb={2}>
                    <Typography align="center" variant="h5" fontWeight="bold">
                      PRIVATE
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                  >
                    <Box
                      mb={2}
                      borderRadius={"50%"}
                      style={{ backgroundColor: "#A3188F" }}
                      width="200px"
                      height="200px"
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <Typography variant="h5">125 NFTs</Typography>
                    </Box>
                  </Box>
                  <Box
                    p={2}
                    style={{ backgroundColor: "white" }}
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    borderRadius="10px"
                  >
                    <Typography color="black" fontWeight="bold">
                      DAO &#38; protocol deployment
                    </Typography>
                  </Box>
                </Box>
                <Box m={2}>
                  <Box mt={2} mb={2}>
                    <Typography align="center" variant="h5" fontWeight="bold">
                      PUBLIC
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                  >
                    <Box
                      mb={2}
                      borderRadius={"50%"}
                      style={{ backgroundColor: "#5B21D4" }}
                      width="200px"
                      height="200px"
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <Typography variant="h5">250 NFTs</Typography>
                    </Box>
                  </Box>
                  <Box
                    p={2}
                    style={{ backgroundColor: "white" }}
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                    borderRadius="10px"
                  >
                    <Typography color="black" fontWeight="bold">
                      Catalog acquisition &#38; growth
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography mt={4} variant="h5" align="center">
                25 Governance NFTs reserved for team and advisors
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box minHeight={"100vh"} display="flex" alignItems="center">
        <Grid container p={2}>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <Typography variant="h4" align="center" fontWeight="bold">
                How are they released?
              </Typography>
              <Box mt={4}>
                <Box mb={2}>
                  <Typography align="center">
                    There is a total of 10,000 Governance NFTs. Once protocol
                    owned liquidity (POL) milestones are achieved, a percentage
                    of supply will be unlocked and available for mint.
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography align="center">
                    50% of the total supply are reserved for the treasury, so
                    that in event of deadlock treasury have casting vote to
                    reach quorum.
                  </Typography>
                </Box>
                <Typography align="center">
                  Casting vote = 4 of 7 multisig.
                </Typography>
              </Box>
              <Grid container spacing={2} mt={4} p={2}>
                <Grid item xs={6}>
                  <Box
                    p={2}
                    style={{ background: "#fff", opacity: "90%" }}
                    borderRadius="15px"
                  >
                    <Typography variant="h5" color="black" fontWeight="bold">
                      1000 NFTs
                    </Typography>
                    <Typography variant="subtitle2" color="black">
                      10% supply unlocked prior to protocol launch
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}></Grid>

                <Grid item xs={8}>
                  <Box
                    p={2}
                    style={{ background: "#fff", opacity: "80%" }}
                    borderRadius="15px"
                  >
                    <Typography variant="h5" color="black" fontWeight="bold">
                      1500 NFTs
                    </Typography>
                    <Typography variant="subtitle2" color="black">
                      15% of supply unlocked when POL hits $1B
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}></Grid>

                <Grid item xs={10}>
                  <Box
                    p={2}
                    style={{ background: "#fff", opacity: "70%" }}
                    borderRadius="15px"
                  >
                    <Typography variant="h5" color="black" fontWeight="bold">
                      2500 NFTs
                    </Typography>
                    <Typography variant="subtitle2" color="black">
                      25% of supply unlocked when POL hits $10B
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2}></Grid>

                <Grid item xs={12}>
                  <Box
                    p={2}
                    style={{ background: "#fff", opacity: "60%" }}
                    borderRadius="15px"
                  >
                    <Typography variant="h5" color="black" fontWeight="bold">
                      5000 NFTs
                    </Typography>
                    <Typography variant="subtitle2" color="black">
                      50% of supply unlocked when POL hits $100B
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ReceiptDialog
        isOpen={isTxReceiptOpen}
        handleClose={() => {
          setIsTxReceiptOpen(false);
          setTxHash("");
          setNoOfNftsBought(0);
        }}
        txHash={txHash}
        noOfTokens={noOfNftsBought}
      />
    </Box>
  );
};

export default NFTSale;
