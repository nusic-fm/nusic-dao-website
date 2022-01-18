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
import { useMediaQuery, useTheme } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const history = useHistory();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const connect = async () => {
    login();
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Grid container>
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
          {isMobile ? (
            <Grid item xs={8}>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                height="100%"
              >
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
                  <Typography
                    sx={{ p: 2, cursor: "pointer" }}
                    color="#D1D1D5"
                    onClick={() => history.push("/about")}
                  >
                    About
                  </Typography>
                  <Typography sx={{ p: 2 }} color="#D1D1D5">
                    <a
                      href="/"
                      style={{ color: "white", textDecoration: "none" }}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Mint Governance NFT
                    </a>
                  </Typography>
                  <Typography sx={{ p: 2 }} color="#D1D1D5">
                    <a
                      href="https://rinkeby.nusic.fm/"
                      style={{ color: "white", textDecoration: "none" }}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      NFT Music Bonds
                    </a>
                  </Typography>
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
                        size="large"
                        startIcon={<AccountBalanceWalletTwoToneIcon />}
                        onClick={connect}
                        style={{ fontWeight: "bold", borderRadius: "50px" }}
                      >
                        Connect Wallet
                      </Button>
                    )}
                  </Typography>
                </Box>
              </Popover>
            </Grid>
          ) : (
            <Grid item xs={8} md={8} lg={10}>
              <Box
                display="flex"
                justifyContent={"flex-end"}
                alignItems="center"
                height="100%"
              >
                <Box mr={4}>
                  <Typography
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push("/about")}
                  >
                    About
                  </Typography>
                </Box>
                <Box mr={4}>
                  <Typography>
                      <a
                        href="/"
                        style={{ color: "white", textDecoration: "none" }}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        Mint Governance NFT
                      </a>
                    </Typography>
                </Box>
                <Box mr={4}>
                  <Typography>
                    <a
                      href="https://rinkeby.nusic.fm/"
                      style={{ color: "white", textDecoration: "none" }}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      NFT Music Bonds
                    </a>
                  </Typography>
                </Box>
                <Box>
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
                      size="medium"
                      startIcon={<AccountBalanceWalletTwoToneIcon />}
                      onClick={connect}
                      style={{ fontWeight: "bold", borderRadius: "50px", padding: "10px 20px" }}
                    >
                      Connect Wallet
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
