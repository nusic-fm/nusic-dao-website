import {
  Box,
  buttonUnstyledClasses,
  styled,
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
  tabUnstyledClasses,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const artwork = {
  bg: [
    "nusic",
    "dragon scales",
    "ocean",
    "fog",
    "candy",
    "shire",
    "sky",
    "treasure",
    "peach",
    "midnight",
    "magic",
    "lava",
  ],
  // Filename mapping for reading from folders
  4: [1, 2, 3, 4, 5, 6],
  3: [1, 2, 3, 4, 5, 6],
  2: [1, 2, 3, 4, 5, 6],
  1: [1, 2, 3, 4, 5, 6],
};

// Filename mapping for actual names of the files
const leyerNames = {
  4: [
    "CATUR-Clé-de-Fa",
    "CATUR-Clé-de-Sol",
    "CATUR-Croche",
    "CATUR-Double-croche",
    "CATUR-Double-croche-Doublet",
    "CATUR-Soupir",
  ],
  3: [
    "TRI-Achtel",
    "TRI-Bass-schlüssel",
    "TRI-Bass-schlüssel",
    "TRI-Sechzehntel-Dublette",
    "TRI-Viertelpause",
    "TRI-Violinschlüssel",
  ],
  2: [
    "DVI-Chiave-di-Basso",
    "DVI-Chiave-di-Violino",
    "DVI-Croma",
    "DVI-Pausa-di-Semiminima",
    "DVI-Semicroma",
    "DVI-Semicroma-Doppietta",
  ],
  1: [
    "EKA Treble",
    "EKA-Bass",
    "EKA-Eight",
    "EKA-Quarter-Rest",
    "EKA-Sixteenth",
    "EKA-Sixteenth-Duplet",
  ],
};

const Tab = styled(TabUnstyled)`
  color: black !important;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: rgba(91, 33, 212, 0.1);
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #5b21d4;
    color: white !important;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  border-radius: 50px;
  overflow-x: auto;
`;

const ArtworkBuilder = () => {
  const [bgFileName, setBgFileName] = useState<string>("nusic");
  const [layerFourName, setLayerFourName] = useState<number>(0);
  const [layerThreeName, setLayerThreeName] = useState<number>(0);
  const [layerTwoName, setLayerTwoName] = useState<number>(0);
  const [layerOneName, setLayerOneName] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [isLayersLoading, setIsLayersLoading] = useState<boolean>(false);

  const onLayerSelected = (folder: string, fileName: string | number) => {
    switch (folder) {
      case "bg":
        setBgFileName(fileName.toString());
        break;
      case "4":
        setLayerFourName(Number(fileName));
        break;
      case "3":
        setLayerThreeName(Number(fileName));
        break;
      case "2":
        setLayerTwoName(Number(fileName));
        break;
      case "1":
        setLayerOneName(Number(fileName));
        break;
    }
  };

  const drawOnCanvas = async () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx?.clearRect(0, 0, 450, 450);

      const img = new Image();
      img.src = `/assets/arts-page/arts/bg/${bgFileName}.png`;
      await new Promise((res) => {
        img.onload = function () {
          ctx?.drawImage(img, 0, 0);
          res(true);
        };
      });
      if (layerFourName) {
        const img4 = new Image();
        img4.src = `/assets/arts-page/arts/4/${layerFourName}.png`;
        await new Promise((res) => {
          img4.onload = function () {
            ctx?.drawImage(img4, 0, 0, 450, 450);
            res(true);
          };
        });
      }
      if (layerThreeName) {
        const img3 = new Image();
        img3.src = `/assets/arts-page/arts/3/${layerThreeName}.png`;
        await new Promise((res) => {
          img3.onload = function () {
            ctx?.drawImage(img3, 0, 0, 450, 450);
            res(true);
          };
        });
      }
      if (layerTwoName) {
        const img2 = new Image();
        img2.src = `/assets/arts-page/arts/2/${layerTwoName}.png`;
        await new Promise((res) => {
          img2.onload = function () {
            ctx?.drawImage(img2, 0, 0, 450, 450);
            res(true);
          };
        });
      }
      if (layerOneName) {
        const img1 = new Image();
        img1.src = `/assets/arts-page/arts/1/${layerOneName}.png`;
        await new Promise((res) => {
          img1.onload = function () {
            ctx?.drawImage(img1, 0, 0, 450, 450);
            res(true);
          };
        });
      }
    }
  };

  useEffect(() => {
    drawOnCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgFileName, layerFourName, layerThreeName, layerTwoName, layerOneName]);

  return (
    <Box
      style={{ background: "rgba(196,196,196, 0.2)" }}
      p={4}
      borderRadius="16px"
    >
      <Box mt={10} mb={14}>
        <Box mb={2}>
          <Typography variant="h3" align="center">
            NUSIC NFT Artwork Builder
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography align="center">
            Mix, match and explore the layers of our NFT art and music.
          </Typography>
        </Box>
        <Box>
          <Typography align="center">
            We’ve built this artwork builder to help you understand and
            appreciate how the layers come together and to learn about each
            unique layer and its variations.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box mb={5}>
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab>
                <Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      0
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      Color
                    </Typography>
                  </Box>
                </Box>
              </Tab>
              <Tab>
                <Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      1
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      CATUR
                    </Typography>
                  </Box>
                </Box>
              </Tab>
              <Tab>
                <Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      2
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      TRI
                    </Typography>
                  </Box>
                </Box>
              </Tab>
              <Tab>
                <Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      3
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      DVI
                    </Typography>
                  </Box>
                </Box>
              </Tab>
              <Tab>
                <Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      4
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      EKA
                    </Typography>
                  </Box>
                </Box>
              </Tab>
              <Tab>
                <Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      5
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="center"
                      color="inherit"
                      fontWeight={"bold"}
                    >
                      Sound
                    </Typography>
                  </Box>
                </Box>
              </Tab>
            </TabsList>
            <TabPanel value={0}>
              <Box
                display="flex"
                style={{ overflowX: "auto" }}
                justifyContent="center"
                alignItems="center"
                minHeight="170px"
                gap={1}
                pl={4}
              >
                {artwork.bg.map((bg) => {
                  return (
                    <Box key={bg}>
                      <Box
                        style={{
                          cursor: "pointer",
                          border:
                            bg === bgFileName
                              ? "2px solid white"
                              : "2px solid transparent",
                          borderRadius: "6px",
                        }}
                        p={1}
                        onClick={() => onLayerSelected("bg", bg)}
                      >
                        <img
                          src={`/assets/arts-page/scaled-down/bg/${bg}.png`}
                          alt={bg}
                        ></img>
                      </Box>
                      <Typography
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {bg}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value={1}>
              <Box
                display="flex"
                style={{ overflowX: "auto" }}
                justifyContent="center"
                alignItems="center"
                minHeight="170px"
                gap={6}
                pl={4}
              >
                {artwork[4].map((layer) => {
                  return (
                    <Box
                      key={layer}
                      style={{
                        cursor: "pointer",
                        border:
                          layer === layerFourName
                            ? "2px solid white"
                            : "2px solid transparent",
                        borderRadius: "6px",
                      }}
                      p={1}
                      onClick={() => onLayerSelected("4", layer)}
                    >
                      <Box display="flex" justifyContent="center">
                        <img
                          src={`/assets/arts-page/arts/4/${layer}.png`}
                          alt={layer.toString()}
                          width={100}
                        ></img>
                      </Box>
                      <Typography
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {leyerNames[4][layer - 1]}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value={2}>
              <Box
                display="flex"
                style={{ overflowX: "auto" }}
                justifyContent="center"
                alignItems="center"
                minHeight="170px"
                gap={6}
                pl={4}
              >
                {artwork[3].map((layer) => {
                  return (
                    <Box
                      key={layer}
                      style={{
                        cursor: "pointer",
                        border:
                          layer === layerThreeName
                            ? "2px solid white"
                            : "2px solid transparent",
                        borderRadius: "6px",
                      }}
                      p={1}
                      onClick={() => onLayerSelected("3", layer)}
                    >
                      <Box display="flex" justifyContent="center">
                        <img
                          src={`/assets/arts-page/arts/3/${layer}.png`}
                          alt={layer.toString()}
                          width={100}
                        ></img>
                      </Box>
                      <Typography
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {leyerNames[3][layer - 1]}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value={3}>
              <Box
                display="flex"
                style={{ overflowX: "auto" }}
                justifyContent="center"
                alignItems="center"
                gap={6}
                pl={4}
                minHeight="170px"
              >
                {artwork[2].map((layer) => {
                  return (
                    <Box
                      key={layer}
                      style={{
                        cursor: "pointer",
                        border:
                          layer === layerTwoName
                            ? "2px solid white"
                            : "2px solid transparent",
                        borderRadius: "6px",
                      }}
                      p={1}
                      onClick={() => onLayerSelected("2", layer)}
                    >
                      <Box display="flex" justifyContent="center">
                        <img
                          src={`/assets/arts-page/arts/2/${layer}.png`}
                          alt={layer.toString()}
                          width={100}
                        ></img>
                      </Box>
                      <Typography
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {leyerNames[2][layer - 1]}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </TabPanel>
            <TabPanel value={4}>
              <Box
                display="flex"
                style={{ overflowX: "auto" }}
                justifyContent="center"
                alignItems="center"
                gap={6}
                pl={4}
                minHeight="170px"
              >
                {artwork[1].map((layer) => {
                  return (
                    <Box
                      key={layer}
                      style={{
                        cursor: "pointer",
                        border:
                          layer === layerOneName
                            ? "2px solid white"
                            : "2px solid transparent",
                        borderRadius: "6px",
                      }}
                      onClick={() => onLayerSelected("1", layer)}
                      p={1}
                    >
                      <Box display="flex" justifyContent="center">
                        <img
                          src={`/assets/arts-page/arts/1/${layer}.png`}
                          alt={layer.toString()}
                          width={100}
                        ></img>
                      </Box>
                      <Typography
                        align="center"
                        style={{ textTransform: "capitalize" }}
                      >
                        {leyerNames[1][layer - 1]}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </TabPanel>
          </TabsUnstyled>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mb={10}>
          <canvas ref={canvasRef} width={450} height={450} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Box
            p={4}
            style={{ backgroundColor: "#2E2E44" }}
            width={400}
            borderRadius={"16px"}
          >
            <Typography fontWeight="bold" align="center">
              Properties
            </Typography>
            <Box mt={4} p={4}>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography fontWeight="bold">0-Color</Typography>
                </Box>
                <Box>
                  <Typography>{bgFileName}</Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography fontWeight="bold">1-CATUR</Typography>
                </Box>
                <Box>
                  <Typography>
                    {leyerNames[4][layerFourName - 1] || "-"}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography fontWeight="bold">2-TRI</Typography>
                </Box>
                <Box>
                  <Typography>
                    {leyerNames[3][layerThreeName - 1] || "-"}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography fontWeight="bold">3-DVI</Typography>
                </Box>
                <Box>
                  <Typography>
                    {leyerNames[2][layerTwoName - 1] || "-"}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography fontWeight="bold">4-EKA</Typography>
                </Box>
                <Box>
                  <Typography>
                    {leyerNames[1][layerOneName - 1] || "-"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArtworkBuilder;
