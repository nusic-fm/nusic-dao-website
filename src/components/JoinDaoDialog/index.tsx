import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const REVUE_BASE_URL = "https://www.getrevue.co/api/v2/subscribers";

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
      return;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.REACT_APP_REVUE_API_TOKEN}`,
    };
    const data = {
      email,
      firstName,
      lastName,
    };
    try {
      await axios.post(REVUE_BASE_URL, data, { headers });
    } catch (e) {
      console.error(e);
      alert("Something went wrong! Please try again in sometime");
    }
  };

  return (
    <Box>
      <Typography variant="h2" fontWeight={900} align="center">
        Join NUSIC DAO
      </Typography>
      <Typography align="center">
        Sign-up here to join the NUSIC DAO and start the music finance
        revolution…
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
            ></TextField>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box display="flex" justifyContent="center">
            <TextField
              variant="outlined"
              label="Last Name"
              required
              margin="dense"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            ></TextField>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mt={6}>
        <Button variant="contained" onClick={onJoin}>
          Join
        </Button>
      </Box>
    </Box>
  );
};

export default JoinDaoDialog;
