
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../theme";
import { Provider } from "react-redux";
import { store } from "../redux/store";
type ProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
