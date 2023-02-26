import { createTheme } from "@mui/material";

const basicTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "'Hammersmith One', sans-serif",
    body1: {
      fontFamily: "Kadwa, Arial, serif",
      fontSize: "0.9rem",
    },
    body2: {
      fontFamily: "Kadwa, Arial, serif",
      fontSize: "0.8rem",
    },
    caption: {
      fontFamily: "Kadwa, Arial, serif",
      fontSize: "0.9rem",
      textJustify: "auto",
      fontStyle: "italic"
    },
    subtitle1: {
      fontFamily: "Kadwa, Arial, serif",
      fontSize: "0.7rem",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingInline: 0,
          paddingBlock: "0.2rem",
          '&>p': {
            margin: 0,
            textAlign: "justify"
          }
        }
      }
    }
  }
});

export default basicTheme;