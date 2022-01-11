import { Typography, AppBar, Box, Toolbar, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "unset !important",
    backgroundImage: "unset !important",
    // padding: "20px",
    backgroundColor: "transparent !important",
  },
  withBack: {
    boxShadow: "unset !important",
    backgroundImage: "unset !important",
    // padding: "20px",
    backgroundColor: "black !important",
  },
  title: {
    flexGrow: 1,
  },
  titleText: {
    cursor: "pointer",
  },
  icon: {
    margin: "0 10px",
    cursor: "pointer",
  },
});

const Header = (props: { isBgColor: boolean; onJoinDao: () => void }) => {
  const { isBgColor, onJoinDao } = props;
  const classes = useStyles(props);

  if (isBgColor) {
    return (
      <AppBar className={classes.withBack}>
        <Toolbar>
          <Grid container>
            <Grid item xs={12} lg={4} mt={2}>
              <Typography
                variant="h4"
                className={classes.title}
                fontWeight={"1000"}
                fontFamily="Archivo Black"
              >
                NUSIC
              </Typography>
            </Grid>
            <Grid item xs={false} lg={4}></Grid>
            <Grid item xs={12} lg={4} mt={2} mb={2}>
              <Box
                display="flex"
                justifyContent={"space-evenly"}
                alignItems="center"
              >
                <Typography variant="h6" fontWeight="600">
                  <a
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Home
                  </a>
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  onClick={onJoinDao}
                  style={{ cursor: "pointer" }}
                >
                  Join DAO
                </Typography>
                <Typography variant="h6" fontWeight="600">
                  <a
                    href="https://rinkeby.nusic.fm/"
                    style={{ color: "white", textDecoration: "none" }}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Enter Testnet
                  </a>
                </Typography>
                <a
                  href="http://twitter.com/nusic_protocol"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <TwitterIcon />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item xs={12} lg={4} mt={2}>
            <Typography
              variant="h4"
              className={classes.title}
              fontWeight={"1000"}
              fontFamily="Archivo Black"
            >
              NUSIC
            </Typography>
          </Grid>
          <Grid item xs={false} lg={4}></Grid>
          <Grid item xs={12} lg={4} mt={2} mb={2}>
            <Box
              display="flex"
              justifyContent={"space-evenly"}
              alignItems="center"
            >
              <Typography variant="h6" fontWeight="600">
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </a>
              </Typography>
              <Typography
                variant="h6"
                fontWeight="600"
                onClick={onJoinDao}
                style={{ cursor: "pointer" }}
              >
                Join DAO
              </Typography>
              <Typography variant="h6" fontWeight="600">
                <a
                  href="https://rinkeby.nusic.fm/"
                  style={{ color: "white", textDecoration: "none" }}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Enter Testnet
                </a>
              </Typography>
              <a
                href="http://twitter.com/nusic_protocol"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <TwitterIcon />
              </a>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
