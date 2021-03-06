import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { openSnackbarComp } from "../AppSnackbar";

const JoinDaoDialog = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isFirstNameError, setIsFirstNameError] = useState<boolean>(false);

  const onJoin = async () => {
    if (firstName.length === 0 && isFirstNameError === false) {
      setIsFirstNameError(true);
    } else if (isFirstNameError === true) {
      setIsFirstNameError(false);
    }
    if (email.length === 0 && isEmailError === false) {
      setIsEmailError(true);
    } else if (isEmailError === true) {
      setIsEmailError(false);
    }
    if (!firstName || !email) {
      openSnackbarComp(
        "warning",
        "Kindly fill in first name and email fields!"
      );
      return;
    }
    const data = {
      email,
      firstName,
      lastName,
    };
    try {
      await axios.post(
        "https://chainlink-spotify-adaptor-ynfarb57wa-uc.a.run.app/add_subscriber",
        data
      );
      openSnackbarComp("success", "Thanks for joining the waitlist");
    } catch (e) {
      console.error(e);
      openSnackbarComp(
        "error",
        "Something went wrong! Please check your inbox if already joined or try again in sometime"
      );
    }
  };

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h3" fontWeight={900} align="center">
          Get Notified when Governance NFTs are available
        </Typography>
      </Box>
      <Typography align="center">
        Submit your details here to join the waitlist
      </Typography>
      <Grid container mt={6}>
        <Grid item xs={false} lg={2}></Grid>
        <Grid item xs={12} lg={4}>
          <Box display="flex" justifyContent="center">
            <TextField
              variant="outlined"
              label="First Name"
              required
              margin="dense"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={isFirstNameError}
              style={{ width: "250px" }}
            ></TextField>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box display="flex" justifyContent="center">
            <TextField
              variant="outlined"
              label="Last Name"
              margin="dense"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: "250px" }}
            ></TextField>
          </Box>
        </Grid>
        <Grid item xs={false} lg={2}></Grid>
        <Grid item xs={12} lg={8}>
          <Box display="flex" justifyContent="center">
            <TextField
              variant="outlined"
              label="Email"
              required
              type="email"
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={isEmailError}
              style={{ width: "250px" }}
            ></TextField>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mt={6}>
        <Button
          variant="contained"
          size="large"
          onClick={onJoin}
          style={{
            fontWeight: "bold",
            borderRadius: "50px",
            padding: "10px 20px",
          }}
        >
          Join
        </Button>
      </Box>
    </Box>
  );
};

export default JoinDaoDialog;
