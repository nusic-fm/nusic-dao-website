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
  return (
    <>
      <Grid container style={{ backgroundColor: "#17172F" }} pt={6} pb={6}>
        <Grid item xs={false} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box p={4}>
            <Typography variant="h4" align="center">
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
            </Box>
            <Box mt={6}>
              <Typography variant="h4" align="center">
                NUSIC Governance NFT
              </Typography>
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
            <Box>
              <BorderLinearProgress variant="determinate" value={50} />
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
                  style={{ width: "150px" }}
                ></TextField>
              </Box>
              <Box
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={10}
              >
                <Button size="large" variant="contained">
                  Mint 3 for 18 ETH
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} md={2}></Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "#17172F" }} pb={6}>
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
              {reasons.map((reason) => (
                <Box
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
    </>
  );
};

export default NFTSale;
