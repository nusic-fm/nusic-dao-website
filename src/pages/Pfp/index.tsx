import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";

const images = [
  "EDM-Isolated.svg",
  "Country-Isolated.svg",
  "Metal-Isolated.svg",
  "Pop-Isolated.svg",
  "Hip-Hop-Isolated.svg",
];
let interval: number;
const widths = ["40%", "34%", "40%", "26%", "30%"];

const Pfp = () => {
  const [isImageRendered, setIsImageRendered] = useState(false);
  const [imageUrl, setImageUrl] = useState(images[4]);
  const [imageIdx, setImageIdx] = useState(4);

  useEffect(() => {
    if (isImageRendered) {
      if (interval) {
        clearInterval(interval);
      }
      interval = window.setInterval(() => {
        const newIndex = imageIdx + 1 === 5 ? 0 : imageIdx + 1;
        setImageUrl(images[newIndex]);
        setImageIdx(newIndex);
      }, 5000);
    }
  }, [isImageRendered, imageIdx]);

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
        {imageIdx === 0 && (
          <FadeIn
            delay={isImageRendered ? 0 : 4000}
            transitionDuration={2500}
            onComplete={() => {
              setIsImageRendered(true);
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              // bottom={0}
              // zIndex={100}
            >
              <img
                src={`/assets/pfp/${imageUrl}`}
                alt="avatar"
                width={widths[imageIdx]}
              ></img>
            </Box>
          </FadeIn>
        )}
        {imageIdx === 1 && (
          <FadeIn transitionDuration={2500}>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              // bottom={0}
              // zIndex={100}
            >
              <img
                src={`/assets/pfp/${imageUrl}`}
                alt="avatar"
                width={widths[imageIdx]}
              ></img>
            </Box>
          </FadeIn>
        )}
        {imageIdx === 2 && (
          <FadeIn transitionDuration={2500}>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              // bottom={0}
              // zIndex={100}
            >
              <img
                src={`/assets/pfp/${imageUrl}`}
                alt="avatar"
                width={widths[imageIdx]}
              ></img>
            </Box>
          </FadeIn>
        )}
        {imageIdx === 3 && (
          <FadeIn transitionDuration={2500}>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              // bottom={0}
              // zIndex={100}
            >
              <img
                src={`/assets/pfp/${imageUrl}`}
                alt="avatar"
                width={widths[imageIdx]}
              ></img>
            </Box>
          </FadeIn>
        )}
        {imageIdx === 4 && (
          <FadeIn transitionDuration={2500}>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              // bottom={0}
              // zIndex={100}
            >
              <img
                src={`/assets/pfp/${imageUrl}`}
                alt="avatar"
                width={widths[imageIdx]}
              ></img>
            </Box>
          </FadeIn>
        )}
      </Box>
      <Box position="absolute" width="100%" bottom={70}>
        <FadeIn delay={4000} transitionDuration={2500}>
          <Box display="flex" justifyContent="center" width="100%">
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
