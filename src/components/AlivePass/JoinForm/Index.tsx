import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

type Props = { open: boolean; onClose: () => void };

const JoinForm = ({ open, onClose }: Props) => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState<string>();
  const [mobile, setMobile] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [industryType, setType] = useState<string>();

  const onSubmit = async () => {
    setLoading(true);
    const auth = {
      username: process.env.REACT_APP_MJ_APIKEY_PUBLIC,
      password: process.env.REACT_APP_MJ_APIKEY_PRIVATE,
    } as any;
    const data = {
      FromEmail: "logesh@nusic.fm",
      FromName: "Mailjet Pilot",
      Subject: "Join Registration - NUSIC",
      "Text-part": `Name: ${name}, \n Mobile: ${mobile}, \n Email: ${email} \n, Industry Type: ${industryType}`,
      Recipients: [{ Email: "logesh@nusic.fm" }, { Email: "dev@nusic.fm" }],
    };
    try {
      await axios.post("https://api.mailjet.com/v3/send", data, {
        headers: {
          "Content-Type": "application/json",
        },
        auth,
      });
    } catch (e) {
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Stack spacing={2}>
          <TextField
            label="Name"
            color="info"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></TextField>
          <Stack direction={"row"} spacing={2}>
            <TextField
              label="Mobile"
              color="info"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
              type="tel"
            ></TextField>
            <TextField
              label="email"
              color="info"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            ></TextField>
          </Stack>
          <Autocomplete
            color="info"
            options={[
              "Artist",
              "Management",
              "Label",
              "Distributor",
              "Platform",
              "Other",
            ]}
            renderInput={(params) => (
              <TextField {...params} label="Industry Role" color="info" />
            )}
            onChange={(e, newValue) => setType(newValue as string)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={loading}
          color="info"
          variant="contained"
          onClick={onSubmit}
        >
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default JoinForm;
