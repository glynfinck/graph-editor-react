import { createTheme } from "@material-ui/core/styles";

export const mainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#304C89",
    },
    error: {
      main: "#C42021",
    },
    success: {
      main: "#329F5B",
    },
    warning: {
      main: "#FDCA40",
    },
  },
});
