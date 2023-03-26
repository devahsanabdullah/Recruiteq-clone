import { createTheme } from "@mui/material";
import Gotham from "../fonts/Gotham-Black.otf";
let theme = createTheme({

  typography: {
    h3: {
      fontFamily: Gotham,
      fontWeight: { md: "bold", xs: "bolder" },
      textAlign: "center",
      lineHeight: { md: "55px", xs: "50px" },
      letterSpacing: "0.03em",
      color: "#2149A2",
    },
    h4: {
      fontWeight: "bold",
      textALign: "left",
      color: "#2149A2",
      fontSize: "20px",
    },
    h5: {
      fontFamily: Gotham,
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "36px",
      textAlign: "center",
      color: "#081315",
    },
    h6: {
      fontWeight: "bold",
    },
    body: {
      fontFamily: Gotham,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "13px",
      textAlign: "center",

      color: "#2E2E2E",
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: "0px auto",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          border: "none",
          margin: "5px auto",
          width: "100%",
          color: "white",
          backgroundColor: "transparent",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "white",
          fontFamily: Gotham,
          fontSize: "16px",
          borderRadius: "0px",
          padding: "10px",
          "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
        },
      },
    },
  },
});

export default theme;
