import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login/Login.tsx";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
