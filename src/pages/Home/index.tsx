import { Button, Fab, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRef, useState } from "react";
import AlivePass from "../../components/AlivePass";
import JoinForm from "../../components/AlivePass/JoinForm/Index";
import CodeIcon from "@mui/icons-material/Code";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";

type Props = {};

const Home = (props: Props) => {
  const buyRef = useRef(null);
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box minHeight="100vh" position={"relative"}>
      <Box
        height={{ xs: "150px", md: "300px" }}
        style={{ position: "absolute", zIndex: 99999 }}
      >
        <img src="/home/Ellipse1.png" alt="" height={"100%"}></img>
      </Box>
      <Grid
        container
        sx={{
          background:
            "linear-gradient(0deg, rgba(27,19,51,1) 20%, rgba(2,1,3,1) 100%)",
        }}
      >
        <Grid xs={12} item>
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
          {/* <Stack
              height={"100%"}
              // gap={4}
              p={{ xs: 2 }}
              // alignItems="center"
              justifyContent={"space-between"}
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  NEXT GEN MUSIC PROTOCOL
                </Typography>
                <Box display={"flex"} alignItems="center" gap={1} mt={1}>
                  <Typography>
                    Unlocking the true value of music through trackable,
                    interoperable metadata, end-to-end cryptographic settlement
                    and supercharged, superfan engagement
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                gap={{ md: 10 }}
                // flexWrap="wrap"
                justifyContent={"center"}
                alignItems="center"
              >
                <Box>
                  <Box width={{ xs: "90%", md: "initial" }}>
                    <img src="/home/1.png" alt="" width="100%"></img>
                  </Box>
                </Box>
                <Stack
                  gap={2}
                  justifyContent="center"
                  // flexWrap={"wrap"}
                  alignItems={"center"}
                  // flexDirection={{ xs: "row", md: "column" }}
                >
                  <Box width={{ xs: "90%", md: "initial" }}>
                    <img src="/home/2.png" alt="" width="100%"></img>
                  </Box>
                  <Box width={{ xs: "90%", md: "initial" }}>
                    <img src="/home/3.png" alt="" width="100%"></img>
                  </Box>
                </Stack>
              </Box>
              <Box display={{ xs: "flex", md: "none" }} justifyContent="center">
                <Fab
                  sx={{
                    backgroundImage: "url(/home/btn-blend.png)",
                    background:
                      "linear-gradient(125.34deg, #563FC8 12.91%, #AE2FFC 156.55%)",
                    backgroundSize: "cover",
                    width: 52,
                    height: 52,
                  }}
                  size="large"
                  onClick={() => {
                    (buyRef.current as any).scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }}
                >
                  <PlayArrowIcon
                    color="secondary"
                    fontSize="large"
                    sx={{
                      transition: "transform 0.5s",
                      ":hover": {
                        transform: "rotate(90deg)",
                      },
                    }}
                  />
                </Fab>
              </Box>
              <Typography variant="h6" align="center">
                Music Copyright Protection for GenAI
              </Typography>
            </Stack> */}
        </Grid>
        {/* <Grid xs={12} md={4} item>
          <Stack
            // justifyContent={"center"}
            height={"100vh"}
            width="100%"
            // gap={20}
            sx={{ bgcolor: "#3A3068", borderTopLeftRadius: "80px 80px" }}
            position="relative"
            alignItems={"center"}
          >
            <Typography
              variant="h6"
              align="center"
              // letterSpacing={2}
              mt={{ xs: "25%", md: "10%" }}
            >
              Powering the Evolution of Music
            </Typography>
            <Stack mt="40%">
              <Box
                position={"absolute"}
                bottom="10%"
                left="-25px"
                display={{ xs: "none", md: "unset" }}
              >
                <img
                  src="/home/btn-blend.png"
                  alt=""
                  width={56}
                  height={56}
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 999 }}
                />
                <Fab
                  sx={{
                    //   backgroundImage: "url(/home/btn-blend.png)",
                    background:
                      "linear-gradient(125.34deg, #563FC8 12.91%, #AE2FFC 156.55%)",
                  }}
                  size="large"
                  onClick={() => {
                    (buyRef.current as any).scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                  }}
                >
                  <PlayArrowIcon
                    color="secondary"
                    fontSize="large"
                    sx={{
                      transition: "transform 0.5s",
                      ":hover": {
                        transform: "rotate(90deg)",
                      },
                    }}
                  />
                </Fab>
              </Box>
              <Stack gap={2} alignItems="center">
              </Stack>
              <Stack gap={2} mt={4}>
                <Stack gap={2}>
                  <Button
                    variant="contained"
                    // onClick={() => {
                    //   checkAutoLogin();
                    // }}
                    // sx={{ bgcolor: "#010101" }}
                    // size="small"
                    href="https://app.nusic.fm/"
                  >
                    Launch App
                  </Button>
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() => setOpenForm(true)}
                  >
                    Join
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Box
              position={"absolute"}
              bottom="0px"
              width={"100%"}
              display="flex"
            >
              <img
                src="/home/band.png"
                width={"100%"}
                alt="band"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Stack>
        </Grid> */}
      </Grid>
      <Box
        py={10}
        sx={{
          background: "#1b1433",
        }}
        gap={1}
        minHeight="100vh"
        display={"flex"}
        alignItems="center"
      >
        <Stack
          mt={10}
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
              Aggregating the entire onchain music ecosystem, from Music NFTs to
              Web 3.0 gaming to immutable music file storage and compute
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
      >
        <Box>
          <Stack
            minHeight={"100vh"}
            justifyContent="center"
            gap={{ xs: 5, md: 4 }}
          >
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
            Enable permissions to make your Music NFTs available inside Web 3.0
            games based on rules you determine
          </Typography>
          <Typography variant="h4" align="center" fontWeight={900}>
            Reach new audiences and Unlock new revenue
          </Typography>
        </Stack>
      </Stack>
      <AlivePass buyRef={buyRef} />
      <JoinForm open={openForm} onClose={() => setOpenForm(false)} />
    </Box>
  );
};

export default Home;
