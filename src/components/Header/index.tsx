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
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import { logFirebaseEvent } from "../../services/firebase.service";
// import axios from "axios";
// import DisclaimerDialog from "../DisclaimerDialog";

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
  // const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  // const [userCountry, setUserCountry] = useState("");

  const menuRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (menuRef.current) {
      setAnchorEl(menuRef.current);
    }
  }, [menuRef]);

  const connect = async () => {
    login();
  };

  useEffect(() => {
    if (account) {
      logFirebaseEvent("wallet_connected", { address: `wa-${account}` });
      // const isAcceptedDisclaimer = localStorage.getItem("NUSIC_DISCLAIMER");
      // if (!isAcceptedDisclaimer) {
      //   fetchIpInfo();
      // }
    }
  }, [account]);

  // const fetchIpInfo = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_IPINFO_APIKEY}`
  //     );
  //     setUserCountry(res.data.country);
  //     setIsDisclaimerOpen(true);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const handleDisclaimerClose = () => {
  //   localStorage.setItem("NUSIC_DISCLAIMER", "true");
  //   setIsDisclaimerOpen(false);
  // };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={8} md={4} lg={2}>
            <Box
              display="flex"
              alignItems="center"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <img src="/assets/NUSIC-Logo.webp" alt="nusic" height="40px" />
              <Box>
                <Typography
                  variant="h4"
                  className={classes.title}
                  fontWeight={"1000"}
                >
                  NUSIC DAO
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={8} lg={10}>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              height="100%"
              ref={menuRef}
            >
              <Box sx={{ p: 2 }} color="#D1D1D5">
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
              </Box>
              <MenuIcon onClick={() => setIsPopoverOpen(true)} />
            </Box>
            <Popover
              open={isPopoverOpen}
              anchorEl={anchorEl}
              onClose={() => setIsPopoverOpen(false)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              elevation={100}
            >
              <Box style={{ backgroundColor: "#2E2E44" }}>
                <Typography sx={{ p: 2 }} color="#D1D1D5">
                  <a
                    href="https://docsend.com/view/58rkhdf2iapsjuah"
                    style={{ color: "#D1D1D5", textDecoration: "none" }}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Check the Deck
                  </a>
                </Typography>
                <Typography sx={{ p: 2, cursor: "pointer" }} color="#D1D1D5">
                  <a
                    href="https://discord.gg/auPBu4dAHe"
                    style={{ color: "#D1D1D5", textDecoration: "none" }}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Join our Discord
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
                {/* <Typography
                  sx={{ p: 2 }}
                  color="#D1D1D5"
                  onClick={() => {
                    history.push("/legal");
                    setIsPopoverOpen(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Disclaimers and Legal
                </Typography> */}
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
      {/* <DisclaimerDialog
        isOpen={isDisclaimerOpen}
        handleClose={handleDisclaimerClose}
        country={userCountry}
      /> */}
    </AppBar>
  );
};

export default Header;
