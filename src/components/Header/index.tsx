import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Grid,
  Button,
  Chip,
  Tooltip,
  Popover,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../../hooks/useAuth";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import { logFirebaseEvent } from "../../services/firebase.service";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "unset !important",
    backgroundImage: "unset !important",
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

const Header = () => {
  const classes = useStyles();
  const { login } = useAuth();
  const { account } = useWeb3React();

  const history = useHistory();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const connect = async () => {
    login();
  };

  useEffect(() => {
    if (account) {
      logFirebaseEvent("wallet_connected", { address: `wa-${account}` });
    }
  }, [account]);

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={4} md={4} lg={2}>
            <Typography
              variant="h4"
              className={classes.title}
              fontWeight={"1000"}
            >
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                NUSIC
              </a>
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={10}>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              height="100%"
            >
              <Typography sx={{ p: 2 }} color="#D1D1D5">
                {account ? (
                  <Tooltip title={account}>
                    <Chip
                      clickable
                      label={`${account.slice(0, 6)}...${account.slice(
                        account.length - 4
                      )}`}
                      style={{ marginLeft: "auto" }}
                    />
                  </Tooltip>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={connect}
                    style={{ fontWeight: "bold", borderRadius: "50px" }}
                  >
                    <AccountBalanceWalletTwoToneIcon />
                  </Button>
                )}
              </Typography>
              <MenuIcon onClick={() => setIsPopoverOpen(true)} />
            </Box>
            <Popover
              open={isPopoverOpen}
              // anchorEl={anchorEl}
              onClose={() => setIsPopoverOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box style={{ backgroundColor: "#2E2E44" }}>
                <Typography sx={{ p: 2, cursor: "pointer" }} color="#D1D1D5">
                  <a
                    href="https://discord.gg/auPBu4dAHe"
                    style={{ color: "#D1D1D5", textDecoration: "none" }}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Join NUSIC DAO Now
                  </a>
                </Typography>
                <Typography
                  sx={{ p: 2 }}
                  color="#D1D1D5"
                  onClick={() => {
                    history.push("/artwork");
                    setIsPopoverOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  NUSIC NFT Artwork
                </Typography>
                <Typography
                  sx={{ p: 2 }}
                  color="#D1D1D5"
                  onClick={() => {
                    history.push("/legal");
                    setIsPopoverOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Disclaimers and Legal
                </Typography>
                <Typography sx={{ p: 2 }} color="#D1D1D5">
                  <a
                    href="https://rinkeby.nusic.fm/"
                    style={{ color: "#D1D1D5", textDecoration: "none" }}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    NFT Music Bonds
                  </a>
                </Typography>
              </Box>
            </Popover>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
