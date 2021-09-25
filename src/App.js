import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Create from "./components/create";
import Login from "./components/login";
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
          <Login />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
