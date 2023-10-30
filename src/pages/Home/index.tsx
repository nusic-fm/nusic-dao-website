import { Button, Fab, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRef, useState } from "react";
// import AlivePass from "../../components/AlivePass";
import JoinForm from "../../components/AlivePass/JoinForm/Index";

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
        <Grid xs={12} md={8} item>
          <Box height={"100vh"} position="relative">
            <Stack
              height={"100%"}
              // gap={4}
              p={{ xs: 2 }}
              // alignItems="center"
              justifyContent={"space-between"}
            >
              <Stack
                // minHeight={"100vh"}
                justifyContent="center"
                // alignItems={"center"}
                gap={{ xs: 5, md: 4 }}
                px={{ xs: 2, md: 6 }}
                height="100%"
              >
                <Typography variant="h2" fontWeight={900}>
                  NUMIX
                </Typography>
                <Typography width={{ md: "60%" }} variant="h5">
                  Discover brand new music, create original remixes and share
                  with the world. Demonstrate you are a tastemaker and go viral
                  to unlock rewards directly from the artist. Be part of the
                  next generation of music, and prove you were first.
                </Typography>
              </Stack>
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
                {/* Music Copyright Protection for GenAI */}
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item>
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
              variant="h4"
              align="center"
              // letterSpacing={2}
              mt={{ xs: "25%", md: "10%" }}
            >
              {/* Powering the Evolution of Music */}
              Create Unique of the freshest sounds
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
                <img src="/NUMIX.png" alt="" width={200}></img>
                {/* <Typography align="center" variant="caption">
                  Transparent Music Streaming
                </Typography> */}
              </Stack>
              <Stack gap={2} mt={4}>
                {/* <Typography align="center" fontWeight={600}>
                Launch App
              </Typography> */}
                <Stack gap={2}>
                  <Button
                    variant="contained"
                    // onClick={() => {
                    //   checkAutoLogin();
                    // }}
                    // sx={{ bgcolor: "#010101" }}
                    // size="small"
                    target={"_blank"}
                    href="https://goddess.numix.ai/"
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
        </Grid>
      </Grid>
      <Stack
        py={10}
        sx={{
          background: "#1b1433",
        }}
        gap={1}
      >
        <Box>
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
              <Box width={{ xs: "80%", md: "40%" }}>
                <img src="/homescreen.png" alt="" width={"100%"}></img>
              </Box>
            </Box>
            <Box ref={buyRef}>
              <Grid container rowGap={1}>
                <Grid item xs={false} md={2} />
                <Grid item xs={12} md={10}>
                  <Typography variant="h5" fontWeight={900}>
                    FEATURES HIGHLIGHTS
                  </Typography>
                </Grid>
                <Grid item xs={false} md={2} />
                <Grid item xs={12} md={10}>
                  <Box
                    sx={{ background: "#A18EFF" }}
                    borderRadius={"10px"}
                    p={2}
                    width={{ md: "80%" }}
                  >
                    <Typography fontWeight={900} variant="h6">
                      Fresh Remixes
                    </Typography>
                    <Typography>
                      Make your own original remix of the latest releases
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
                    // display="flex"
                    width={{ md: "80%" }}
                  >
                    <Typography fontWeight={900} variant="h6">
                      Share with the World
                    </Typography>
                    <Typography>
                      With nuMix you have full rights to publish the music on
                      your socials!
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
                    <Typography fontWeight={900} variant="h6">
                      Win Dope Merch
                    </Typography>
                    <Typography>
                      Level-up your nuMix and go viral, to winexclusive merch
                      direct from the artist
                    </Typography>
                  </Box>
                </Grid>
                {/* <Grid item md={12} mt={2}>
                  <Typography variant="h5" fontWeight={900}>
                    Onchain Data
                  </Typography>
                </Grid> */}
                {/* <Grid item md={12} xs={12}>
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
                </Grid> */}
                {/* <Grid item md={1} />
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
        {/* <Stack
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
            Music Metadata Administration
          </Typography>
          <Typography align="center">
            Copyright registration & next-gen data annotation
          </Typography>
          <Box display={"flex"} justifyContent="center">
            <Box width={{ xs: "70%", md: "40%" }}>
              <img src="/home/meta_admin.png" alt="" width={"100%"} />
            </Box>
          </Box>
          <Typography align="center">
            Track music usage and ingestion by generative AI models
          </Typography>
          <Typography variant="h4" align="center">
            Future Proof Your Sound
          </Typography>
        </Stack> */}
        <Box mt={10} display="flex" justifyContent={"center"}>
          {/* <img src="" alt="" /> */}
          <Stack alignItems={"start"} justifyContent="center">
            <Typography
              sx={{ px: 1, mb: 2 }}
              variant="h3"
              align="center"
              width={"100%"}
            >
              NUMIX
            </Typography>
            <Box display={"flex"}>
              <Button
                color="secondary"
                href="https://goddess.numix.ai/privacy-policy.pdf"
                target={"_blank"}
              >
                Privacy Policy
              </Button>
              <Button
                color="secondary"
                href="https://goddess.numix.ai/terms-of-service.pdf"
                target={"_blank"}
              >
                Terms of Service
              </Button>
            </Box>
          </Stack>
        </Box>
      </Stack>
      {/* <AlivePass buyRef={buyRef} /> */}
      <JoinForm open={openForm} onClose={() => setOpenForm(false)} />
    </Box>
  );
};

export default Home;
