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
import { KycStatus } from "../NFTSale";

const steps = [
  {
    label: "Connect Wallet",
    description: `This wallet address will be linked to the KYC process in step 2. If you want to connect a different wallet address, switch to that address now otherwise you would have to complete the KYC process again.`,
  },
  {
    label: "Verify KYC",
    description:
      "NUSIC DAO utilises Blockpass to verify KYC in order to maintain integrity of the NUSIC protocol. This is also to keep all involved parties covered and to futureproof our governance NFT in the case of possible legislation changes. You will be directed to the KYC process once you click the button below.",
  },
  {
    label: "NFT Whitlist",
    description: `Waiting for the NFT whitlisting from the NUSIC team... This will typically take 2 to 4 hours`,
  },
];

const KycVerificationDialog = (props: {
  isOpen: boolean;
  onClose: () => void;
  kycStatus: KycStatus;
}) => {
  const { isOpen, onClose, kycStatus } = props;

  const [activeStep, setActiveStep] = useState(0);
  const { login } = useAuth();
  const { account } = useWeb3React();

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
    blockpass.on("KYCConnectClose", () => {
      //add code that will trigger when the workflow is finished. ex:
      //alert('Finished!')
    });
    blockpass.on("KYCConnectCancel", () => {
      //add code that will trigger when the workflow is aborted. ex:
      //alert('Cancelled!')
    });
    blockpass.on("KYCConnectLoad", () => {
      setIsReadyForKyc(true);
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

  useEffect(() => {
    if (kycStatus === "Not Submitted") {
      setActiveStep(0);
    } else if (kycStatus === "Pending") {
      setActiveStep(2);
    }
  }, [kycStatus]);

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
                          {activeStep === 0 ? "Continue" : "Back to Mint page"}
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
