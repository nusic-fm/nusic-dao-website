import { Dialog } from "@material-ui/core";
import { Box, Button, DialogContent, Grid, Typography } from "@mui/material";

const ReceiptDialog = (props: {
  isOpen: boolean;
  handleClose: () => void;
  noOfTokens: number;
  txHash: string;
}) => {
  const { isOpen, handleClose, noOfTokens, txHash } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose} fullScreen>
      <DialogContent style={{ backgroundColor: "#17172F" }}>
        <Box mt={4}>
          <Typography variant="h3" align="center">
            Congratulations! You’ve minted {noOfTokens} NUSIC Governance NFT(s)!
          </Typography>
        </Box>

        <Grid container mt={4}>
          <Grid item xs={false} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <Box display="flex" justifyContent="center">
              <Box width="250px" height="250px" position="relative">
                <video width="100%" autoPlay muted loop>
                  <source src="/assets/NUSIC-NFT.webm" type="video/webm" />
                </video>
                <Box
                  position="absolute"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  width="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  top="0"
                >
                  <Typography
                    fontSize="h5.fontSize"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    Coming soon...
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems={"center"}
              height="100%"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                height="100%"
              >
                <Box mt={{ xs: 2, md: 0 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      window.open(
                        `https://testnets.opensea.io/collection/nusictest`
                      );
                    }}
                    style={{
                      fontWeight: "bold",
                      borderRadius: "50px",
                      padding: "10px 20px",
                    }}
                    fullWidth
                  >
                    View on OpenSea
                  </Button>
                </Box>
                <Box mt={{ xs: 2, md: 0 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      window.open(`https://rinkeby.etherscan.io/tx/${txHash}`);
                    }}
                    style={{
                      fontWeight: "bold",
                      borderRadius: "50px",
                      padding: "10px 20px",
                    }}
                    fullWidth
                  >
                    View on Etherscan
                  </Button>
                </Box>
                <Box mt={{ xs: 2, md: 0 }}>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    fullWidth
                    style={{
                      fontWeight: "bold",
                      borderRadius: "50px",
                      padding: "10px 20px",
                    }}
                  >
                    Learn NUSIC DAO
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={false} md={3}></Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptDialog;
