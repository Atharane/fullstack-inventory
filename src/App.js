import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.tsx"; 
import Dashboard from "./Components/Dashboard/Dashboard.tsx"; 
import PageNotFound from "./Components/PageNotFound.tsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
