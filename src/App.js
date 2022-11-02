import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Login from "./Components/Login/Login.tsx";
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import Actions from "./Components/Actions/Action.tsx";
import PageNotFound from "./Components/PageNotFound.tsx";

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
