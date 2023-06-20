import { Button, Fab, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRef } from "react";
import AlivePass from "../../components/AlivePass";

type Props = {};

const Home = (props: Props) => {
  const buyRef = useRef(null);

  return (
    <Box minHeight="100vh" position={"relative"}>
      <img
        src="/home/Ellipse1.png"
        alt=""
        style={{ position: "absolute", zIndex: 99999 }}
        height={300}
      ></img>
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
              <Box>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  Get More from Your Music
                </Typography>
                <Box display={"flex"} alignItems="center" gap={1} mt={1}>
                  <Typography>
                    <Typography
                      color={"#563fc8"}
                      component="span"
                      fontWeight={900}
                      fontSize="13"
                      variant="h6"
                      fontStyle="italic"
                      sx={{ mr: 1 }}
                    >
                      NUSIC
                    </Typography>
                    is a transparent music streaming protocol which enables you
                    to discover & share a new universe of music
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                gap={10}
                flexWrap="wrap"
                justifyContent={"center"}
                alignItems="center"
              >
                <Box width={{ xs: "50%", md: "30%" }}>
                  <img src="/home/1.png" alt="" width="100%"></img>
                </Box>
                <Stack
                  gap={2}
                  justifyContent="center"
                  flexWrap={"wrap"}
                  alignItems={"center"}
                  flexDirection={{ xs: "row", md: "column" }}
                >
                  <Box width={{ xs: "45%", md: "initial" }}>
                    <img src="/home/2.png" alt="" width="100%"></img>
                  </Box>
                  <Box width={{ xs: "45%", md: "initial" }}>
                    <img src="/home/3.png" alt="" width="100%"></img>
                  </Box>
                </Stack>
              </Box>
              <Typography variant="h5" align="center">
                Onchain Music for the next-gen internet{" "}
              </Typography>
            </Stack>
            {/* <Box
              display={"flex"}
              alignItems="center"
              flexWrap={"wrap"}
              gap={2}
              justifyContent="center"
              p={4}
            >
              <img src="/home/built_icon.png" alt="" />
              <img src="/home/arweave_icon.png" alt="" />
              <img src="/home/phala_icon.png" alt="" />
              <img src="/home/op_icon.png" alt="" />
              <img src="/home/ipfs_icon.png" alt="" />
            </Box> */}
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
              variant="h5"
              align="center"
              // letterSpacing={2}
              mt={"10%"}
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
                <img src="/nusic_white.png" alt="" width={200}></img>
                <Typography align="center">
                  Transparent Music Streaming
                </Typography>
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
                    href="https://nusic-app.vercel.app/"
                  >
                    Launch App
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
        <Stack
          minHeight={"100vh"}
          justifyContent="center"
          gap={{ xs: 10, md: 4 }}
        >
          <Typography variant="h3" align="center" fontWeight={900}>
            Transparent Music Streaming Protocol
          </Typography>
          <Typography align="center" variant="h6">
            Forget opaque back room deals, the new music industry is open
          </Typography>
          {/* <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Button variant="outlined" color="secondary">
              Learn More
            </Button>
          </Box> */}
          <Box display={"flex"} justifyContent="center">
            <img src="/home/desktop_screen.png" alt="" width={"50%"} />
          </Box>
          <Typography variant="h6" align="center">
            NUSIC leverages onchain music to ensure transparency
          </Typography>
          <Typography variant="h3" align="center" fontWeight={900}>
            Owned by Artists & Fans
          </Typography>
        </Stack>
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
              <Box width={{ xs: "50%", md: "40%" }}>
                <img src="/home/m1.png" alt="" width={"100%"}></img>
              </Box>
            </Box>
            <Box>
              <Grid container rowGap={1}>
                <Grid item xs={false} md={2} />
                <Grid item xs={12} md={10}>
                  <Typography variant="h4" fontWeight={900}>
                    Artist First
                  </Typography>
                </Grid>
                <Grid item xs={false} md={2} />
                <Grid item xs={12} md={10}>
                  <Box
                    sx={{ background: "#A18EFF" }}
                    borderRadius={"10px"}
                    p={2}
                    width={{ md: "70%" }}
                  >
                    <Typography>Artists receive network incentives</Typography>
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
                    width={{ md: "70%" }}
                  >
                    <Typography>
                      Share with fans & backers/collectors
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box
                    sx={{ background: "#A18EFF" }}
                    borderRadius={"10px"}
                    p={2}
                    width={{ md: "70%" }}
                  >
                    <Typography>
                      Artists has full control of onchain releases
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={12} mt={2}>
                  <Typography variant="h4" fontWeight={900}>
                    Seed-to-Earn
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
                    width={{ md: "70%" }}
                  >
                    <Typography>
                      Peer-to-peer torrenting with economic value
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={1} />
                <Grid item xs={12} md={11}>
                  <Box
                    sx={{ background: "#A18EFF" }}
                    borderRadius={"10px"}
                    p={2}
                    width={{ md: "70%" }}
                  >
                    <Typography>Provide music to your local network</Typography>
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
                    width={{ md: "70%" }}
                  >
                    <Typography>Network incentives based on usage</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Stack
          minHeight={"100vh"}
          justifyContent="center"
          gap={{ xs: 10, md: 4 }}
        >
          <Typography
            variant="h3"
            align="center"
            fontWeight={900}
            sx={{ mt: 10 }}
          >
            Music Metadata Administration
          </Typography>
          <Typography variant="h6" align="center">
            Copyright registration & next-gen data annotation
          </Typography>
          <Box display={"flex"} justifyContent="center">
            <img src="/home/meta_admin.png" alt="" width={"50%"} />
          </Box>
          <Typography variant="h6" align="center">
            Track music usage and ingestion by generative AI models
          </Typography>
          <Typography variant="h3" align="center">
            Future Proof Your Sound
          </Typography>
        </Stack>
      </Stack>
      <AlivePass buyRef={buyRef} />
    </Box>
  );
};

export default Home;
