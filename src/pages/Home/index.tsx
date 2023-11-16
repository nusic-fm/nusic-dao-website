import { Button, Fab, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useRef, useState } from "react";
import AlivePass from "../../components/AlivePass";
import JoinForm from "../../components/AlivePass/JoinForm/Index";
import CodeIcon from "@mui/icons-material/Code";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import _ from "lodash";

type Props = {};

const chars = [
  "1",
  "2",
  "3",
  // ... many more symbols...
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const Symbol = ({ primary, opacity }: any) => {
  const [char, setChar] = useState(
    () => chars[Math.floor(Math.random() * chars.length)]
  );

  return (
    <div className={"symbol " + (primary ? "primary" : "")} style={{ opacity }}>
      <img src={`/notes/${char}.png`} alt="" />
    </div>
  );
};
const SYMBOL_HEIGHT = 30; // Empirically :)
const SYMBOL_WIDTH = 18;
const Code = () => {
  const [startTime] = useState(_.random(1000, 30000)); // each starts at a different time
  const [opacity, setOpacity] = useState(1); // state for Symbol opacity

  const [codeLength, setCodeLength] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [transition, setTransition] = useState("");
  const [transform, setTransform] = useState("");

  useEffect(() => {
    // Some lines are zoomed-in, some zoomed-out
    const scaleRatio = _.random(0.8, 1.4); // Empirically chosen numbers
    // Min code height is height of the screen. No good reason but - why not
    const minCodeHeight = _.round(window.innerHeight / SYMBOL_HEIGHT);
    // This should calculate how much pixels does the line take
    const codeLength = _.random(minCodeHeight, minCodeHeight * 2);
    // Hacky solution to get the line above top=0 at the start (hide it)
    const yPosition = (codeLength + 1) * SYMBOL_HEIGHT * scaleRatio;
    // We don't want to have partially overlapping lines - make columns
    // It basically means the line can only fall in discrete positions
    const stepCount = _.round((window.innerWidth - 20) / SYMBOL_WIDTH);
    const xPosition = _.random(0, stepCount) * SYMBOL_WIDTH;
    // We divide by the scale ratio because if it is small it is probably far => thus slower :)
    const transition = `top linear ${_.random(10, 15) / scaleRatio}s`; // Different speed
    const transform = `scale(${scaleRatio})`;

    setCodeLength(codeLength);
    setYPosition(yPosition);
    setXPosition(xPosition);
    setTransition(transition);
    setTransform(transform);

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      // Perform any cleanup if needed
    };
  }, []); // Empty dependency array

  useEffect(() => {
    // componentDidMount equivalent
    const timeoutId = setTimeout(() => {
      const newHeight = window.innerHeight + yPosition;
      setYPosition(-newHeight); // must be - b/c of start
    }, startTime);

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      clearTimeout(timeoutId);
    };
  }, [startTime, yPosition]);

  useEffect(() => {
    // Set opacity to small for the last 5
    // the last one will have the least opacity, 5th from last will have almost full
    setOpacity((i) => (i <= 5 ? i / 5 : 1));
  }, []);

  const code = _.times(codeLength).map((x, i) => (
    <Symbol key={i} opacity={opacity} />
  ));

  const styles = {
    left: xPosition,
    top: -yPosition,
    transition,
    transform,
  };

  // here we render a list of symbols and one more - primary
  return (
    <div className="code" style={styles}>
      {code}
      <Symbol primary={true} />
    </div>
  );
};

// sx={{
//   background:
//     "linear-gradient(0deg, rgba(27,19,51,1) 20%, rgba(2,1,3,1) 100%)",
// }}

const Matrix = () => {
  const CODE_LINES_COUNT = 100;
  const codes = _.times(CODE_LINES_COUNT).map((x, i) => <Code key={i} />);
  return <div className="Matrix">{codes}</div>;
};

const Home = (props: Props) => {
  const buyRef = useRef(null);
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box>
      <Box minHeight="100vh" position={"relative"} zIndex={99999}>
        <Box
          height={{ xs: "150px", md: "300px" }}
          style={{ position: "absolute" }}
        >
          <img src="/home/Ellipse1.png" alt="" height={"100%"}></img>
        </Box>
        <Box position="relative">
          <Box
            position={"absolute"}
            width="100%"
            display={"flex"}
            justifyContent="center"
            py={2}
            zIndex={999}
          >
            <img src="/nusic_white.png" alt="" width={100} />
          </Box>
          <Stack height={"100vh"} justifyContent={"center"} alignItems="center">
            <Typography
              variant="h2"
              fontWeight={700}
              textTransform="uppercase"
              align="center"
              sx={{
                background:
                  "radial-gradient(10495.71% 262.76% at 44.99% 0.6%, #5432FF 0%, #45BFDA 46.15%, #9000E9 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NEXT GEN MUSIC PROTOCOL
            </Typography>
            <Typography align="center" width={{ md: "50%" }} sx={{ mt: 3 }}>
              Unlocking the true value of music through trackable, interoperable
              metadata, end-to-end cryptographic settlement and supercharged,
              superfan engagement
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            background: "#1b1433",
          }}
          gap={1}
          height="100vh"
          display={"flex"}
          alignItems="center"
        >
          <Stack
            direction="row"
            // alignItems="center"
            justifyContent={"center"}
            gap={2}
            flexWrap="wrap"
          >
            <Stack
              width={{ xs: "100%", md: "30%", lg: "25%", xl: "20%" }}
              sx={{
                background:
                  "radial-gradient(circle, rgba(0,149,130,1) 0%, rgba(154,69,179,1) 48%, rgba(94,16,117,1) 100%)",
                backgroundAttachment: "fixed",
              }}
              p={4}
              borderRadius="6px"
              gap={2}
            >
              {/* <img src="/alive/1.png" alt="" width={50} /> */}
              <CodeIcon color="secondary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" fontWeight={900}>
                SYNC LEDGER
              </Typography>
              <Typography>
                Metadata administration protocol that enables synchronization
                throughout next generation internet and AI infrastructure
              </Typography>
            </Stack>
            <Stack
              width={{ xs: "100%", md: "34%", lg: "25%", xl: "20%" }}
              sx={{
                background:
                  "radial-gradient(71.89% 71.89% at 68.2% 28.11%, #3D8494 0%, #66198A 55.04%, #4E4192 100%)",
                backgroundAttachment: "fixed",
              }}
              p={4}
              borderRadius="6px"
              gap={2}
            >
              {/* <img src="/alive/2.png" alt="" width={50} /> */}
              <MobileScreenShareIcon color="secondary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" fontWeight={900}>
                NUMIX APP
              </Typography>
              <Typography>
                Direct to Consumer application that unlocks powerful superfan
                engagement through GenAI powered remixes and contests
              </Typography>
            </Stack>
            <Stack
              width={{ xs: "100%", md: "30%", lg: "25%", xl: "20%" }}
              sx={{
                background:
                  "radial-gradient(circle, rgba(58,180,164,1) 0%, rgba(70,40,144,1) 48%, rgba(154,69,179,1) 100%)",
                backgroundAttachment: "fixed",
              }}
              p={4}
              borderRadius="6px"
              gap={2}
            >
              {/* <img src="/alive/3.png" alt="" width={50} /> */}
              <img src="/alive/2.png" alt="" width={50} />
              <Typography variant="h5" fontWeight={900}>
                ONCHAIN INDEXER
              </Typography>
              <Typography>
                Aggregating the entire onchain music ecosystem, from Music NFTs
                to Web 3.0 gaming to immutable music file storage and compute
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Stack
          py={10}
          sx={{
            background: "#1b1433",
          }}
          gap={1}
          minHeight={"100vh"}
        >
          <Box>
            <Stack justifyContent="center" gap={{ xs: 5, md: 4 }}>
              <Typography
                variant="h4"
                align="center"
                fontWeight={900}
                sx={{ mt: 10 }}
              >
                SYNC LEDGER
              </Typography>
              <Typography align="center">
                Immutable music metadata that future proofs your sound for the
                next generation of music consumption
              </Typography>
              <Box display={"flex"} justifyContent="center">
                <Box width={{ xs: "70%", md: "40%" }}>
                  <img src="/home/meta_admin.png" alt="" width={"100%"} />
                </Box>
              </Box>
              <Typography align="center">
                Toolkit for annotating granular, trackable data for recurring,
                near realtime payments and transparent accounting
              </Typography>
              <Typography variant="h4" align="center">
                Protect & Manage Copyright in new models
              </Typography>
            </Stack>
            <Typography
              variant="h4"
              align="center"
              fontWeight={900}
              sx={{ mt: 10 }}
            >
              NUMIX APP
            </Typography>
            {/* <Box
            sx={{ mt: 10 }}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            <img src="numix_logo.png" width={150} alt="" />
          </Box> */}
            <Box
              display={"flex"}
              gap={2}
              mt={4}
              flexWrap={{ xs: "wrap", md: "unset" }}
              alignItems={"center"}
              justifyContent="center"
              p={2}
            >
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                minWidth="50%"
              >
                <Box width={{ xs: "50%", md: "40%" }}>
                  <img src="/numix_app.png" alt="" width={"100%"}></img>
                </Box>
              </Box>
              <Box>
                <Grid container rowGap={1}>
                  {/* <Grid item xs={false} md={2} /> */}
                  {/* <Grid item xs={12} md={10}>
                  <Typography variant="h5" fontWeight={900}>
                    Creator First
                  </Typography>
                </Grid> */}
                  <Grid item xs={false} md={2} />
                  <Grid item xs={12} md={10}>
                    <Box
                      sx={{ background: "#A18EFF" }}
                      borderRadius={"10px"}
                      p={2}
                      width={{ md: "80%" }}
                    >
                      <Typography>
                        Engage with superfans and fans through powerful
                        activations which unlock the value of your audience
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={false} md={1} />
                  <Grid item xs={12} md={11}>
                    <Box
                      sx={{
                        background:
                          "linear-gradient(93.61deg, #563FC8 27.66%, #9E00FF 75.36%)",
                      }}
                      borderRadius={"10px"}
                      p={2}
                      display="flex"
                      width={{ md: "80%" }}
                    >
                      <Typography>
                        Infinitely scalable AI-powered remixes that empower your
                        fans to engage with the process of music creation
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Box
                      sx={{ background: "#A18EFF" }}
                      borderRadius={"10px"}
                      p={2}
                      width={{ md: "80%" }}
                    >
                      <Typography>
                        Contests which bring your fans closer to you while
                        catapulting your music to a brand new audience
                      </Typography>
                    </Box>
                  </Grid>
                  {/* <Grid item md={12} mt={2}>
                  <Typography variant="h5" fontWeight={900}>
                    Onchain Data
                  </Typography>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Box
                    sx={{
                      background:
                        "linear-gradient(93.61deg, #563FC8 27.66%, #9E00FF 75.36%)",
                    }}
                    borderRadius={"10px"}
                    p={2}
                    display="flex"
                    width={{ md: "80%" }}
                  >
                    <Typography>
                      Chain-agnostic version control for music releases
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={1} />
                <Grid item xs={12} md={11}>
                  <Box
                    sx={{ background: "#A18EFF" }}
                    borderRadius={"10px"}
                    p={2}
                    width={{ md: "80%" }}
                  >
                    <Typography>
                      Standards above and beyond industry benchmarks
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={2} />
                <Grid item xs={12} md={10}>
                  <Box
                    sx={{
                      background:
                        "linear-gradient(93.61deg, #563FC8 27.66%, #9E00FF 75.36%)",
                    }}
                    borderRadius={"10px"}
                    p={2}
                    display="flex"
                    width={{ md: "80%" }}
                  >
                    <Typography>Music NFT metadata and permissions</Typography>
                  </Box>
                </Grid> */}
                </Grid>
              </Box>
            </Box>
          </Box>
          <Stack
            minHeight={"100vh"}
            justifyContent="center"
            gap={{ xs: 5, md: 4 }}
          >
            <Typography variant="h4" align="center" fontWeight={900}>
              ONCHAIN INDEXER
            </Typography>
            <Typography align="center">
              Listen to every Music NFT instantiated onchain with trackable
              playback and access to metadata administration
            </Typography>
            <Box display={"flex"} justifyContent="center">
              <Box width={{ xs: "70%", md: "40%" }}>
                <img src="/dream_os.png" alt="" width={"100%"} />
              </Box>
            </Box>
            <Typography align="center">
              Enable permissions to make your Music NFTs available inside Web
              3.0 games based on rules you determine
            </Typography>
            <Typography variant="h4" align="center" fontWeight={900}>
              Reach new audiences and Unlock new revenue
            </Typography>
          </Stack>
        </Stack>
        <AlivePass buyRef={buyRef} />
        <JoinForm open={openForm} onClose={() => setOpenForm(false)} />
      </Box>
      <Matrix />
    </Box>
  );
};

export default Home;
