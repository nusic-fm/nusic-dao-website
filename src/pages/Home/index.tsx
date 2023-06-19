import { Button, Fab, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRef } from "react";
import { ethers } from "ethers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { Injected, CoinbaseWallet } from "../../hooks/useWalletConnectors";
import { useWeb3React } from "@web3-react/core";
import AlivePass from "../../components/AlivePass";

type Props = {};

const Home = (props: Props) => {
  const buyRef = useRef(null);
  const { account, library, activate } = useWeb3React();

  const onSignInUsingWallet = async (
    connector: WalletConnectConnector | WalletLinkConnector | InjectedConnector
  ) => {
    activate(connector, async (e) => {
      if (e.name === "t" || e.name === "UnsupportedChainIdError") {
        // setSnackbarMessage("Please switch to Ethereum Mainnet");
      } else {
        // setSnackbarMessage(e.message);
      }

      console.log(e.name, e.message);
    });
  };

  const checkAutoLogin = async () => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const accounts = await provider.listAccounts();
    if (accounts.length) {
      const eth = (window as any).ethereum;
      if (eth.isMetaMask) {
        onSignInUsingWallet(Injected);
      } else if (eth.isCoinbaseBrowser) {
        onSignInUsingWallet(CoinbaseWallet);
      }
    }
  };

  // return <Box minHeight={'100vh'}>
  //   <Grid container minHeight={'100vh'}>
  //     <Grid item xs={8}
  //       sx={{
  //         background:
  //           "linear-gradient(0deg, rgba(27,19,51,1) 20%, rgba(2,1,3,1) 100%)",
  //       }}>
  //     <Stack
  //           gap={12}
  //           p={{ xs: 4, md: 10 }}
  //           // alignItems="center"
  //           // justifyContent={"center"}
  //         >
  //           <Box>
  //             <Typography
  //               variant="h3"
  //               fontWeight={700}
  //               textTransform="uppercase"
  //             >
  //               Get More from Your Music
  //             </Typography>
  //             <Typography>
  //               NUSIC is a transparent music streaming protocol which enables
  //               you to discover & share a new universe of music
  //             </Typography>
  //           </Box>
  //           <Box
  //             display="flex"
  //             gap={4}
  //             flexWrap="wrap"
  //             justifyContent={"center"}
  //           >
  //             <img
  //               src="/home/r1.png"
  //               alt=""
  //               // borderRadius={"0%"}
  //               // sx={{
  //               //   background: "url(/home/r1.png)",
  //               //   backgroundSize: "cover",
  //               // }}
  //               // width="301px"
  //               // height={"523px"}
  //             ></img>
  //             <Stack
  //               gap={2}
  //               justifyContent="center"
  //               alignItems={"center"}
  //               flexDirection={{ xs: "row", md: "column" }}
  //             >
  //               <img
  //                 src="/home/r3.png"
  //                 alt=""
  //                 // borderRadius={"0%"}
  //                 //   sx={{
  //                 //     background: "url(/home/r3.png)",
  //                 //     backgroundSize: "cover",
  //                 //   }}
  //                 //   width="197px"
  //                 //   height={"183px"}
  //               ></img>
  //               <img
  //                 src="/home/r2.png"
  //                 alt=""
  //                 // borderRadius={"0%"}
  //                 //   sx={{
  //                 //     background: "url(/home/r2.png)",
  //                 //     backgroundSize: "cover",
  //                 //   }}
  //                 //   width="197px"
  //                 //   height={"303px"}
  //               ></img>
  //             </Stack>
  //             <Stack gap={2} alignItems="center" justifyContent={"center"}
  //               flexDirection={{ xs: "row", md: "column" }}>
  //               <Stack
  //                 sx={{
  //                   background:
  //                     "linear-gradient(180deg, #563FC8 -54.71%, rgba(65, 31, 86, 0.21) 107.79%)",
  //                 }}
  //                 borderRadius={"20%"}
  //                 gap={1}
  //                 width={150}
  //                 height={150}
  //                 justifyContent="center"
  //                 alignItems={"center"}
  //                 p={2}
  //               >
  //                 <Typography variant="h6" color={"#F1F1F1"} fontWeight={700}>
  //                   98%
  //                 </Typography>
  //                 <Typography
  //                   color={"#A8A8A8"}
  //                   align="center"
  //                   variant="caption"
  //                 >
  //                   Sorem ipsum dolor sit amet, consectetur adipiscing elit.
  //                   Nunc{" "}
  //                 </Typography>
  //               </Stack>
  //               <Stack
  //                 sx={{
  //                   background:
  //                     "linear-gradient(180deg, #563FC8 -54.71%, rgba(65, 31, 86, 0.21) 107.79%)",
  //                 }}
  //                 borderRadius={"20%"}
  //                 width={150}
  //                 height={150}
  //                 gap={1}
  //                 justifyContent="center"
  //                 alignItems={"center"}
  //                 p={2}
  //               >
  //                 <Stack alignItems={"center"}>
  //                   <Typography variant="h6" color={"#F1F1F1"} fontWeight={700}>
  //                     7K Tracks
  //                   </Typography>
  //                 </Stack>
  //                 <Typography
  //                   color={"#A8A8A8"}
  //                   align="center"
  //                   variant="caption"
  //                 >
  //                   Sorem ipsum dolor sit amet, consectetur adipiscing elit.
  //                   Nunc{" "}
  //                 </Typography>
  //               </Stack>
  //             </Stack>
  //           </Box>
  //           </Stack>
  //     </Grid>
  //     <Grid item xs={4}>
  //       <Box sx={{bgcolor: '#3A3068'}} height='100vh' position={'relative'}>
  //         <Stack
  //           justifyContent={"center"}
  //           height={"100%"}
  //           width="100%"
  //           gap={4}
  //           sx={{ bgcolor: "#3A3068", borderTopLeftRadius: "80px 80px" }}
  //           position="relative"
  //           alignItems={"center"}
  //         >
  //           <Stack gap={2}>
  //             <img src="/nusic_white.png" alt="" width={200}></img>
  //             <Typography align="center">Stream to Earn</Typography>
  //           </Stack>
  //           <Stack gap={2} mt={4}>
  //             {/* <Typography align="center" fontWeight={600}>
  //               Launch App
  //             </Typography> */}
  //             <Stack gap={2}>
  //               <Button
  //                 variant="contained"
  //                 // onClick={() => {
  //                 //   checkAutoLogin();
  //                 // }}
  //                 // sx={{ bgcolor: "#010101" }}
  //                 // size="small"
  //                 // href="/metadata"
  //               >
  //                 Launch App
  //               </Button>
  //             </Stack>
  //           </Stack>
  //           </Stack>
  //       <Box
  //             position={"absolute"}
  //             bottom="0px"
  //             width={"100%"}
  //             display="flex"
  //           >
  //             <img
  //               src="/home/band.png"
  //               width={"100%"}
  //               alt="band"
  //               style={{ objectFit: "cover" }}
  //             />
  //           </Box>
  //       </Box>
  //     </Grid>
  //   </Grid>
  // </Box>

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
          <Box minHeight={"100vh"} position="relative">
            <Stack
              gap={12}
              p={{ xs: 4, md: 10 }}
              // alignItems="center"
              // justifyContent={"center"}
            >
              <Box>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  Get More from Your Music
                </Typography>
                <Typography>
                  NUSIC is a transparent music streaming protocol which enables
                  you to discover & share a new universe of music
                </Typography>
              </Box>
              {/* <Stack gap={3}>
              <Typography
                variant="h6"
                sx={{
                  background:
                    "linear-gradient(91.05deg, #563FC8 -9%, rgba(75, 205, 214, 0.85) 44.26%, rgba(178, 0, 207, 0.96) 109.05%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Edit your Music NFT metadata
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  background:
                    "linear-gradient(91.05deg, #563FC8 -9%, rgba(75, 205, 214, 0.85) 44.26%, rgba(178, 0, 207, 0.96) 109.05%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Generate Nusic link tree to share to friends & fans
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  display: "block",
                  background:
                    "linear-gradient(91.05deg, #563FC8 -9%, rgba(75, 205, 214, 0.85) 44.26%, rgba(178, 0, 207, 0.96) 109.05%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Stream Music NFTs
              </Typography>
              <Box mt={6}>
                <Button
                  variant="outlined"
                  color="info"
                  onClick={() =>
                    (buyRef.current as any).scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                >
                  Get Access Now !!!
                </Button>
              </Box>
            </Stack> */}
              <Box
                display="flex"
                gap={4}
                flexWrap="wrap"
                justifyContent={"center"}
              >
                <img src="/home/r1.png" alt=""></img>
                <Stack
                  gap={2}
                  justifyContent="center"
                  alignItems={"center"}
                  flexDirection={{ xs: "row", md: "column" }}
                >
                  <img src="/home/r3.png" alt=""></img>
                  <img src="/home/r2.png" alt=""></img>
                </Stack>
                <Stack
                  gap={2}
                  alignItems="center"
                  justifyContent={"center"}
                  flexDirection={{ xs: "row", md: "column" }}
                >
                  <Stack
                    sx={{
                      background:
                        "linear-gradient(180deg, #563FC8 -54.71%, rgba(65, 31, 86, 0.21) 107.79%)",
                    }}
                    borderRadius={"20%"}
                    gap={1}
                    width={150}
                    height={150}
                    justifyContent="center"
                    alignItems={"center"}
                    p={2}
                  >
                    <Typography variant="h6" color={"#F1F1F1"} fontWeight={700}>
                      98%
                    </Typography>
                    <Typography
                      color={"#A8A8A8"}
                      align="center"
                      variant="caption"
                    >
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc{" "}
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{
                      background:
                        "linear-gradient(180deg, #563FC8 -54.71%, rgba(65, 31, 86, 0.21) 107.79%)",
                    }}
                    borderRadius={"20%"}
                    width={150}
                    height={150}
                    gap={1}
                    justifyContent="center"
                    alignItems={"center"}
                    p={2}
                  >
                    <Stack alignItems={"center"}>
                      <Typography
                        variant="h6"
                        color={"#F1F1F1"}
                        fontWeight={700}
                      >
                        7K Tracks
                      </Typography>
                    </Stack>
                    <Typography
                      color={"#A8A8A8"}
                      align="center"
                      variant="caption"
                    >
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc{" "}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            <Box
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
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item>
          <Stack
            justifyContent={"center"}
            height={"100vh"}
            width="100%"
            gap={4}
            sx={{ bgcolor: "#3A3068", borderTopLeftRadius: "80px 80px" }}
            position="relative"
            alignItems={"center"}
          >
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
              >
                <PlayArrowIcon color="secondary" fontSize="large" />
              </Fab>
            </Box>
            <Stack gap={2}>
              <img src="/nusic_white.png" alt="" width={200}></img>
              <Typography align="center">Stream to Earn</Typography>
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
                  href="https://test-alive.vercel.app/"
                >
                  Launch App
                </Button>
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
        <Typography variant="h3" align="center" fontWeight={900}>
          Transparent Music Streaming Protocol
        </Typography>
        <Typography align="center" variant="h6">
          Forget opaque back room deals, the new music industry is open
        </Typography>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Button variant="outlined" color="secondary">
            Learn More
          </Button>
        </Box>
        <Box display={"flex"} justifyContent="center">
          <img src="/home/desktop_screen.png" alt="" width={"70%"} />
        </Box>
        <Typography variant="h5" align="center">
          NUSIC leverages onchain music to ensure transparency
        </Typography>

        <Typography variant="h3" align="center" fontWeight={900} sx={{ mt: 4 }}>
          Owned by Artistes & Fans
        </Typography>
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
            <img src="/home/mobile_screen.png" alt="" height={500} />
          </Box>
          <Box>
            <Grid container rowGap={1}>
              <Grid item xs={false} md={2} />
              <Grid item xs={12} md={10}>
                <Typography variant="h6" fontWeight={900}>
                  Artists-first
                </Typography>
              </Grid>
              <Grid item xs={false} md={2} />
              <Grid item xs={12} md={10}>
                <Box
                  sx={{ background: "#A18EFF" }}
                  borderRadius={"10px"}
                  p={2}
                  width={{ md: "50%" }}
                >
                  <Typography>
                    Music artists receive network incentives
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
                  width={{ md: "50%" }}
                >
                  <Typography>Share with fans & backers/collectors</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={12}>
                <Box
                  sx={{ background: "#A18EFF" }}
                  borderRadius={"10px"}
                  p={2}
                  width={{ md: "50%" }}
                >
                  <Typography>Share with fans & backers/collectors</Typography>
                </Box>
              </Grid>
              <Grid item md={12} mt={2}>
                <Typography variant="h6" fontWeight={900}>
                  Seed-to-earn
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
                  width={{ md: "50%" }}
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
                  width={{ md: "50%" }}
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
                  width={{ md: "50%" }}
                >
                  <Typography>Network incentives based on usage</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
      <AlivePass buyRef={buyRef} />
    </Box>
  );
};

export default Home;
