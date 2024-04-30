import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import ProtectedRoutes from "./ProtectedRoutes";
import Error from "../pages/Error";
import { useState } from "react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button className="btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Logout
        </button>
      ) : (
        <button className="btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Login
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blogs"
          element={
            <ProtectedRoutes isLoggedIn={isLoggedIn}>
              <Blogs />
            </ProtectedRoutes>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
