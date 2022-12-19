import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import "./style.css";
import NavBar from "./components/NavBar/NavBar";
import Contents from "./components/Contents/Contents";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Contents />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
