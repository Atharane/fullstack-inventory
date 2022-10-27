import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.tsx"; 
import PageNotFound from "./Components/PageNotFound.tsx"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
