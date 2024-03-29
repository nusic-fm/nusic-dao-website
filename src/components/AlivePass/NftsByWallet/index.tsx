import { Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import Close from "@mui/icons-material/Close";
// import { createUrlFromCid } from "../../../helpers";
import { getNftsMetadataByWallet } from "../../../helpers/zora";
import { IZoraData } from "../../../models/zora";

type Props = {
  onConnect: () => void;
  onInsert: (nft: IZoraData) => void;
  onClose?: () => void;
};

const NftsByWallet = ({ onConnect, onInsert, onClose }: Props) => {
  const { account } = useWeb3React();
  const [tokens, setTokens] = useState<IZoraData[]>([]);
  // const [previewNft, setPreviewNft] = useState<SelectedNftDetails>(); //TODO
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [insertUrl, setInsertUrl] = useState<string>();

  // const onFetchNftPreview = async (
  //   tokenUri: string
  // ): Promise<NftDetails | null> => {
  //   const response = await axios.post(
  //     `${process.env.NEXT_PUBLIC_SERVER}/nft/`,
  //     {
  //       tokenUri,
  //     }
  //   );
  //   if (response) {
  //     const data = response.data as NftDetails;
  //     return data;
  //   } else {
  //     return null;
  //   }
  // };

  const fetchAllNfts = async () => {
    // "0xA0cb079D354b66188f533A919d1c58cd67aFe398"
    if (!account) return;
    const _tokens = await getNftsMetadataByWallet(
      account
      // "0x1f3aECdD7b1c376863d08C5340B1E48Da2961539"
    );
    setTokens(_tokens);
  };

  useEffect(() => {
    if (account) {
      fetchAllNfts();
    }
  }, [account]);

  if (!account)
    return (
      <Box display={"flex"} justifyContent="center" my={6}>
        <Button onClick={onConnect} variant="contained">
          Connect Wallet
        </Button>
      </Box>
    );
  else
    return (
      <Box sx={{ bgcolor: "#0f0f0f" }} height="100vh" p={2}>
        <Box
          p={1}
          m={1}
          // borderBottom="1px solid gray"
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography variant="subtitle1" fontWeight={700}>
            Try before Purchase
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box
          display={"flex"}
          gap={1}
          sx={{ overflowX: "auto" }}
          width={{ xs: 350, md: 600 }}
          mt={4}
        >
          {tokens.length === 0 && (
            <Typography
              sx={{ color: "rgba(255,255,255,0.8)" }}
              variant="subtitle1"
              align="center"
              width={"100%"}
              my={5}
            >
              No NFTs found in your wallet
            </Typography>
          )}
          {tokens.map((nft, i) => (
            <Stack
              key={i}
              width={180}
              p={2}
              gap={1}
              // borderTop="1px solid #474747"
            >
              <Box>
                <Tooltip title={nft.name} placement="bottom-start">
                  <Typography
                    fontWeight={900}
                    noWrap
                    variant="subtitle2"
                    color={"rgba(255,255,255,0.8)"}
                  >
                    {nft.collectionName}
                  </Typography>
                </Tooltip>
                {/* <Tooltip
                  title={`Token ID: ${nft.tokenId}`}
                  placement="bottom-start"
                >
                  <Typography variant="body1" noWrap>
                    #{nft.tokenId}
                  </Typography>
                </Tooltip> */}
              </Box>
              {nft.image?.mediaEncoding?.thumbnail ? (
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  width="100%"
                  height={"100%"}
                >
                  <img
                    src={nft.image?.mediaEncoding?.thumbnail}
                    alt=""
                    width={150}
                    height={150}
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                  ></img>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  width="100%"
                  height={"100%"}
                >
                  <Box
                    width={200}
                    height={200}
                    display="flex"
                    alignItems={"center"}
                  >
                    <Typography align="center" color={"gray"}>
                      Image not available at this moment, you can hit Refresh to
                      see it
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                id="isnft"
                width={"100%"}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                gap={4}
                // mt={4}
              >
                {/* <Typography>is it a Music NFT?</Typography> */}
                <Button
                  disabled={isPreviewLoading}
                  variant="outlined"
                  color="info"
                  size="small"
                  onClick={() => {
                    onInsert(nft);
                    if (nft.image?.mediaEncoding?.thumbnail)
                      setInsertUrl(nft.image?.mediaEncoding?.thumbnail);
                  }}
                >
                  Insert
                </Button>
              </Box>
            </Stack>
          ))}
        </Box>
        <Box
          sx={{ bgcolor: "black" }}
          p={4}
          py={10}
          mt={"10%"}
          borderRadius="6px"
        >
          <Box display={"flex"} justifyContent="center" position={"relative"}>
            <Box width={{ xs: "100%", md: "400px" }}>
              <img src="/alive/new_card.png" alt="" width={"100%"} />
            </Box>
            {insertUrl && (
              <Box
                position={"absolute"}
                width="100%"
                height="100%"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Box
                  width={{ xs: "100px", md: "140px" }}
                  height={{ xs: "100px", md: "140px" }}
                >
                  <img
                    src={insertUrl}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
};

export default NftsByWallet;
