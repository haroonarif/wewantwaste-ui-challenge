import { createTheme } from "@mui/material/styles";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import typography from "./base/typography";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
});