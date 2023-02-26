import { Box, Container, Typography, useTheme } from "@mui/material";

const HomeBanner = () => {
  const theme = useTheme();

  return (
    <Box justifyContent="center" alignItems="center" sx={{
      position: "relative",
      isolation: "isolate",
      height: "18rem",
      width: "100%",
      color: theme.palette.common.white,
      backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.error.dark})`,
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        zIndex: 0,
        borderRadius: "100% 70%",
        width: "110%",
        height: "17rem",
        backgroundColor: "white",
        right: "-1rem",
        top: "10rem"
      }
    }}>
      <Container maxWidth="lg">
        <Box justifyItems="center" alignItems="center" textAlign="center">
          <Typography variant="h1">Resume Renderer</Typography>
          <Typography variant="h4">Powered by ARTSy</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HomeBanner;
