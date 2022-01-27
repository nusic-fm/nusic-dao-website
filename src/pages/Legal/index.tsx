import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    backgroundImage: "url(/assets/NUSIC-DJ.JPG)",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
    borderColor: "rgb(23,23,47)",
  },
  rowTwo: {
    fontSize: "24px",
  },
}));

const Legal = () => {
  const classes = useStyles();

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
                Disclaimers and Legal Notices
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography variant="h6" align="left">
                NUSIC DAO NFTs should not be considered as investments or
                securities, they merely grant the right to vote for the
                direction of NUSIC DAO
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" justifyContent="center">
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {
                  // history.push("/");
                }}
                style={{
                  width: "230px",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
              >
                Read Disclaimers
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                style={{
                  width: "230px",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
              >
                <a
                  href="https://discord.gg/auPBu4dAHe"
                  style={{ color: "white", textDecoration: "none" }}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Join NUSIC DAO Now
                </a>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Legal;
