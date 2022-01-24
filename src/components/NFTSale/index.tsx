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
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useGovernance from "../../hooks/useGovernance";
import { logFirebaseEvent } from "../../services/firebase.service";
import JoinDaoDialog from "../JoinDaoDialog";

const reasons = [
  "Help sustain NUSIC DAO’s operational costs",
  "Earn voting rights in NUSIC DAO",
  "Contribute to acquiring music catalogs",
  "Join a community of artists, music industry investors and music lovers",
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

const NFT_PRICE = Number(process.env.REACT_APP_NFT_PRICE || "0.01");

const NFTSale = () => {
  const [selectedNoOfNFTs, setSelectedNoOfNFTs] = useState<number>(1);
  const { totalSupply: noOfNFTsSold, mintNFTs } = useGovernance();
  const { account } = useWeb3React();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const onMintClick = async () => {
    if (account) {
      setIsLoading(true);
      try {
        logFirebaseEvent("mint_tx_initiated", {
          noOfTokens: selectedNoOfNFTs,
          address: `wa-${account}`,
        });
        const receipt = await mintNFTs(selectedNoOfNFTs);
        logFirebaseEvent("mint_tx_successful", {
          noOfTokens: selectedNoOfNFTs,
          address: `wa-${account}`,
          txHash: `txh-${receipt.transactionHash}`,
        });
        console.log({ receipt });
      } catch (e: any) {
        const errorMsg = e.data?.message || e.message;
        alert(errorMsg);
        console.error(e);
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

  return (
    <Box style={{ backgroundColor: "#17172F" }}>
      <Box minHeight={"100vh"} display="flex" alignItems="center">
        <Grid container mt={8}>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Box p={2}>
              <Box>
                <Typography variant="h4" align="center">
                  NUSIC Governance NFT
                </Typography>
              </Box>
              <Box mt={4} display="flex" justifyContent="center">
                <img
                  src="NFT.gif"
                  width={"300px"}
                  height={"300px"}
                  alt="nft"
                ></img>
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
                <Box sx={{ width: "100%", mr: 1 }}>
                  <BorderLinearProgress
                    variant={noOfNFTsSold > 0 ? "determinate" : "indeterminate"}
                    value={noOfNFTsSold}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">
                    {noOfNFTsSold}
                  </Typography>
                </Box>
              </Box>
              <Box mt={4}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h4" fontWeight="bold">
                    {NFT_PRICE} ETH
                  </Typography>
                  <Box ml={2}>
                    <Typography>per NFT</Typography>
                  </Box>
                </Box>
                <Box
                  mt={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={0.5}
                >
                  <TextField
                    size="small"
                    type="number"
                    style={{ width: "150px" }}
                    value={selectedNoOfNFTs}
                    onChange={(e) => {
                      const noOfNftsEntered = parseInt(e.target.value);
                      const maxNoAllowed =
                        noOfNftsEntered >= 5 ? 5 : noOfNftsEntered;
                      const allowedNos = maxNoAllowed < 0 ? 0 : maxNoAllowed;
                      setSelectedNoOfNFTs(allowedNos);
                    }}
                  ></TextField>
                </Box>
                <Typography
                  variant="subtitle2"
                  align="center"
                  fontSize={"0.7rem"}
                  color="cornflowerblue"
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
              <Box>
                <Typography variant="h4" align="center">
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
                  We are offering our governance NFTs in a distributed release
                  across multiple rounds. This is to ensure a fair distribution
                  of governance of NUSIC DAO.
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
                    <Typography align="center" variant="h5">
                      SEED
                    </Typography>
                    <Typography align="center">Ξ6.25</Typography>
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
                    borderRadius="4px"
                  >
                    <Typography color="black">
                      Setup costs and genesis bond
                    </Typography>
                  </Box>
                </Box>
                <Box m={2}>
                  <Box mt={2} mb={2}>
                    <Typography align="center" variant="h5">
                      PRIVATE
                    </Typography>
                    <Typography align="center">Ξ~</Typography>
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
                    borderRadius="4px"
                  >
                    <Typography color="black">
                      Rebasing DAO deployment
                    </Typography>
                  </Box>
                </Box>
                <Box m={2}>
                  <Box mt={2} mb={2}>
                    <Typography align="center" variant="h5">
                      PUBLIC
                    </Typography>
                    <Typography align="center">Ξ9</Typography>
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
                    borderRadius="4px"
                  >
                    <Typography color="black">
                      Catalog acquisition and growth
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
              <Typography variant="h4" align="center">
                How are they released?
              </Typography>
              <Box mt={4}>
                <Typography align="center">
                  There is a total of 10,000 Governance NFTs. Once protocol
                  owned liquidity (POL) milestones are achieved, a percentage of
                  supply will be unlocked and available for mint.
                </Typography>
              </Box>
              <Grid container spacing={2} mt={4} p={2}>
                <Grid item xs={6}>
                  <Box
                    p={2}
                    style={{ background: "#fff", opacity: "90%" }}
                    borderRadius="4px"
                  >
                    <Typography variant="h5" color="black">
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
                    borderRadius="4px"
                  >
                    <Typography variant="h5" color="black">
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
                    borderRadius="4px"
                  >
                    <Typography variant="h5" color="black">
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
                    borderRadius="4px"
                  >
                    <Typography variant="h5" color="black">
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
      <Box minHeight={"100vh"} display="flex" alignItems="center">
        <Grid container>
          <Grid item xs={false} md={2}></Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "70px 67px",
            }}
            p={4}
          >
            <Box>
              <Typography
                variant="h4"
                color="black"
                align="center"
                fontWeight="bold"
              >
                Liquidity Accumulation
              </Typography>
            </Box>
            <Box
              mt={4}
              display="flex"
              flexWrap="wrap"
              justifyContent={"space-around"}
            >
              <Box
                m={2}
                p={4}
                style={{
                  backgroundColor: "#5B21D4",
                  borderRadius: "20px",
                  padding: "30px",
                }}
              >
                <Typography variant="h6" align="center" fontWeight="bold">
                  Protocol Owned Liquidity Value
                </Typography>
                <Typography align="center">Ξ 4,430</Typography>
              </Box>
              <Box
                m={2}
                p={4}
                style={{
                  backgroundColor: "#5B21D4",
                  borderRadius: "20px",
                  padding: "30px",
                }}
              >
                <Typography variant="h6" align="center" fontWeight="bold">
                  Protocol Owned Liquidity Percentage
                </Typography>
                <Typography align="center">50%</Typography>
              </Box>
            </Box>
            <Box mt={4}>
              <Typography variant="h6" align="center" color="black">
                The DAO allocation will be split 50/50 between investors and the
                DAO treasury, where the treasury will require 4 out of 7
                multisigs to count as a casting vote. Treasury members are
                elected by NUSIC DAO on fulfilment of the Seed round.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </Box>
      <Box minHeight={"100vh"} display="flex" alignItems="center">
        <Grid container p={2}>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <JoinDaoDialog />
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default NFTSale;
