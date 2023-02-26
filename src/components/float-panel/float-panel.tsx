import { Box, Paper, PaperProps, styled } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

const FloatPanel = styled(Paper)<PaperProps>(({theme}) => ({
  position: "fixed",
  top: "1rem",
  right: "1rem",
  padding: "0.2rem 0.4rem",
  backgroundColor: theme.palette.grey[50],
  opacity: "80%",
  borderRadius: 2,
}));

export default FloatPanel;
