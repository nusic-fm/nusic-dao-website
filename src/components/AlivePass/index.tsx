/* eslint-disable react-hooks/exhaustive-deps */
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import {
  Button,
  ButtonGroup,
  // Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  IconButton,
  Link,
  // Popover,
  Snackbar,
  Stack,
  TextField,
  // Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import { LoadingButton } from "@mui/lab";
import { useEffect, useRef, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { provider } from "../../helpers/provider";
import WalletConnectors from "./WalletConnector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import CardWithAnimation from "./CardWithAnimation";
import CloseIcon from "@mui/icons-material/Close";
import NftsByWallet from "./NftsByWallet";
// import ArrowRight from "@mui/icons-material/ArrowRight";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CoinbaseWallet, Injected } from "../../hooks/useWalletConnectors";
// import { MoralisNftData, SelectedNftDetails } from "../../models";
import { IZoraData } from "../../models/zora";
// import { CoinbaseWallet, Injected } from "./hooks/useWalletConnectors";
// import { Injected } from "./hooks/useWalletConnectors";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const getEthValue = (price: number): BigNumber => {
  // 0000000000000000000000
  return ethers.utils.parseEther(price.toString());
};

const getEtherForQuantity = (price: number, quantity: number): string => {
  // 0.0 ETH
  return ethers.utils.formatEther(
    getEthValue(price).mul(BigNumber.from(quantity))
  );
};

// const getTimerObj = () => {
//   const revealDate = "Wed, 21 Jun 2023 00:00:00 GMT";
//   const countDownDate = new Date(revealDate).getTime();
//   const timeleft = countDownDate - Date.now();
//   if (timeleft <= 0) {
//     return { isRevealed: true };
//   }
//   const days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
//     .toString()
//     .padStart(2, "0");
//   const hours = Math.floor(
//     (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   )
//     .toString()
//     .padStart(2, "0");
//   const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
//     .toString()
//     .padStart(2, "0");
//   var seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
//     .toString()
//     .padStart(2, "0");
//   return { days, hours, minutes, seconds, isRevealed: false };
// };

type Props = { buyRef: any };

const AlivePass = ({ buyRef }: Props) => {
  const { account, library, activate } = useWeb3React();

  const stackRef = useRef(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // const [crossmint, setCrossmint] = useState(1);
  // const [crypto, setCrypto] = useState(1);
  const [tokenPrice] = useState(Number(process.env.REACT_APP_TOKEN_PRICE));
  const [currentEthPrice, setCurrentEthPrice] = useState(0);
  const [showWalletConnector, setShowWalletConnector] = useState(false);
  const [timerObj] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    isRevealed: boolean;
  }>();
  const [txInfo, setTxInfo] = useState<{ hash: string }>();
  // const cardRef = useRef(null);
  // const [selectedNft, setSelectedNft] = useState<SelectedNftDetails>();
  const [, setInsertUrl] = useState<string>();
  const [showNftsDrawer, setShowNftsDrawer] = useState(false);
  const [readyToMint, setReadyToMint] = useState(false);

  const onInsert = async (nft: IZoraData) => {
    if (nft.image?.mediaEncoding?.thumbnail) {
      setInsertUrl(nft.image?.mediaEncoding?.thumbnail);
    } else {
    }
  };

  const fetchEthPrice = async () => {
    const pricingContract = new ethers.Contract(
      process.env.REACT_APP_Price_Feed as string,
      [
        {
          inputs: [],
          name: "latestAnswer",
          outputs: [{ internalType: "int256", name: "", type: "int256" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      provider
    );
    const bn = await pricingContract.latestAnswer();
    setCurrentEthPrice(Number(bn.toString()) / 100000000);
  };

  // useEffect(() => {
  //   if (showNftsDrawer && !account) {
  //     checkAutoLogin();
  //   }
  // }, [showNftsDrawer]);

  useEffect(() => {
    if (account && readyToMint) {
      onMint();
    }
  }, [account]);

  useEffect(() => {
    fetchEthPrice();
  }, []);

  useEffect(() => {
    // const myInterval = setInterval(() => {
    //   const _newTimerObj = getTimerObj();
    //   setTimerObj(_newTimerObj);
    // }, 1000);
    // return () => {
    //   clearInterval(myInterval);
    // };
  }, [timerObj]);

  const onMint = async () => {
    if (!account) {
      // setSnackbarMessage("Please connect your wallet and try again");
      setReadyToMint(true);
      checkAutoLogin();
      return;
    }
    try {
      setIsLoading(true);
      const nftContract = new ethers.Contract(
        process.env.REACT_APP_ETH_CONTRACT_ADDRESS as string,
        [
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenQuantity",
                type: "uint256",
              },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
        ],
        library.getSigner()
      );
      const options = {
        value: getEthValue(tokenPrice).mul(BigNumber.from(quantity)),
      };
      console.log(ethers.utils.formatEther(options.value.toString()));
      const tx = await nftContract.mint(quantity, options);
      await tx.wait();
      setTxInfo({ hash: tx.hash });
      setSnackbarMessage("Successfully Minted");
    } catch (e: any) {
      console.log(e.message);
      setSnackbarMessage(e.data?.message || e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const checkConnection = async () => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const accounts = await provider.listAccounts();
    if (accounts.length) {
      if (
        (window as any).ethereum?.networkVersion !==
        process.env.REACT_APP_CHAIN_ID
      ) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
              {
                chainId: ethers.utils.hexValue(
                  Number(process.env.REACT_APP_CHAIN_ID)
                ),
              },
            ],
          });
        } catch (err) {}
      }
    }
  };
  const onSignInUsingWallet = async (
    connector: WalletConnectConnector | WalletLinkConnector | InjectedConnector
  ) => {
    await checkConnection();
    activate(connector, async (e) => {
      if (e.name === "t" || e.name === "UnsupportedChainIdError") {
        setSnackbarMessage("Please switch to Ethereum Mainnet");
      } else {
        setSnackbarMessage(e.message);
      }

      console.log(e.name, e.message);
    });
  };

  const checkAutoLogin = async () => {
    if (!(window as any).ethereum) {
      alert("Wallet is missing");
      return;
    }
    const newProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const accounts = await newProvider.listAccounts();
    if (accounts.length) {
      const eth = (window as any).ethereum;
      if (eth.isMetaMask) {
        onSignInUsingWallet(Injected);
      } else if (eth.isCoinbaseBrowser) {
        onSignInUsingWallet(CoinbaseWallet);
      }
    } else {
      setShowWalletConnector(true);
    }
  };

  // useEffect(() => {
  //   checkAutoLogin();
  // }, []);

  useEffect(() => {
    // if ((window as any)?.twttr?.widgets) (window as any).twttr.widgets.load();
  }, [txInfo]);

  return (
    <Box
      ref={buyRef}
      sx={{
        background:
          "linear-gradient(0deg, rgb(0,0,0) 0%, rgba(27,19,51,1) 70%)",
        minHeight: "100vh",
      }}
    >
      <Box p={2}>
        <Box mt={"180px"} pb={6}>
          <Grid container>
            <Grid item md={3}></Grid>
            <Grid item xs={12} md={6} position="relative">
              <Box
                position={"absolute"}
                width="100%"
                display="flex"
                justifyContent={"center"}
                top={-100}
                height="200px"
              >
                <CardWithAnimation />
              </Box>
              <Box
                pb={6}
                pt={15}
                px={{ xs: 2, md: "20%" }}
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(32,9,77,1) 0%, rgba(27,19,51,1) 100%)",
                  // "linear-gradient(0deg, rgba(34,10,82,1) 0%, rgba(27,19,51,1) 100%)",
                }}
                borderRadius="6px"
              >
                <Box mb={3}></Box>
                <Box
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Typography>Number of Cards</Typography>
                  <ButtonGroup sx={{ width: "130px" }} size="small">
                    <Button
                      onClick={() => {
                        if (quantity === 1) return;
                        setQuantity(quantity - 1);
                      }}
                    >
                      <RemoveIcon />
                    </Button>
                    <TextField value={quantity}></TextField>
                    <Button
                      onClick={() => {
                        if (quantity === 99) return;
                        setQuantity(quantity + 1);
                      }}
                    >
                      <AddIcon />
                    </Button>
                  </ButtonGroup>
                </Box>
                <Stack alignItems={"end"}>
                  <Typography>
                    {getEtherForQuantity(tokenPrice, quantity)} ETH
                  </Typography>
                  <Typography color={"gray"}>
                    ${(currentEthPrice * tokenPrice * quantity).toFixed(2)}
                  </Typography>
                </Stack>
                <Stack alignItems={"center"} gap={2} mt={2}>
                  <LoadingButton
                    loading={isLoading}
                    variant="contained"
                    sx={{ width: { xs: "100%", md: "50%" } }}
                    onClick={onMint}
                  >
                    Mint With ETH
                  </LoadingButton>
                  {/* <Tooltip title="Connect your Wallet to receive the NFT directly into your address"> */}
                  {/* <Button
                    component="label"
                    variant="outlined"
                    sx={{ width: { xs: "100%", md: "50%", color: "white" } }}
                    // endIcon={<InfoOutlinedIcon />}
                    // ref={cardRef}
                  >
                    <CrossmintPayButton
                      style={{ display: "none" }}
                      clientId="0c4a330a-7286-4e0d-9d79-43ab7a03db65"
                      mintConfig={{
                        type: "erc-721",
                        totalPrice: (tokenPrice * quantity).toFixed(2),
                        tokenQuantity: quantity,
                      }}
                      // environment="staging"
                      mintTo={account ?? undefined}
                    />
                    Mint with CARD
                  </Button> */}
                  {/* <Typography align="center" variant="caption">
                    Connect your Wallet to receive the NFT directly into your
                    address when using Card Payment
                  </Typography> */}
                  {/* </Tooltip> */}
                  <Box mt={4}>
                    {/* <a
                      className="twitter-share-button"
                      // href="https://twitter.com/intent/tweet?text=NUSIC%20Alive%20Collective%20passes%20are%20now%20available%20at%20alive.nusic.fm%20via%20%40nusicOfficial%20%0A%0AJoin%20the%20Movement%20Powering%20the%20Evolution%20of%20Music%0A%0A%23NUSIC"
                      href={`https://twitter.com/intent/tweet?text=NUSIC%20Alive%20Collective%20passes%20are%20now%20available%20via%20%40nusicOfficial%0A`}
                      // data-url="opensea.io/collection/nusic-alive-collective"
                      // href="https://twitter.com/share"
                      // data-text={`NUSIC Alive Collective passes are now available\n\nJoin the Movement Powering the Evolution of Music\n`}
                      data-url="alive.nusic.fm"
                      // data-via="nusicOfficial"
                      // data-hashtags="NUSIC"
                    >
                      Tweet
                    </a> */}
                  </Box>
                  {showNftsDrawer && account && (
                    <Drawer
                      anchor={"right"}
                      hideBackdrop
                      open
                      onClose={() => setShowNftsDrawer(false)}
                      sx={{ background: "rgba(0,0,0,0.8)" }}
                    >
                      <NftsByWallet
                        onConnect={() => setShowWalletConnector(true)}
                        onInsert={onInsert}
                        onClose={() => {
                          setShowNftsDrawer(false);
                        }}
                      />
                    </Drawer>
                  )}
                </Stack>
              </Box>
            </Grid>
            <Grid item md={3}></Grid>
          </Grid>
        </Box>
        <Stack mt={5} gap={1} alignItems="center" justifyContent={"center"}>
          <Typography variant="h4" align="center" fontWeight={900}>
            <img
              src="/nusic_white.png"
              alt=""
              width={100}
              style={{ marginRight: "20px" }}
            />
            Alive Collective - nGenesis Edition
          </Typography>
          <Typography variant="body2" align="center" color={"gray"}>
            Join the Movement that is Powering the Evolution of Music
          </Typography>
        </Stack>
        <Stack
          // mt={10}
          mx={{ md: "20%" }}
          p={2}
          gap={2}
          // sx={{
          //   boxShadow:
          //     "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          // }}
        >
          <Box mt={1} borderRadius={"6px"}>
            <Box mt={2}>
              <Typography fontWeight={700}>
                Inject your PFP into the NUSIC alive pass
              </Typography>
              <Typography variant="body2" color={"gray"}>
                Connect your favorite NFT directly to your NUSIC Alive Pass
              </Typography>
              <Typography variant="body2" color={"gray"}>
                Show the world what community you are part of
              </Typography>
            </Box>
          </Box>
          <Box mt={4}>
            <img src="/alive/pfp.gif" alt="" width={"100%"} />
          </Box>
          <Box display={"flex"} justifyContent="center" gap={2}>
            <Button
              variant="outlined"
              // size="small"
              color="secondary"
              sx={{ width: "200px" }}
              onClick={() => {
                setShowNftsDrawer(true);
                checkAutoLogin();
              }}
            >
              Preview
            </Button>
          </Box>
        </Stack>
        <Stack mt={5} pt={4} gap={1} alignItems="center" ref={stackRef}>
          <Typography variant="h4" align="center" fontWeight={700}>
            <img
              src="/nusic_white.png"
              alt=""
              width={100}
              style={{ marginLeft: "20px", marginRight: "20px" }}
            />
            Core Values
          </Typography>
        </Stack>
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
            <img src="/alive/1.png" alt="" width={50} />
            <Typography variant="h5" fontWeight={900}>
              True <br /> Transparency
            </Typography>
            <Typography>
              Cryptographic rails ensure immutability and censorship resistance
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
            <img src="/alive/2.png" alt="" width={50} />
            <Typography variant="h5" fontWeight={900}>
              Artist <br /> Centric
            </Typography>
            <Typography>
              Copyright owners have full control over music metadata and GenAI
              permissions
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
            <img src="/alive/3.png" alt="" width={50} />
            <Typography variant="h5" fontWeight={900}>
              Evolutionary <br /> Protocol
            </Typography>
            <Typography>
              Leverages emerging infrastructure as solution to music's big
              problem
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box mt={20}>
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="end"
          py={2}
          sx={{
            background:
              "radial-gradient(245.9% 245.82% at 50% -184.76%, #563FC8 0%, rgba(86, 63, 200, 0) 100%)",
          }}
          flexWrap="wrap"
          p={2}
        >
          <Stack alignItems={"start"} gap={2}>
            <Button href="//nusic.fm" target="_blank">
              <img src="/nusic_white.png" alt="nusic" width="120px"></img>
            </Button>
            <Box
              width={"100%"}
              height={20}
              display={"flex"}
              alignItems="center"
              flexWrap={"wrap"}
              gap={2}
              justifyContent="center"
              ml={0.5}
            >
              <img
                src="/home/built_icon.png"
                alt=""
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <img
                src="/home/ethereum.png"
                alt=""
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <img
                src="/home/optimism.webp"
                alt=""
                height={"60%"}
                style={{ objectFit: "cover" }}
              />
              <img
                src="/home/filecoin.png"
                alt=""
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
              <img
                src="/home/ipfs_icon.png"
                alt=""
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Stack>
          <Box mr={{ md: 10 }} width={{ xs: "100%", md: "initial" }} mt={2}>
            <Stack
              gap={3}
              mt={3}
              direction="row"
              justifyContent={"center"}
              alignItems="center"
            >
              <Link
                href="https://twitter.com/nusicOfficial"
                target={"_blank"}
                sx={{ color: "white", textDecoration: "none" }}
                fontFamily="Space Mono"
              >
                Twitter
              </Link>
              <Link
                href="https://discord.gg/eHyRQADgQ4"
                target={"_blank"}
                sx={{ color: "white", textDecoration: "none" }}
                fontFamily="Space Mono"
              >
                Discord
              </Link>
              <Link
                href="https://github.com/nusic-fm"
                target={"_blank"}
                sx={{ color: "white", textDecoration: "none" }}
                fontFamily="Space Mono"
              >
                Github
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <WalletConnectors
        open={!account && showWalletConnector}
        onSignInUsingWallet={onSignInUsingWallet}
        onClose={() => setShowWalletConnector(false)}
      />
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={4000}
        message={snackbarMessage}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setSnackbarMessage("")}
      />
      <Dialog open={!!txInfo} fullWidth>
        <DialogTitle color={"success"}>
          Successfully Minted !!!
          <IconButton
            aria-label="close"
            onClick={() => setTxInfo(undefined)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* <Typography>Token: #4</Typography> */}

          <Link
            href={`https://etherscan.io/tx/${txInfo?.hash}`}
            color="secondary"
            target={"_blank"}
          >
            Explore on Etherscan
          </Link>
        </DialogContent>
        <DialogActions>
          {/* <a
            className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=I%20just%20minted%20a%20NUSIC%20Alive%20Collective%20pass%20at%20alive.nusic.fm%20via%20%40nusicOfficial%20%0A%0AJoin%20the%20Movement%20Powering%20the%20Evolution%20of%20Music%0A%0A%23NUSIC"
            data-url=" "
          >
            Tweet
          </a> */}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AlivePass;

//         <Stack
//           mt={10}
//           mx={{ md: "20%" }}
//           p={2}
//           gap={2}
//           // sx={{
//           //   boxShadow:
//           //     "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
//           // }}
//         >
//           <Box mt={1} borderRadius={"6px"}>
//             {/* <Typography variant="h5" align="center">
//               Inject your PFP into the NUSIC alive pass
//             </Typography>
//             <Typography align="center" color={"gray"}>
//               Connect your favorite NFT directly to your NUSIC Alive Pass
//             </Typography> */}
//             <Typography variant="h3">Try it!</Typography>
//             <Box mt={2}>
//               {/* <Typography variant="h6" fontWeight={700}>
//                 Select an NFT from your wallet
//               </Typography> */}
//               <NftsByWallet
//                 onConnect={() => setShowWalletConnector(true)}
//                 onInsert={onInsert}
//                 onClose={() => {
//                   setShowNftsDrawer(false);
//                 }}
//               />
//             </Box>
//             <Box
//               my={5}
//               border="1px solid #303030"
//               py={5}
//               px={2}
//               borderRadius="6px"
//             >
//               <Box
//                 display={"flex"}
//                 justifyContent="center"
//                 position={"relative"}
//               >
//                 <Box width={{ xs: "100%", md: "400px" }}>
//                   <img src="/alive/new_card.png" alt="" width={"100%"} />
//                 </Box>
//                 {insertUrl && (
//                   <Box
//                     position={"absolute"}
//                     width="100%"
//                     height="100%"
//                     display={"flex"}
//                     justifyContent="center"
//                     alignItems={"center"}
//                   >
//                     <Box
//                       width={{ xs: "100px", md: "140px" }}
//                       height={{ xs: "100px", md: "140px" }}
//                     >
//                       <img
//                         src={insertUrl}
//                         alt=""
//                         width={"100%"}
//                         height={"100%"}
//                         style={{ objectFit: "cover", borderRadius: "50%" }}
//                       />
//                     </Box>
//                   </Box>
//                 )}
//               </Box>
//               <Stack alignItems={"center"} gap={2} mt={5}>
//                 <LoadingButton
//                   loading={isLoading}
//                   variant="contained"
//                   sx={{ width: { xs: "100%", md: "50%" } }}
//                   onClick={onMint}
//                 >
//                   Mint
//                 </LoadingButton>
//                 <Tooltip title="Connect your Wallet to receive the NFT directly into your address">
//                   <Button
//                     component="label"
//                     variant="outlined"
//                     sx={{ width: { xs: "100%", md: "50%", color: "white" } }}
//                     // endIcon={<InfoOutlinedIcon />}
//                     // ref={cardRef}
//                   >
//                     <CrossmintPayButton
//                       style={{ display: "none" }}
//                       clientId="0c4a330a-7286-4e0d-9d79-43ab7a03db65"
//                       mintConfig={{
//                         type: "erc-721",
//                         totalPrice: (tokenPrice * quantity).toFixed(2),
//                         tokenQuantity: quantity,
//                       }}
//                       // environment="staging"
//                       mintTo={account ?? undefined}
//                     />
//                     Mint with CARD
//                   </Button>
//                 </Tooltip>
//               </Stack>
//             </Box>
//           </Box>
//           <Box mt={4}>{/* <img src="/pfp.gif" alt="" width={"100%"} /> */}</Box>
//         </Stack>
