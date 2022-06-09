import theme from "../theme";
import {ThemeProvider} from "@mui/material";
import App from "../App";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}
