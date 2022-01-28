import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRef } from "react";
import JoinDaoDialog from "../../components/JoinDaoDialog";
import NFTSale from "../../components/NFTSale";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    backgroundImage: "url(assets/NUSIC-Artwork.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
    borderColor: "rgb(23,23,47)",
  },
  rowTwo: {
    fontSize: "24px",
  },
  button: {
    backgroundColor: "transparent !important",
    "&:hover": {
      backgroundColor: "rgb(255,255,255) !important",
      color: "black !important",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const saleElem = useRef<null | HTMLDivElement>(null);

  return (
    <Box style={{ backgroundColor: "#17172F" }}>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt={7}
      >
        <Box mb={1}>
          <Typography variant="h2" fontWeight={900} align="center">
            The Music Finance Revolution
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" align="center">
            Mint your NFT membership
          </Typography>
        </Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.button}
          style={{
            padding: "20px 30px",
            border: "2px solid white",
            boxShadow: "none",
            fontWeight: "bold",
            borderRadius: "50px",
          }}
          onClick={() => {
            saleElem.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Join Now
        </Button>
      </Box>
      <Box minHeight={"50vh"} display="flex" alignItems="center">
        <Box>
          <Typography variant="h4" align="center" fontWeight="bold">
            What is NUSIC DAO?
          </Typography>
          <Typography align="center" px={{ xs: 4, sm: 3, md: 40 }} mt={5}>
            NUSIC DAO’s mission is to unlock financial freedom for the artists
            who make our world a better place. We believe that the emergence of
            decentralized economies represents a historic opportunity to
            enshrine music as a digital asset that enables the preservation and
            appreciation of value for the medium.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} px={{ xs: 2, sm: 2, md: 20, lg: 20 }}>
        <Grid item xs={12} md={6}>
          <Box px={{ md: 10, lg: 10 }}>
            <img
              src="assets/NUSIC-Record-Sun.webp"
              alt="record"
              width={"100%"}
              height="100%"
            ></img>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            px={{ md: 10, lg: 10 }}
            display="flex"
            justifyContent="center"
            flexDirection={"column"}
            height="100%"
          >
            <Typography variant="h3" fontWeight={900}>
              A new music economy
            </Typography>
            <Box marginTop={"5%"}>
              <Typography variant="h6" fontWeight={"600"}>
                There is more money locked in DeFi than the entire music
                industry made in 2021…
              </Typography>
            </Box>
            <Box marginTop={"5%"}>
              <Typography variant="h6">
                The music industry is at a moment of pivotal change, while
                streaming has revitalized digital music revenues, a small group
                of tech intermediaries have become power brokers in the current
                landscape. NUSIC DAO changes that by Open Sourcing music
                financial technology and sharing ownership with a community of
                makers, enablers and dream actualizers.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} px={{ xs: 2, sm: 2, md: 20, lg: 20 }} mt={20}>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box px={{ md: 10, lg: 10 }}>
            <img
              src="assets/NUSIC-Diamond.webp"
              alt="record"
              width={"100%"}
              height="100%"
            ></img>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            px={{ md: 10, lg: 10 }}
            display="flex"
            justifyContent="center"
            flexDirection={"column"}
            height="100%"
          >
            <Typography variant="h3" fontWeight={900} align="left">
              Rights hodlers
            </Typography>
            <Box marginTop={"5%"}>
              <Typography variant="h6" fontWeight="600">
                Get your future streaming income now
              </Typography>
            </Box>
            <Box marginTop={"5%"}>
              <Typography variant="h6">
                Join NUSIC DAO today through pro-active contribution and
                participate in governance with NUSIC DAO NFTs - a series of
                unique artworks that grant voting power over the direction of
                NUSIC DAO and its protocols.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box mt={5} ref={saleElem}>
        <NFTSale />
      </Box>
      <Box mt={5} display="flex" alignItems="center">
        <Grid container p={2}>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <JoinDaoDialog />
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </Box>
      <Box pt={6} pb={6}>
        <Box
          p={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Box mr={2}>
            <a
              href="https://discord.gg/auPBu4dAHe"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              <img
                src="/assets/Discord-Logo.webp"
                alt="discord"
                width={"24px"}
                height={"18px"}
              />
            </a>
          </Box>
          <Box mr={2}>
            <a
              href="https://github.com/nusic-fm"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              <GitHubIcon />
            </a>
          </Box>
          <Box>
            <a
              href="https://twitter.com/nusic_protocol"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white" }}
            >
              <TwitterIcon />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
