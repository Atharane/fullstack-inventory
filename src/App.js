import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login/Login.tsx";
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import Page404 from "./Components/Page404.tsx";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
