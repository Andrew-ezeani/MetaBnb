import React from "react";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import metaMaskLogo from "../assets/metaMaskLogo.png";
import WalletConnectLogo from "../assets/image 69.png";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { WalletBtn } from "../utils/utils";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  maxWidth: "80vw",
  borderRadius: "16px",
  backgroundColor: "#FFF",
  boxShadow: 24,
  p: 4,
  padding: 0,
};

const ButtonComp = ({ width }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          marginRight: "9.4px",
          background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);",
          borderRadius: "10px",
          width: width,
          height: "48px",
          margin: { xs: "0 auto", lg: "0 35px" },
        }}
      >
        Connect Wallet
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Connect Wallet
              </Typography>
              <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
            </Box>

            <Divider />
            <Stack spacing={2} direction="column" sx={{ padding: "20px" }}>
              <Typography variant="body1">Choose your wallet:</Typography>
              <Box
                sx={{
                  marginTop: ".5rem",
                }}
              >
                <WalletBtn
                  image={metaMaskLogo}
                  text={"Metamask"}
                  bg={"#d5d9de"}
                />
              </Box>

              <Box
                sx={{
                  marginTop: "1rem",
                }}
              >
                <WalletBtn image={WalletConnectLogo} text={"WalletCoin"} />
              </Box>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default ButtonComp;
