import { Box, Button, Typography } from "@mui/material";
import FadeIn from "react-fade-in";

const Pfp = () => {
  return (
    <Box>
      {/* <Box style={{ backgroundUrl: "/pfp/v1.mov" }}></Box> */}
      <video
        autoPlay
        muted
        style={{ width: "100%", minHeight: "100vh", position: "fixed" }}
      >
        <source src="/assets/pfp/background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <Box position="absolute" width="100%" top="3%">
        <FadeIn delay={9000} transitionDuration={1500}>
          <Typography variant="h2" align="center">
            INSPIRING SHIT
          </Typography>
        </FadeIn>
        <FadeIn delay={10500} transitionDuration={1500}>
          <Typography variant="h2" align="center">
            MORE INSPIRING SHIT
          </Typography>
        </FadeIn>
      </Box>
      <Box position="absolute" width="100%" bottom={0}>
        <FadeIn delay={4000} transitionDuration={2500}>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            // bottom={0}
            // zIndex={100}
          >
            <img
              src="/assets/pfp/EDM-Isolated.svg"
              alt="avatar"
              width="40%"
            ></img>
            <Box
              position="absolute"
              top="90%"
              display="flex"
              justifyContent="center"
              gap={20}
              paddingLeft={10}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  fontWeight: "bold",
                }}
              >
                Discord
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  fontWeight: "bold",
                }}
              >
                Twitter
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  fontWeight: "bold",
                }}
              >
                Github
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  fontWeight: "bold",
                }}
              >
                Gitbook
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  fontWeight: "bold",
                }}
              >
                Newsletter
              </Button>
            </Box>
          </Box>
        </FadeIn>
      </Box>
    </Box>
  );
};

export default Pfp;
