// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4c4c", // Red accent
    },
    secondary: {
      main: "#4cc9f0", // Cyan accent
    },
    background: {
      default: "rgba(15, 15, 20, 0.9)",
      paper: "rgba(30, 30, 40, 0.6)", // glass effect base
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255,255,255,0.7)",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Arial", sans-serif`,
    h6: { fontWeight: 600 },
    body2: { fontSize: "0.9rem" },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
