import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paperFullWidth": {
    backgroundColor: "#e9e9f3",
  },
}));

const REVUE_BASE_URL = "https://www.getrevue.co/api/v2/subscribers";

const JoinDaoDialog = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;

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
    <BootstrapDialog open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle>
        <Typography
          variant="h2"
          color="black"
          fontWeight={900}
          fontFamily={"Archivo Black"}
        >
          Join NUSIC DAO
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText color="black">
          Sign-up here to join the NUSIC DAO and start the music finance
          revolution…
        </DialogContentText>
        <Grid container mt={6}>
          <Grid item xs={12} md={6} mt={2}>
            <TextField
              variant="outlined"
              label="First Name"
              required
              autoFocus
              margin="dense"
              sx={{ input: { color: "black", backgroundColor: "white" } }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              InputLabelProps={{
                style: { color: "black" },
              }}
              error={isFirstNameError}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6} mt={2}>
            <TextField
              variant="outlined"
              label="Last Name"
              margin="dense"
              sx={{ input: { color: "black", backgroundColor: "white" } }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              InputLabelProps={{
                style: { color: "black" },
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              variant="outlined"
              label="Email"
              required
              type="email"
              margin="dense"
              sx={{ input: { color: "black", backgroundColor: "white" } }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: "black" },
              }}
              error={isEmailError}
            ></TextField>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" onClick={onJoin}>
          Join
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default JoinDaoDialog;
