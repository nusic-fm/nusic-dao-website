import { Box, Button, Grid, TextField, Typography } from "@mui/material";
// import axios from "axios";
import { useState } from "react";
import { logFirebaseEvent } from "../../services/firebase.service";

// const REVUE_BASE_URL = "https://www.getrevue.co/api/v2/subscribers";

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
      alert("Kindly fill in first name and email fields!");
      return;
    }
    const data = {
      email,
      firstName,
      lastName,
    };
    logFirebaseEvent("revue_subscribers", data);
    alert("Thank you!");

    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: `Token ${process.env.REACT_APP_REVUE_API_TOKEN}`,
    // };
    // try {
    //   await axios.post(REVUE_BASE_URL, data, { headers });
    // } catch (e) {
    //   console.error(e);
    //   alert("Something went wrong! Please try again in sometime");
    // }
  };

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h3" fontWeight={900} align="center">
          Pre-Order NUSIC DAO Governance NFT
        </Typography>
      </Box>
      <Typography align="center">
        Submit your details here to secure your NUSIC DAO Governance NFT
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
