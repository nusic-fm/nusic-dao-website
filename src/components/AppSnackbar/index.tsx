import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

export let openSnackbarComp: (
  status: "success" | "warning" | "error",
  msg: string
) => void;
export let closeSnackbarComp: () => void;

const AppSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<AlertColor | undefined>();

  const openSnackbar = (status: AlertColor, msg: string) => {
    setMsg(msg);
    setStatus(status);
    setIsOpen(true);
  };
  const closeSnackbar = () => {
    setIsOpen(false);
    setMsg("");
    setStatus(undefined);
  };

  useEffect(() => {
    openSnackbarComp = openSnackbar;
    closeSnackbarComp = closeSnackbar;
  }, []);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4000}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Alert severity={status} elevation={6} variant="filled">
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
