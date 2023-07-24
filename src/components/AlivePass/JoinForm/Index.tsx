import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CountryCodes from "./CountryCodes.json";

type Props = { open: boolean; onClose: () => void };

const JoinForm = ({ open, onClose }: Props) => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState<string>();
  const [mobile, setMobile] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [industryType, setType] = useState<string>();
  const [countryCode, setCountryCode] = useState<{
    name: string;
    dial_code: string;
    code: string;
  }>();

  const onSubmit = async () => {
    setLoading(true);
    // const auth = {
    //   username: process.env.REACT_APP_MJ_APIKEY_PUBLIC,
    //   password: process.env.REACT_APP_MJ_APIKEY_PRIVATE,
    // } as any;
    // const data = {
    //   FromEmail: "logesh@nusic.fm",
    //   FromName: "Mailjet Pilot",
    //   Subject: "Join Registration - NUSIC",
    //   "Text-part": `Name: ${name}, \n Mobile: ${mobile}, \n Email: ${email} \n, Industry Type: ${industryType}`,
    //   Recipients: [{ Email: "logesh@nusic.fm" }, { Email: "team@nusic.fm" }],
    // };
    try {
      //   await axios.post("https://api.mailjet.com/v3/send", data, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     auth,
      //   });
      await (window as any).Email.send({
        SecureToken: process.env.REACT_APP_SECURITY,
        To: ["logesh@nusic.fm", "team@nusic.fm"],
        From: "logesh@nusic.fm",
        Subject: "Join Registration",
        Body: `Name: ${name}, \n Mobile: (${countryCode?.name} - ${countryCode?.dial_code}}) ${mobile}, \n Email: ${email} \n, Industry Type: ${industryType}`,
      });
    } catch (e) {
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogContent>
        <Stack spacing={2}>
          <TextField
            label="Name"
            color="info"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></TextField>
          <Stack direction={"row"} spacing={1}>
            <Autocomplete
              sx={{ width: 150 }}
              color="info"
              options={CountryCodes}
              renderInput={(params) => (
                <TextField {...params} label="Country" color="info" />
              )}
              onChange={(e, newValue) => {
                if (newValue) {
                  setCountryCode(newValue);
                }
              }}
              getOptionLabel={(option) => {
                return option.code;
              }}
            />
            <TextField
              label="Mobile"
              color="info"
              value={mobile}
              onChange={(e) => {
                if (
                  !isNaN(Number(e.target.value)) &&
                  e.target.value.length <= 10
                ) {
                  setMobile(e.target.value);
                }
              }}
              InputProps={{
                startAdornment: (
                  <Typography mr={2}>
                    {countryCode?.dial_code || "+"}
                  </Typography>
                ),
              }}
              type="tel"
            />
          </Stack>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <TextField
              fullWidth
              label="email"
              color="info"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            />
          </Box>
          <Autocomplete
            sx={{ width: { xs: "100%", md: "50%" } }}
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
