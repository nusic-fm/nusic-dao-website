import {
  Button,
  Fab,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import JoinForm from "../../components/AlivePass/JoinForm/Index";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

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
  const [char] = useState(
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
    const transition = `top linear ${_.random(20, 30) / scaleRatio}s`; // Different speed
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
  // Using the 'sm' (small) breakpoint
  const isUnderSmall = useMediaQuery("(max-width:600px)");

  const CODE_LINES_COUNT = isUnderSmall ? 40 : 100;

  const codes = _.times(CODE_LINES_COUNT).map((x, i) => <Code key={i} />);
  return <div className="Matrix">{codes}</div>;
};

const Home = (props: Props) => {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const syncLedgerRef = useRef<HTMLDivElement>(null);
  const numixAppRef = useRef<HTMLDivElement>(null);
  const indexerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <Box>
      <Box zIndex={100} position="relative">
        <Box height={"100vh"} position="relative">
          <Box
            position={"absolute"}
            width="calc(100% - 16px)"
            display={"flex"}
            alignItems="center"
            justifyContent={{ md: "center" }}
            p={2}
            zIndex={999}
          >
            <Box>
              <img src="/nusic_white.png" alt="" width={100} />
            </Box>
            <Box
              position={"absolute"}
              display={"flex"}
              width="100%"
              justifyContent="end"
              gap={1}
              pr={2}
              ml={{ md: "auto" }}
            >
              <Fab
                sx={{ bgcolor: "rgba(48, 48, 48, 1)" }}
                size="small"
                color="primary"
                href={"https://discord.gg/eHyRQADgQ4"}
                target="_blank"
              >
                <img src="/sections/discord_logo.webp" alt="x" width={20} />
              </Fab>
              <Fab
                sx={{ bgcolor: "rgba(48, 48, 48, 1)" }}
                size="small"
                color="primary"
                href={"https://twitter.com/nusicOfficial"}
                target="_blank"
              >
                <img src="/sections/x_logo_white.png" alt="x" width={15} />
              </Fab>
            </Box>
          </Box>
          <Box
            position={"absolute"}
            width="100%"
            display={"flex"}
            justifyContent="end"
            gap={2}
            py={2}
            pr={2}
            zIndex={999}
          ></Box>
          <Stack
            justifyContent={"center"}
            alignItems="center"
            position={"relative"}
            height="100%"
          >
            <Box sx={{ bgcolor: "#000" }}>
              <Typography
                variant="h2"
                fontWeight={700}
                textTransform="uppercase"
                align="center"
                sx={{
                  background:
                    "radial-gradient(50% 352.76% at 44.99% 0.6%, #5432FF 0%, #45BFDA 46.15%, #9000E9 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                NEXT GEN MUSIC PROTOCOL
              </Typography>
            </Box>
            <Typography
              align="center"
              width={{ xs: "85%", md: "50%" }}
              sx={{ mt: 3, bgcolor: "#000" }}
              fontWeight={700}
            >
              Unlocking the true value of music through trackable, interoperable
              metadata, end-to-end cryptographic settlement and supercharged,
              superfan engagement
            </Typography>
            <Box my={2} display="flex" justifyContent={"center"} gap={2}>
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize" }}
                onClick={() =>
                  firstSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                sx={{ textTransform: "capitalize" }}
                color="secondary"
                onClick={() =>
                  footerRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Connect
              </Button>
            </Box>
          </Stack>
          <Box
            position={"absolute"}
            width="100%"
            display={"flex"}
            justifyContent="center"
            p={2}
            bottom={0}
          >
            <Fab
              size="small"
              sx={{
                background: "rgba(67, 67, 67, 0.48)",
                backdropFilter: "blur(7.675280570983887px)",
              }}
              color="primary"
              onClick={() =>
                firstSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <KeyboardDoubleArrowDownRoundedIcon color="secondary" />
            </Fab>
          </Box>
        </Box>
        {/* <Divider /> */}
        <Box
          sx={{
            background: "#000",
          }}
          p={2}
        >
          <Box
            // gap={1}
            // height="100vh"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            my={6}
            py={2}
            ref={firstSectionRef}
          >
            <Stack
              direction="row"
              // alignItems="center"
              justifyContent={"center"}
              // spacing={4}
              flexWrap="wrap"
              gap={2}
            >
              <Stack
                width={{ xs: "100%", md: "30%", lg: "25%", xl: "20%" }}
                sx={{
                  background:
                    "linear-gradient(338deg, #161616 8.13%, rgba(22, 22, 22, 0.00) 111.55%)",
                  backgroundAttachment: "fixed",
                }}
                p={{ xs: 2, md: 4 }}
                borderRadius="6px"
                gap={{ sm: 2 }}
                direction="row"
                flexWrap={"wrap"}
              >
                <Box height={{ xs: 80, md: 220 }} width={{ xs: 80, md: 220 }}>
                  <img src="/sections/syncledger.png" alt="" width={"100%"} />
                </Box>
                <Stack
                  gap={2}
                  width={{ xs: "calc(100% - 80px)", sm: "100%" }}
                  pl={1}
                >
                  <Typography
                    // variant="h5"
                    fontWeight={900}
                    sx={{ color: "#8C76FD" }}
                  >
                    Sync Ledger
                  </Typography>
                  <Typography>
                    Metadata administration protocol that enables
                    synchronization throughout next generation internet and AI
                    infrastructure
                  </Typography>
                </Stack>

                <Box display={"flex"} justifyContent="end" width={"100%"}>
                  <IconButton
                    onClick={() =>
                      syncLedgerRef.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    <EastRoundedIcon color="secondary" />
                  </IconButton>
                </Box>
              </Stack>
              <Stack
                width={{ xs: "100%", md: "30%", lg: "25%", xl: "20%" }}
                sx={{
                  background:
                    "linear-gradient(338deg, #161616 8.13%, rgba(22, 22, 22, 0.00) 111.55%)",
                  backgroundAttachment: "fixed",
                }}
                p={{ xs: 2, md: 4 }}
                borderRadius="6px"
                gap={{ sm: 2 }}
                direction="row"
                flexWrap={"wrap"}
              >
                <Box height={{ xs: 80, md: 220 }} width={{ xs: 80, md: 220 }}>
                  <img src="/sections/numix.png" alt="" height={"100%"} />
                </Box>
                <Stack
                  gap={2}
                  width={{ xs: "calc(100% - 80px)", sm: "100%" }}
                  pl={1}
                >
                  <Typography
                    // variant="h5"
                    fontWeight={900}
                    sx={{ color: "#8C76FD" }}
                  >
                    NUMIX App
                  </Typography>
                  <Typography>
                    Direct to Consumer application that unlocks powerful
                    superfan engagement through GenAI powered remixes and
                    contests
                  </Typography>
                </Stack>

                <Box display={"flex"} justifyContent="end" width={"100%"}>
                  <IconButton
                    onClick={() =>
                      numixAppRef.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    <EastRoundedIcon color="secondary" />
                  </IconButton>
                </Box>
              </Stack>
              <Stack
                width={{ xs: "100%", md: "30%", lg: "25%", xl: "20%" }}
                sx={{
                  background:
                    "linear-gradient(338deg, #161616 8.13%, rgba(22, 22, 22, 0.00) 111.55%)",
                  backgroundAttachment: "fixed",
                }}
                p={{ xs: 2, md: 4 }}
                borderRadius="6px"
                gap={{ sm: 2 }}
                direction="row"
                flexWrap={"wrap"}
              >
                <Box height={{ xs: 80, md: 220 }} width={{ xs: 80, md: 220 }}>
                  <img
                    src="/sections/onchain_indexer.png"
                    alt=""
                    width={"100%"}
                  />
                </Box>
                <Stack
                  gap={2}
                  width={{ xs: "calc(100% - 80px)", sm: "100%" }}
                  pl={1}
                >
                  <Typography
                    // variant="h5"
                    fontWeight={900}
                    sx={{ color: "#8C76FD" }}
                  >
                    On-chain Indexer
                  </Typography>
                  <Typography>
                    Aggregating the entire onchain music ecosystem, from Music
                    NFTs to Web 3.0 gaming to immutable music file storage and
                    compute
                  </Typography>
                </Stack>

                <Box display={"flex"} justifyContent="end" width={"100%"}>
                  <IconButton
                    onClick={() =>
                      indexerRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <EastRoundedIcon color="secondary" />
                  </IconButton>
                </Box>
              </Stack>
            </Stack>
          </Box>
          {/* <Divider /> */}
          <Box
            ref={syncLedgerRef}
            sx={{
              background:
                "linear-gradient(111deg, rgba(35, 35, 35, 0.70) -4.7%, rgba(6, 0, 8, 0.70) 31.19%, rgba(13, 13, 13, 0.70) 64.92%)",
            }}
            display={"flex"}
            flexWrap="wrap"
            p={4}
            // px={"10%"}
            borderRadius="28px"
            gap={4}
            position="relative"
          >
            <Stack
              flexBasis={{ md: "40%" }}
              p={{ md: 4 }}
              justifyContent="space-between"
            >
              <Stack gap={1}>
                {/* <Typography color={"primary"} variant="h4">
                  nusic
                </Typography> */}
                <Box>
                  <Typography variant="h2" fontWeight={900}>
                    Sync
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={900}
                    position="relative"
                    zIndex={1}
                    display="inline"
                  >
                    Ledger
                    <Box
                      position={"absolute"}
                      bottom={0}
                      left={0}
                      width={"100%"}
                      sx={{ background: "#A532FF" }}
                      p={{ xs: 0.8, sm: 1, md: 1.2 }}
                      borderRadius={60}
                      zIndex={-1}
                    />
                  </Typography>
                </Box>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Immutable music metadata that future proofs your sound for the
                  next generation of music consumption
                </Typography>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Toolkit for annotating granular, trackable data for recurring,
                  near realtime payments and transparent accounting
                </Typography>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Easy-to-use and manage service designed around musical
                  standards that protects and manage copyright in new models
                </Typography>
              </Stack>
            </Stack>
            <Box
              flexBasis={{ xs: "100%", md: "55%" }}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
            >
              <Box width={{ xs: 300, sm: 400, lg: 600 }}>
                <img
                  src="/sections/syncledger_app_old.png"
                  alt=""
                  width={"100%"}
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="center" width={"100%"}>
              <IconButton
                onClick={() =>
                  firstSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ArrowUpwardRoundedIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  numixAppRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ArrowDownwardRoundedIcon />
              </IconButton>
              {/* <Button variant="contained" size="small">
                Learn More
              </Button> */}
            </Box>
          </Box>
          <Box
            ref={numixAppRef}
            sx={{
              background:
                "linear-gradient(108deg, rgba(0, 0, 0, 0.51) 26.46%, rgba(63, 63, 63, 0.51) 112.26%)",
            }}
            display={"flex"}
            flexWrap="wrap"
            mt={4}
            p={4}
            // px={"10%"}
            borderRadius="28px"
            gap={4}
            position="relative"
          >
            <Stack
              flexBasis={{ md: "45%" }}
              p={{ md: 4 }}
              justifyContent="space-between"
            >
              <Stack gap={1}>
                {/* <Typography color={"primary"} variant="h4">
                  nusic
                </Typography> */}
                <Box>
                  <Typography variant="h2" fontWeight={900}>
                    NUMIX
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={900}
                    position="relative"
                    zIndex={1}
                    display="inline"
                  >
                    App
                    <Box
                      position={"absolute"}
                      bottom={0}
                      left={0}
                      width={"100%"}
                      sx={{ background: "#A532FF" }}
                      p={{ xs: 0.8, sm: 1, md: 1.2 }}
                      borderRadius={60}
                      zIndex={-1}
                    />
                  </Typography>
                </Box>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Engage with superfans and fans through powerful activations
                  which unlock the value of your audience
                </Typography>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Infinitely scalable AI-powered remixes that empower your fans
                  to engage with the process of music creation
                </Typography>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Contests which bring your fans closer to you while catapulting
                  your music to a brand new audience
                </Typography>
              </Stack>
            </Stack>
            <Box
              flexBasis={{ xs: "100%", md: "50%" }}
              display="flex"
              alignItems={"start"}
              justifyContent="center"
            >
              <Box mt={6} display={{ xs: "none", sm: "inherit" }}>
                <img src="/sections/numix_play.png" alt="" height={"120px"} />
              </Box>
              <Box height={{ xs: 300, sm: 400, lg: 600 }}>
                <img src="/sections/numix_1.png" alt="" height={"100%"} />
              </Box>
            </Box>
            {/* <Box pl={{ md: 4 }}>
              <Button variant="contained" size="small">
                Learn More
              </Button>
            </Box> */}
            <Box display={"flex"} justifyContent="center" width={"100%"}>
              <IconButton
                onClick={() =>
                  syncLedgerRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ArrowUpwardRoundedIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  indexerRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ArrowDownwardRoundedIcon />
              </IconButton>
              {/* <Button variant="contained" size="small">
                Learn More
              </Button> */}
            </Box>
          </Box>
          <Box
            ref={indexerRef}
            mt={4}
            pt={4}
            pl={4}
            pb={4}
            sx={{
              background:
                // "red",
                // "linear-gradient(108deg, rgba(0, 0, 0, 0.51) 26.46%, rgba(63, 63, 63, 0.51) 112.26%)",
                {
                  xs: "url(/sections/indexer_mb.png)",
                  sm: "url(/sections/indexer_bg.png)",
                },
              backgroundSize: { xs: "cover", sm: "400%", md: "140%" },
              backgroundPosition: { sm: "bottom", md: "center" },
            }}
            display={"flex"}
            flexWrap="wrap"
            borderRadius="28px"
            gap={4}
            // position="relative"
            justifyContent="space-between"
          >
            <Stack
              flexBasis={{ md: "40%" }}
              // py={{ md: 4 }}
              pl={4}
              justifyContent="space-between"
            >
              <Stack gap={1}>
                {/* <Typography color={"primary"} variant="h4">
                  nusic
                </Typography> */}
                <Box>
                  <Typography variant="h2" fontWeight={900}>
                    On-chain
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={900}
                    position="relative"
                    zIndex={1}
                    display="inline"
                  >
                    Indexer
                    <Box
                      position={"absolute"}
                      bottom={0}
                      left={0}
                      width={"100%"}
                      sx={{ background: "#A532FF" }}
                      p={{ xs: 0.8, sm: 1, md: 1.2 }}
                      borderRadius={60}
                      zIndex={-1}
                    />
                  </Typography>
                </Box>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Listen to every Music NFT instantiated onchain with trackable
                  playback and access to metadata administration
                </Typography>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Enable permissions to make your Music NFTs available inside
                  Web 3.0 games based on rules you determine.
                </Typography>
                <Typography width={260} sx={{ mt: 2 }} fontWeight={700}>
                  Leverage the power of composable internet infrastructure to
                  reach new audiences and unlock new revenue.
                </Typography>
              </Stack>
            </Stack>
            <Box
              flexBasis={{ xs: "100%", md: "55%" }}
              display="flex"
              alignItems={"center"}
              justifyContent="end"
            >
              {/* <Box mt={6} display={{ xs: "none", sm: "inherit" }}>
                <img src="/sections/numix_play.png" alt="" height={"120px"} />
              </Box> */}
              <Box width={{ xs: 300, sm: "70%", md: "90%" }}>
                <img src="/sections/indexer_app.png" alt="" width={"100%"} />
              </Box>
            </Box>
            {/* <Box pl={4} pb={4}>
              <Button variant="contained" size="small">
                Learn More
              </Button>
            </Box> */}
            <Box display={"flex"} justifyContent="center" width={"100%"}>
              <IconButton
                onClick={() =>
                  numixAppRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ArrowUpwardRoundedIcon />
              </IconButton>
              {/* <IconButton
                onClick={() =>
                  numixAppRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ArrowDownwardRoundedIcon />
              </IconButton> */}
              {/* <Button variant="contained" size="small">
                Learn More
              </Button> */}
            </Box>
          </Box>
          <Box mt={4} px={2} ref={footerRef}>
            <Typography fontWeight={700} variant="h4" align="center">
              UNLOCKING THE TRUE VALUE OF MUSIC
            </Typography>
            <Box display={"flex"} justifyContent="center" my={2}>
              <Box
                width={200}
                height={10}
                borderRadius="28px"
                sx={{ bgcolor: "#5432FF" }}
              ></Box>
            </Box>
            <Box></Box>
            <Box
              mt={4}
              display={"flex"}
              justifyContent="space-between"
              flexWrap={"wrap-reverse"}
              gap={6}
              px={{ md: 6 }}
            >
              <Box>
                <img src="/nusic_purple.png" alt="" width={120} />
                <Typography variant="h6">Next Gen Music Protocol</Typography>
              </Box>
              <Box width={{ xs: "100%", md: 320 }}>
                <Typography sx={{ mb: 1, color: "#5E5E5E" }}>
                  Contact Us
                </Typography>
                <JoinForm />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Matrix />
      {/* <Divider /> */}
      {/* <AlivePass buyRef={buyRef} /> */}
      {/* <JoinForm open={openForm} onClose={() => setOpenForm(false)} /> */}
    </Box>
  );
};

export default Home;
