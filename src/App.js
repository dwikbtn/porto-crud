import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Create from "./components/create";
import Login from "./components/login";
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [logStatus, setLogStatus] = useState();

  const status = (data) => {
    setLogStatus(data);
  };
  const log =
    logStatus === false ? (
      <Login status={status} />
    ) : (
      <>
        <Create />
        <Login status={status} />
      </>
    );
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
          {log}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
