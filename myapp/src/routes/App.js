import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CandidateProfile from "../pages/CandidateProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Perfil" element={<CandidateProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
