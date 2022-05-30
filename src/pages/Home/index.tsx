import { Box, Button, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { useRef, useState } from "react";
// import JoinDaoDialog from "../../components/JoinDaoDialog";
// import NFTSale from "../../components/NFTSale";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import { Snackbar } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRef } from "react";

const Home = () => {
  const infoRef = useRef<HTMLElement>(null);

  return (
    <Box pb={10}>
      <Box position="absolute" left={0} top={0} zIndex={9999} width="40%">
        <img src="/assets/bg-left.svg" alt="" width="100%" />
      </Box>
      <Box
        height="100vh"
        sx={{ paddingTop: "94px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="h3"
              align="center"
              style={{ width: "60%", textTransform: "uppercase" }}
            >
              FROM DIGITAL MUSIC RIGHTS TO DIGITAL MUSIC ASSETS
            </Typography>
          </Box>
          <Box pt={4} display="flex" justifyContent="center">
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                infoRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn more
            </Button>
            <Box
              position="absolute"
              right={0}
              display="flex"
              justifyContent="end"
              width="40%"
            >
              <img src="/assets/bg.svg" alt="" width="100%" />
            </Box>
          </Box>
          <Box sx={{ paddingTop: "4%" }} display="flex" justifyContent="center">
            <a
              href="https://devpost.com/software/nusic-nft-music-oracle"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/chainlink-logo.png" alt="logo" width="60px" />
            </a>
          </Box>
          <Box pt={2} display="flex" justifyContent="center">
            <Typography align="center" style={{ width: "300px" }}>
              Grand Prize Winning Project Chainlink Fall Hackathon 2021
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box position="absolute" bottom="2%" width="100%" textAlign="center">
        <Typography>Scroll Down</Typography>
        <Box display="flex" justifyContent="center">
          <KeyboardArrowDownIcon color="secondary" />
        </Box>
      </Box>
      <Box pt={15} ref={infoRef}>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="h3"
              align="center"
              style={{ width: "60%", textTransform: "uppercase" }}
            >
              What is NUSIC?
            </Typography>
          </Box>
          <Box pt={4} display="flex" justifyContent="center">
            <Typography variant="h6" align="center">
              Decentralized infrastructure to power the next generation of music
              on Web 3.0
            </Typography>
          </Box>
          <Box pt={10} display="flex" justifyContent="center">
            <Typography variant="h5" align="center">
              NUSIC enables creators and rightsholders to
            </Typography>
          </Box>
          <Box pt={10} display="flex" justifyContent="center">
            <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <img alt="logo" src="/assets/unlock.png" width="40px" />
                <Box width="80%" pt={4}>
                  <Typography align="center">
                    Unlock powerful new revenue streams without sacrificing
                    music rights ownership
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  alt="logo"
                  src="/assets/streaming-assets.png"
                  width="40px"
                />
                <Box width="70%" pt={4}>
                  <Typography align="center">
                    Monetize engaged communities with Metaverse activiations and
                    one-of-a-kind events
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <img alt="logo" src="/assets/crypto-assets.png" width="40px" />
                <Box width="70%" pt={4}>
                  <Typography align="center">
                    Secure Intellectual Property through Proof of Creation, your
                    music on Web 3.0
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box pt={10} display="flex" justifyContent="center" alignItems="center">
          <Box
            width="80%"
            sx={{ p: 5 }}
            style={{ backgroundColor: "#2A2A43", borderRadius: "24px" }}
          >
            <Box>
              <Typography variant="h3" align="center">
                NUSIC DAO
              </Typography>
            </Box>
            <Box pt={4}>
              <Typography align="center">
                NUSIC DAO’s mission is to unlock financial freedom for the
                artists who make our world a better place. We believe that the
                emergence of decentralized economies represents a historic
                opportunity to enshrine music as a digital asset that enables
                the preservation and appreciation of value for the medium.
              </Typography>
            </Box>
            <Box pt={4}>
              <Box
                display="flex"
                justifyContent="center"
                gap={5}
                flexWrap="wrap"
              >
                <Button
                  href="https://docsend.com/view/58rkhdf2iapsjuah"
                  target="_blank"
                  style={{ color: "#A794FF", fontWeight: "bold" }}
                  endIcon={<ArrowForwardIcon fontSize="small" color="info" />}
                >
                  Check the Deck
                </Button>
                <Button
                  href="https://discord.gg/z9jQZfJ6Rq"
                  target="_blank"
                  style={{ color: "#A794FF", fontWeight: "bold" }}
                  endIcon={<ArrowForwardIcon fontSize="small" color="info" />}
                >
                  NUSIC Discord
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// const useStyles = makeStyles((theme: any) => ({
//   root: {
//     height: "100vh",
//     backgroundImage: "url(assets/NUSIC-Artwork.webp)",
//     backgroundSize: "cover",
//     backgroundPosition: "center center",

//     boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
//     borderColor: "rgb(23,23,47)",
//   },
//   rowTwo: {
//     fontSize: "24px",
//   },
//   button: {
//     backgroundColor: "transparent !important",
//     "&:hover": {
//       backgroundColor: "rgb(255,255,255) !important",
//       color: "black !important",
//     },
//   },
// }));

// const Home = () => {
//   const classes = useStyles();
//   const saleElem = useRef<null | HTMLDivElement>(null);

//   const [isSnackbarOpen, setIsSnackbarOpen] = useState(true);

//   return (
//     <Box style={{ backgroundColor: "#17172F" }}>
//       <Box
//         className={classes.root}
//         display="flex"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         pt={7}
//       >
//         <Box mb={1}>
//           <Typography variant="h2" fontWeight={900} align="center">
//             The Music Finance Revolution
//           </Typography>
//         </Box>
//         <Box mb={3}>
//           <Typography variant="h6" align="center">
//             Mint your NFT membership
//           </Typography>
//         </Box>
//         <Button
//           color="primary"
//           variant="contained"
//           size="large"
//           className={classes.button}
//           style={{
//             padding: "20px 30px",
//             border: "2px solid white",
//             boxShadow: "none",
//             fontWeight: "bold",
//             borderRadius: "50px",
//           }}
//           onClick={() => {
//             saleElem.current?.scrollIntoView({ behavior: "smooth" });
//           }}
//         >
//           Mint on Testnet
//         </Button>
//       </Box>
//       <Box minHeight={"50vh"} display="flex" alignItems="center">
//         <Box>
//           <Typography variant="h4" align="center" fontWeight="bold">
//             What is NUSIC DAO?
//           </Typography>
//           <Typography align="center" px={{ xs: 4, sm: 3, md: 40 }} mt={5}>
//             NUSIC DAO’s mission is to unlock financial freedom for the artists
//             who make our world a better place. We believe that the emergence of
//             decentralized economies represents a historic opportunity to
//             enshrine music as a digital asset that enables the preservation and
//             appreciation of value for the medium.
//           </Typography>
//         </Box>
//       </Box>
//       <Grid container spacing={2} px={{ xs: 2, sm: 2, md: 20, lg: 20 }}>
//         <Grid item xs={12} md={6}>
//           <Box px={{ md: 10, lg: 10 }}>
//             <img
//               src="assets/NUSIC-Record-Sun.webp"
//               alt="record"
//               width={"100%"}
//               height="100%"
//             ></img>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box
//             px={{ md: 10, lg: 10 }}
//             display="flex"
//             justifyContent="center"
//             flexDirection={"column"}
//             height="100%"
//           >
//             <Typography variant="h3" fontWeight={900}>
//               A new music economy
//             </Typography>
//             <Box marginTop={"5%"}>
//               <Typography variant="h6" fontWeight={"600"}>
//                 There is more money locked in DeFi than the entire music
//                 industry made in 2021…
//               </Typography>
//             </Box>
//             <Box marginTop={"5%"}>
//               <Typography variant="h6">
//                 The music industry is at a moment of pivotal change, while
//                 streaming has revitalized digital music revenues, a small group
//                 of tech intermediaries have become power brokers in the current
//                 landscape. NUSIC DAO changes that by Open Sourcing music
//                 financial technology and sharing ownership with a community of
//                 makers, enablers and dream actualizers.
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} px={{ xs: 2, sm: 2, md: 20, lg: 20 }} mt={20}>
//         <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//           <Box px={{ md: 10, lg: 10 }}>
//             <img
//               src="assets/NUSIC-Diamond.webp"
//               alt="record"
//               width={"100%"}
//               height="100%"
//             ></img>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
//           <Box
//             px={{ md: 10, lg: 10 }}
//             display="flex"
//             justifyContent="center"
//             flexDirection={"column"}
//             height="100%"
//           >
//             <Typography variant="h3" fontWeight={900} align="left">
//               Rights hodlers
//             </Typography>
//             <Box marginTop={"5%"}>
//               <Typography variant="h6" fontWeight="600">
//                 Get your future streaming income now
//               </Typography>
//             </Box>
//             <Box marginTop={"5%"}>
//               <Typography variant="h6">
//                 Join NUSIC DAO today through pro-active contribution and
//                 participate in governance with NUSIC DAO NFTs - a series of
//                 unique artworks and generative music pieces that grant voting
//                 power over the direction of NUSIC DAO and its protocols.
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//       <Box mt={5} ref={saleElem}>
//         <NFTSale />
//       </Box>
//       <Box mt={5} display="flex" alignItems="center">
//         <Grid container p={2}>
//           <Grid item xs={false} md={2}></Grid>
//           <Grid item xs={12} md={8}>
//             <JoinDaoDialog />
//           </Grid>
//           <Grid item xs={false} md={2}></Grid>
//         </Grid>
//       </Box>
//       <Box pt={6} pb={6}>
//         <Box
//           p={4}
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems="center"
//         >
//           <Box mr={2}>
//             <a
//               href="https://discord.gg/auPBu4dAHe"
//               target="_blank"
//               rel="noreferrer"
//               style={{ color: "white" }}
//             >
//               <img
//                 src="/assets/Discord-Logo.webp"
//                 alt="discord"
//                 width={"24px"}
//                 height={"18px"}
//               />
//             </a>
//           </Box>
//           <Box mr={2}>
//             <a
//               href="https://github.com/nusic-fm"
//               target="_blank"
//               rel="noreferrer"
//               style={{ color: "white" }}
//             >
//               <GitHubIcon />
//             </a>
//           </Box>
//           <Box>
//             <a
//               href="https://twitter.com/nusicDAO"
//               target="_blank"
//               rel="noreferrer"
//               style={{ color: "white" }}
//             >
//               <TwitterIcon />
//             </a>
//           </Box>
//         </Box>
//       </Box>
//       <Snackbar
//         open={isSnackbarOpen}
//         autoHideDuration={10000}
//         onClose={() => {
//           setIsSnackbarOpen(false);
//         }}
//       >
//         <Alert severity="warning" elevation={6}>
//           Currently we are live on Testnet. Please connect your wallet on
//           Rinkeby Test Network to Mint.
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

export default Home;
