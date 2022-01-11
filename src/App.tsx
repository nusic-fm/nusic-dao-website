import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./App.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Header from "./components/Header";
import { useEffect, useState } from "react";
// import NFTSale from "./components/NFTSale";
import JoinDaoDialog from "./components/JoinDaoDialog";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    backgroundImage: "url(nusic_dj.JPG)",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
    borderColor: "rgb(23,23,47)",
  },
  rowTwo: {
    fontSize: "24px",
  },
}));

function App() {
  const classes = useStyles();

  const [isBgColor, setIsBgColor] = useState(false);
  const [isOpenSubscriptionForm, setIsOpenSubscriptionForm] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsBgColor(true);
    } else {
      setIsBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box>
      <Header
        isBgColor={isBgColor}
        onJoinDao={() => setIsOpenSubscriptionForm(true)}
      ></Header>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={3}>
          <Typography
            variant="h1"
            fontWeight={900}
            align="center"
            fontFamily={"Archivo Black"}
          >
            NFT MUSIC BONDS
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" align="center">
            NUSIC enables the creation of non-fungible music bonds, empowering
            artists with financial freedom
          </Typography>
        </Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{
            padding: "30px",
            background: "transparent",
            border: "2px solid white",
            boxShadow: "none",
            fontWeight: "bold",
          }}
          onClick={() => setIsOpenSubscriptionForm(true)}
        >
          Join the NUSIC DAO
        </Button>
      </Box>
      {/* <NFTSale /> */}
      <Box style={{ backgroundColor: "#e9e9f3" }}>
        <Grid container spacing={2} pl={2} pr={2} pt={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="NUSIC_record_sun.jpeg"
                alt="record"
                width={"100%"}
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={4}>
              <Typography variant="h1" color="black" fontWeight={900}>
                A new music economy
              </Typography>
              <Box marginTop={"6%"}>
                <Box margin={"1rem 0"}>
                  <Typography variant="h6" color="black">
                    There is more money locked in DeFi than every music
                    streaming service combined made in 2020…
                  </Typography>
                </Box>
                <Typography variant="h6" color="black">
                  NUSIC is building the decentralized infrastructure to power
                  the next generation of music, enabling music rights owners to
                  get project financing from future streaming income, and
                  establishing digital music as a foundational building block of
                  Web 3.0.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} pl={2} pr={2} mt={4}>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box>
              <img src="NUSIC-diamond.jpeg" alt="record" width={"100%"}></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box>
              <Typography
                variant="h1"
                color="black"
                fontWeight={900}
                align="left"
              >
                Rights hodlers
              </Typography>
              <Box marginTop={"6%"}>
                <Box margin={"1rem 0"}>
                  <Typography variant="h6" color="black" fontWeight="600">
                    Get your future streaming income now
                  </Typography>
                </Box>
                <Typography variant="h6" color="black">
                  Sign-up today to be the first to hear about the NUSIC DAO
                  launch, receive an invitation to our Discord channel, and
                  participate in the Genesis Bond mint.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ backgroundColor: "#e9e9f3" }} pt={6} pb={6} pl={2} pr={2}>
        <Typography
          variant="h1"
          color="black"
          fontWeight={900}
          align="left"
          fontFamily={"Archivo Black"}
        >
          NU
        </Typography>
        <Box paddingTop="5%" paddingBottom="5%">
          <Typography
            color="black"
            align="center"
            variant="h6"
            fontWeight={"600"}
          >
            Start the music revolution
          </Typography>
          <Box display="flex" justifyContent="center" pt={5}>
            <Button
              variant="outlined"
              onClick={() => setIsOpenSubscriptionForm(true)}
            >
              Join DAO
            </Button>
          </Box>
        </Box>
        <Typography
          variant="h1"
          color="black"
          fontWeight={900}
          align="right"
          fontFamily={"Archivo Black"}
        >
          SIC
        </Typography>
      </Box>
      <Box style={{ backgroundColor: "#e9e9f3" }} pt={6} pb={6}>
        <Typography variant="h4" color="black" fontWeight={900} align="center">
          #NUSIC
        </Typography>
        <Box p={4} display={"flex"} justifyContent={"center"}>
          <a
            href="http://twitter.com/nusic_protocol"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <TwitterIcon />
          </a>
        </Box>
      </Box>
      <JoinDaoDialog
        isOpen={isOpenSubscriptionForm}
        onClose={() => {
          setIsOpenSubscriptionForm(false);
        }}
      />
    </Box>
  );
}

export default App;
