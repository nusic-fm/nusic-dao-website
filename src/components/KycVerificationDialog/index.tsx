import {
  Dialog,
  Box,
  DialogContent,
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepContent,
  Button,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const steps = [
  {
    label: "Connect Wallet",
    description: `Connect your metamask wallet to which the kyc verification will be configured to.`,
  },
  {
    label: "Verify KYC",
    description:
      "Verify KYC using blockpass, Clicking the below button will take you to the blockpass site.",
  },
  {
    label: "NFT Whitlist",
    description: `Waiting for the NFT whitlisting from the NUSIC team... This will typically take 4 hours`,
  },
];

const KycVerificationDialog = (props: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const { login } = useAuth();
  const { account } = useWeb3React();
  const { isOpen, onClose } = props;

  const [isReadyForKyc, setIsReadyForKyc] = useState(false);

  const onNextStepClick = () => {
    if (activeStep === 0 && !account) {
      login();
    } else if (account) {
      setActiveStep(1);
    }
  };

  const loadBlockpassWidget = (userAccountAddress: string) => {
    const blockpass = new (window as any).BlockpassKYCConnect(
      "nusic", // service client_id from the admin console
      {
        refId: userAccountAddress, // assign the local user_id of the connected user
      }
    );

    blockpass.startKYCConnect();

    blockpass.on("KYCConnectSuccess", () => {
      alert("Congrats!!!");
      //add code that will trigger when data have been sent.
    });
    setIsReadyForKyc(true);
  };

  // useEffect(() => {
  //   if (account) {
  //     setActiveStep(1);
  //   }
  // }, [account, isOpen]);

  useEffect(() => {
    if (activeStep === 1 && account) {
      setTimeout(() => {
        loadBlockpassWidget(account);
      }, 1000);
    }
  }, [account, activeStep]);

  const hanldeClose = () => {
    onClose();
    setActiveStep(0);
    setIsReadyForKyc(false);
  };

  return (
    <Dialog open={isOpen} onClose={hanldeClose}>
      <DialogContent>
        <Box>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Box mt={2}>
                    <Typography>{step.description}</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }} mt={4}>
                    <Box>
                      {activeStep !== 1 ? (
                        <Button
                          variant="contained"
                          sx={{ mt: 1, mr: 1 }}
                          disabled={activeStep === 2}
                          onClick={onNextStepClick}
                        >
                          {activeStep === 0 ? "Connect Wallet" : "Mint"}
                        </Button>
                      ) : (
                        <button
                          id="blockpass-kyc-connect"
                          style={{
                            color: "white",
                            padding: "10px 20px",
                            border: "0px",
                            borderRadius: "50px",
                            background: "#5B21D4",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            fontFamily: '"Nunito",sans-serif',
                          }}
                        >
                          {isReadyForKyc
                            ? "Verify with Blockpass"
                            : "Preparing..."}
                        </button>
                      )}
                    </Box>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default KycVerificationDialog;
