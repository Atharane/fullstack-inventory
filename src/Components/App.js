import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Login/Login";

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
