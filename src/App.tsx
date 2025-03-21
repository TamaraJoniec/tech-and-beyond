import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import TestMarkdown from "./pages/TestMarkdown";
import AdminLogin from "./pages/AdminLogin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/test" element={<TestMarkdown />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
