import {
  Box,
  Container,
  useTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { DownloadPanel } from "../components/float-panel";

const ResumeLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[800], py: "0.5rem" }}>
      <DownloadPanel />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
  )
};

export default ResumeLayout;