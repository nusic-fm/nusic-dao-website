import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CountryCodes from "./CountryCodes.json";

const JoinForm = () => {
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
        To: ["contact@nusic.fm"],
        From: "logesh@nusic.fm",
        Subject: "Join Registration",
        Body: `Name: ${name}, \n Mobile: (${countryCode?.name} - ${countryCode?.dial_code}}) ${mobile}, \n Email: ${email} \n, Industry Type: ${industryType}`,
      });
      alert("Submitted! We will reach out to you soon. Thanks");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        label="Name"
        color="info"
        variant="filled"
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
            <TextField
              {...params}
              label="Country"
              color="info"
              variant="filled"
            />
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
            if (!isNaN(Number(e.target.value)) && e.target.value.length <= 10) {
              setMobile(e.target.value);
            }
          }}
          InputProps={{
            startAdornment: (
              <Typography mr={2}>{countryCode?.dial_code || "+"}</Typography>
            ),
          }}
          type="tel"
          variant="filled"
        />
      </Stack>
      <Box width={"100%"}>
        <TextField
          fullWidth
          label="Email"
          color="info"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          variant="filled"
        />
      </Box>
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
          <TextField
            {...params}
            label="Industry Role"
            color="info"
            variant="filled"
          />
        )}
        onChange={(e, newValue) => setType(newValue as string)}
      />

      <Box display={"flex"} justifyContent="center" gap={2}>
        <LoadingButton
          loading={loading}
          // color="info"
          variant="contained"
          onClick={onSubmit}
          size="small"
        >
          Submit
        </LoadingButton>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          href={`mailto:contact@nusic.fm?subject=${encodeURIComponent(
            "Hi NUSIC!"
          )}`}
          target="_blank"
        >
          Email Us
        </Button>
      </Box>
    </Stack>
  );
};

export default JoinForm;
