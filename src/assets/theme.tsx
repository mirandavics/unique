import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#F8F8F8",
    },
    text: {
      primary: "#555555",
    },
    primary: {
      light: "#8ecdf8",
      main: "#1d9bf0",
      dark: "#177cc0",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bbbbbb",
      main: "#a3a3a3",
      dark: "#9e9e9e",
      contrastText: "#fff",
    },
    light: {
      light: "#F8F8F8",
      main: "#bbb9b9",
      dark: "#888888",
      contrastText: "#D9D9D9",
    },
    error: {
      main: "#F54748",
      dark: "#D93F40",
      contrastText: "#fff",
    },
    success: {
      main: "#27997A",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
    h4: {
      fontSize: 32,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 20,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 12,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 5px rgba(136, 136, 136, 0.15);",
          borderRadius: "16px",
          padding: "32px",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    light: Palette["primary"];
  }
  interface PaletteOptions {
    light?: PaletteOptions["primary"];
  }
  interface Palette {
    error: Palette["primary"];
  }
  interface PaletteOptions {
    error?: PaletteOptions["primary"];
  }
  interface Palette {
    success: Palette["primary"];
  }
  interface PaletteOptions {
    success?: PaletteOptions["primary"];
  }
}
