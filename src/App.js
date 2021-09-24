import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Create from "./components/create";
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
          <Create />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
