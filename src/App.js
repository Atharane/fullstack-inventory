import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
