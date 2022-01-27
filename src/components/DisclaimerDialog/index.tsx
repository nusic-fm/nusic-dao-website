import { Dialog } from "@material-ui/core";
import { Box, Button, DialogContent, Typography } from "@mui/material";

const DisclaimerDialog = (props: {
  isOpen: boolean;
  handleClose: () => void;
  country: string;
}) => {
  const { isOpen, handleClose, country } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose} disableEscapeKeyDown>
      <DialogContent>
        <Box mb={2}>
          <Typography color="primary.light">
            It looks like you are using a computer with an IP address located in{" "}
            <Typography
              fontWeight="bold"
              color="primary.light"
              component={"span"}
            >
              {country}
            </Typography>
            . If you are not located in{" "}
            <Typography
              fontWeight="bold"
              color="primary.light"
              component={"span"}
            >
              {country}
            </Typography>
            , please click “Continue” to access the NUSIC DAO NFT governance
            minting website. If you are located in{" "}
            <Typography
              fontWeight="bold"
              color="primary.light"
              component={"span"}
            >
              {country}
            </Typography>
            , please read below.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography color="primary.light">
            NUSIC DAO is a Digital Autonomous Organization on the Ethereum
            mainnet. The products and services on this website are administered
            through the smart contracts that have been written by human
            developers. The NUSIC DAO NFTs should not be considered as
            investments or securities, they merely grant the right to vote for
            the direction of NUSIC DAO.
          </Typography>
        </Box>
        <Box mb={4}>
          <Typography color="primary.light">
            If you are located in{" "}
            <Typography
              fontWeight="bold"
              color="primary.light"
              component={"span"}
            >
              {country}
            </Typography>{" "}
            and click on “Continue” to visit this website, you confirm that you
            have read and understood the above and you are visiting this website
            on your own initiative without any active promotion or solicitation
            from NUSIC DAO or other affiliated parties.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button size="large" onClick={handleClose} variant="contained">
            Continue
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog;
