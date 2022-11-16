import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Places from "./pages/Places";
import Community from "./pages/Community";
import Nft from "./pages/Nft";
import SharedLayout from "./components/SharedLayout";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Red Rose", "cursive"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="community" element={<Community />} />
          <Route path="nft" element={<Nft />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
