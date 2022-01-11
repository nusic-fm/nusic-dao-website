import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  linearProgressClasses,
  styled,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
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

const NFTSale = () => {
  const [selectedNoOfNFTs, setSelectedNoOfNFTs] = useState(1);
  const [noOfNFTsSold, setNoOfNFTsSold] = useState(0);
  useEffect(() => {
    setNoOfNFTsSold(50);
  }, []);
  return (
    <Box style={{ backgroundColor: "#17172F" }} pb={15}>
      <Grid container>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box p={2}>
            {/* <Typography variant="h4" align="center">
              What is NUSIC DAO?
            </Typography>
            <Box mt={4}>
              <Typography align="center">
                Our goal is to empower musicians with financial freedom, and the
                mechanism for this the NUSIC DAO which issues a rebasing
                currency backed by concentrated music streaming income. NFT
                music bonds are the first step to enabling artists to finance
                projects and introduce music streaming income into our economy.
              </Typography>
            </Box> */}
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
                <Typography variant="h5">Seed</Typography>
                <Typography variant="h5">125</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%", mr: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
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
                <Typography variant="h4">6.250 ETH</Typography>
                <Box ml={2}>
                  <Typography>per NFT</Typography>
                </Box>
              </Box>
              <Box
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  size="small"
                  type="number"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  style={{ width: "150px" }}
                  value={selectedNoOfNFTs}
                  onChange={(e) => {
                    setSelectedNoOfNFTs(parseInt(e.target.value));
                  }}
                ></TextField>
              </Box>
              <Box
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Button size="large" variant="contained">
                  Mint {selectedNoOfNFTs} for{" "}
                  {(selectedNoOfNFTs * 6.25).toFixed(2)} ETH
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} md={2}></Grid>
      </Grid>
      <Grid container mt={8} p={2}>
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
      <Grid container mt={8} p={2}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h4" align="center">
              What’s the Initial Governance Offering?
            </Typography>
            <Box mt={4}>
              <Typography align="center">
                We are offering our governance NFTs in a distributed release
                across multiple rounds. This is to ensure a fair distribution of
                governance of NUSIC DAO.
              </Typography>
            </Box>
            <Box mt={4} display={"flex"} justifyContent="center">
              <img src="rounds.png" alt="rounds" width="100%" />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container mt={8} p={2}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h4" align="center">
              How are they released?
            </Typography>
            <Box mt={4}>
              <Typography align="center">
                There is a total of 10,000 Governance NFTs. Once protocol owned
                liquidity (POL) milestones are achieved, a percentage of supply
                will be unlocked and available for mint.
              </Typography>
            </Box>
            <Grid container spacing={2} mt={4} p={2}>
              <Grid item xs={6}>
                <Box p={2} style={{ background: "#fff", opacity: "90%" }}>
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
                <Box p={2} style={{ background: "#fff", opacity: "80%" }}>
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
                <Box p={2} style={{ background: "#fff", opacity: "70%" }}>
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
                <Box p={2} style={{ background: "#fff", opacity: "60%" }}>
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
      <Grid container mt={8} p={2}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={12} md={8} style={{ backgroundColor: "white" }}>
          <Box p={4}>
            <Typography variant="h4" color="black" align="center">
              Liquidity Accumulation
            </Typography>
          </Box>
          <Box
            mt={4}
            display="flex"
            flexWrap="wrap"
            justifyContent={"space-around"}
          >
            <Box m={2} p={4} style={{ backgroundColor: "#5B21D4" }}>
              <Typography variant="h6" align="center">
                Protocol Owned Liquidity Value
              </Typography>
              <Typography align="center">Ξ 4,430</Typography>
            </Box>
            <Box m={2} p={4} style={{ backgroundColor: "#5B21D4" }}>
              <Typography variant="h6" align="center">
                Protocol Owned Liquidity Percentage
              </Typography>
              <Typography align="center">50%</Typography>
            </Box>
          </Box>
          <Box mt={4}>
            <Typography variant="h6" align="center" color="black">
              The DAO allocation will be split 50/50 between investors and the
              DAO treasury, where the treasury will require 4 out of 7 multisigs
              to count as a casting vote. Treasury members are elected by NUSIC
              DAO on fulfilment of the Seed round.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={false} md={2}></Grid>
      </Grid>
      <Grid container mt={8} p={2}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <JoinDaoDialog />
        </Grid>
        <Grid item xs={false} md={2}></Grid>
      </Grid>
    </Box>
  );
};

export default NFTSale;
