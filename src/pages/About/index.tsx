import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import JoinDaoDialog from "../../components/JoinDaoDialog";
import { useHistory } from "react-router-dom";

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

const About = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box style={{ backgroundColor: "#17172F" }}>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={10} md={4}>
            <Box mb={3}>
              <Typography variant="h2" fontWeight={900} align="left">
                Empowering artist with financial freedom
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="h6" align="left">
                By enabling the creation of non-fungible music bonds
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={4} display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" justifyContent="center">
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {
                  history.push("/");
                }}
                style={{
                  width: "230px",
                  fontWeight: "bold"
                }}
              >
                Mint Governance NFT
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {
                  window.scrollTo({ top: 2700, behavior: "smooth" });
                }}
                style={{
                  width: "230px",
                  fontWeight: "bold"
                }}
              >
                Join the NUSIC DAO
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
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
              <Typography variant="h1" fontWeight={900}>
                A new music economy
              </Typography>
              <Box marginTop={"6%"}>
                <Box margin={"1rem 0"}>
                  <Typography variant="h6">
                    There is more money locked in DeFi than every music
                    streaming service combined made in 2020…
                  </Typography>
                </Box>
                <Typography variant="h6">
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
              <Typography variant="h1" fontWeight={900} align="left">
                Rights hodlers
              </Typography>
              <Box marginTop={"6%"}>
                <Box margin={"1rem 0"}>
                  <Typography variant="h6" fontWeight="600">
                    Get your future streaming income now
                  </Typography>
                </Box>
                <Typography variant="h6">
                  Sign-up today to be the first to hear about the NUSIC DAO
                  launch, receive an invitation to our Discord channel, and
                  participate in the Genesis Bond mint.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box pt={6} pb={6} pl={2} pr={2}>
        <Typography variant="h1" fontWeight={900} align="left">
          NU
        </Typography>
        <Box paddingTop="5%" paddingBottom="5%">
          <Typography align="center" variant="h6" fontWeight={"600"}>
            Start the music revolution
          </Typography>
        </Box>
        <Typography variant="h1" fontWeight={900} align="right">
          SIC
        </Typography>
      </Box>
      <Box pt={8}>
        <JoinDaoDialog />
      </Box>
      <Box pt={6} pb={6}>
        <Typography variant="h4" fontWeight={900} align="center">
          #NUSIC
        </Typography>
        <Box p={4} display={"flex"} justifyContent={"center"}>
          <a
            href="http://twitter.com/nusic_protocol"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <TwitterIcon />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
