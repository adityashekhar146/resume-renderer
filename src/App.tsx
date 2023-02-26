import { CssBaseline, ThemeProvider } from "@mui/material"
import "@fontsource/hammersmith-one";
import "@fontsource/kadwa";
import ARTSyRouter from "./app.routes"
import { basicTheme } from "./themes"

const App = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <ARTSyRouter />
    </ThemeProvider>
  )
}

export default App
