import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: {
      main: string;
      focus: string;
    };
    black: {
      light: string;
      main: string;
      focus: string;
    };
    light: {
      main: string;
      focus: string;
    };
    gradients: {
      primary: { main: string; state: string };
      secondary: { main: string; state: string };
      info: { main: string; state: string };
      success: { main: string; state: string };
      warning: { main: string; state: string };
      error: { main: string; state: string };
      light: { main: string; state: string };
      dark: { main: string; state: string };
    };
    coloredShadows: {
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    white?: {
      main: string;
      focus: string;
    };
    black?: {
      light: string;
      main: string;
      focus: string;
    };
    light?: {
      main: string;
      focus: string;
    };
    gradients?: {
      primary?: { main: string; state: string };
      secondary?: { main: string; state: string };
      info?: { main: string; state: string };
      success?: { main: string; state: string };
      warning?: { main: string; state: string };
      error?: { main: string; state: string };
      light?: { main: string; state: string };
      dark?: { main: string; state: string };
    };
    coloredShadows?: {
      primary?: string;
      secondary?: string;
      info?: string;
      success?: string;
      warning?: string;
      error?: string;
      light?: string;
      dark?: string;
    };
  }

  interface TypeText {
    main?: string;
    focus?: string;
  }

  interface TypographyVariants {
    d1: React.CSSProperties;
    d2: React.CSSProperties;
    d3: React.CSSProperties;
    d4: React.CSSProperties;
    d5: React.CSSProperties;
    d6: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    d1?: React.CSSProperties;
    d2?: React.CSSProperties;
    d3?: React.CSSProperties;
    d4?: React.CSSProperties;
    d5?: React.CSSProperties;
    d6?: React.CSSProperties;
  }

  interface Components {
    MuiButton?: {
      styleOverrides?: {
        root?: React.CSSProperties;
        contained?: React.CSSProperties;
        outlined?: React.CSSProperties;
        text?: React.CSSProperties;
      };
      variants?: Array<{
        props: { variant: string; color: string };
        style: React.CSSProperties;
      }>;
    };
    MuiAutocomplete?: {
      styleOverrides?: {
        root?: React.CSSProperties;
        inputRoot?: React.CSSProperties;
        input?: React.CSSProperties;
        option?: React.CSSProperties;
        clearIndicator?: React.CSSProperties;
        popupIndicator?: React.CSSProperties;
      };
    };
    MuiTextField?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
    MuiCard?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
    MuiAppBar?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
    MuiDrawer?: {
      styleOverrides?: {
        paper?: React.CSSProperties;
      };
    };
    MuiListItem?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    d1: true;
    d2: true;
    d3: true;
    d4: true;
    d5: true;
    d6: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
    black: true;
    light: true;
  }
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    white: true;
    black: true;
    light: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    white: true;
    black: true;
    light: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    colored: true;
  }
}

export const themeOptions = {
  palette: {
    white: {
      main: "#ffffff",
      focus: "#f2f2f2"
    },
    black: {
      light: "#333333",
      main: "#000000",
      focus: "#000000"
    },
    light: {
      main: "#f8f9fa",
      focus: "#e9ecef"
    },
    gradients: {
      primary: {
        main: "linear-gradient(195deg, #EC407A, #D81B60)",
        state: "linear-gradient(195deg, #d81b5e, #b0004f)"
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "8px 16px"
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          height: "3rem",
          "& .MuiOutlinedInput-root": {
            height: "100%",
            padding: "0 !important",
            "& .MuiAutocomplete-input": {
              height: "100%",
              padding: "0 14px !important",
              display: "flex",
              alignItems: "center"
            }
          }
        },
        inputRoot: {
          height: "100%"
        },
        option: {
          minHeight: "48px",
          display: "flex",
          alignItems: "center"
        }
      },
    },
  },
  typography: {
    d1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2
    },
  }
};