import { Box, Button, Grid, Typography } from "@mui/material";

const ArtWork = () => {
  return (
    <Box minHeight="100vh" style={{ backgroundColor: "#17172F" }} p={2}>
      <Box></Box>
      <Box mb={15}>
        <Box pt={20} px={2}>
          <Typography variant="h3" align="center">
            NUSIC DAO Governance NFT Artwork
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography align="center">
            A collection of 10,000 unique NFTs combining art, music, technology
            and finance
          </Typography>
        </Box>
        <Box mt={4} display="flex" justifyContent="center">
          <Box
            width={{ xs: "100%", sm: "100%", md: "30%" }}
            display="flex"
            justifyContent="space-around"
            flexWrap="wrap"
            gap={4}
          >
            <Button variant="contained">Mint governance NFT</Button>
            <Button variant="contained">View collection on Opensea</Button>
          </Box>
        </Box>
      </Box>
      <Box ml={{ xs: 0, md: 10 }} mr={{ xs: 0, md: 10 }} mb={15}>
        <Grid
          container
          style={{
            background: "url(/assets/arts-page/music-inspired-art.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          p={{ xs: 2, md: 5 }}
          borderRadius="16px"
        >
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <img src="/assets/arts-page/layers-group.png" alt="layers"></img>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              flexDirection={"column"}
              mt={{ xs: 3 }}
            >
              <Box mb={2}>
                <Typography variant="h3">Music-inspired Art</Typography>
              </Box>
              <Typography>
                Each image is composed of a single piece of musical notation
                which is then duplicated, reflected and rotated to create a
                concentric design.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mb={15}>
        <Grid container>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="center" height="100%">
              <Box
                height={{ xs: "300px", md: "450px" }}
                width={{ xs: "300px", md: "450px" }}
                borderRadius={"50%"}
                p={6}
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.31) 0%, #414155 100%)",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography align="center" variant="subtitle2">
                  Each colorful background gives its piece a different mood, and
                  the accompanying sounds help create distinction and atmosphere
                  for each of the 10,000 unique NFTs.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              justifyContent={{ xs: "end", md: "start" }}
              alignItems="end"
              height="100%"
            >
              <Box
                height={{ xs: "250px", md: "300px" }}
                width={{ xs: "250px", md: "300px" }}
                borderRadius={"50%"}
                p={2}
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(56, 56, 109, 0) 0%, #38386D 100%)",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography align="center" variant="subtitle2">
                  The designs are layered over one another hierarchically to
                  create a randomly generated series of images that will
                  interact with one another as they rotate.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
          {/* Second row starts here */}
          <Grid item xs={false} md={5}></Grid>
          <Grid item xs={9} md={5}>
            <Box
              height={{ xs: "250px", md: "300px" }}
              width={{ xs: "250px", md: "300px" }}
              p={2}
              borderRadius={"50%"}
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(110, 110, 181, 0) 0%, #6E6EB5 100%)",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography align="center" variant="subtitle2">
                To further ensure each piece is unique, each individual asset
                has a name corresponding to the piece of notation that was used
                to create it, with each layer represented in a different
                language and numbered using Sanskrit.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} md={2}></Grid>
        </Grid>
      </Box>
      <Box mb={15}>
        <Box display="flex" justifyContent="center" pt={10}>
          <Box
            width={{ xs: "100%", md: "50%" }}
            style={{
              background: "url(/assets/arts-page/rectangle-nusic.png",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            borderRadius="20px"
            position="relative"
          >
            <Box position="absolute" top="-25%" left="-4%">
              <img
                src="/assets/arts-page/quote.svg"
                alt=""
                width="180px"
                height="auto"
              />
            </Box>
            <Box m={{ xs: 5, md: 12 }} pt={{ xs: 2, md: 0 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Conceptually, the pieces are intended to reflect the way simple
                components can come together in collaboration to create
                something greater than the sum of their parts, much like how
                musicians interact with one another to make music.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArtWork;
