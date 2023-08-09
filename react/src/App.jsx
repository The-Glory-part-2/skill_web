import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Board from "./pages/Board";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="board" element={<Board />} />
        <Route path="board/:id" element={<Board />} />
        <Route path="mypage" element={<Mypage />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
