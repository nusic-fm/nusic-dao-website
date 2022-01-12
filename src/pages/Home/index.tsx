import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRef } from "react";
import NFTSale from "../../components/NFTSale";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    backgroundImage: "url(Nusic_Sixteenth_Note_Fractal_Still.png)",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
    borderColor: "rgb(23,23,47)",
  },
  rowTwo: {
    fontSize: "24px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const saleElem = useRef<null | HTMLDivElement>(null);

  return (
    <Box>
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={1}>
          <Typography variant="h2" fontWeight={900} align="center">
            Welcome to NUSIC DAO
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" align="center">
            The music finance revolution
          </Typography>
        </Box>
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={{
            padding: "30px",
            background: "transparent",
            border: "2px solid white",
            boxShadow: "none",
            fontWeight: "bold",
          }}
          onClick={() => {
            saleElem.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Mint Governance NFT
        </Button>
      </Box>
      <Box ref={saleElem}>
        <NFTSale />
      </Box>
    </Box>
  );
};

export default Home;
