import React from "react";
import "./App.css";
import CanvasPage from "./pages/CanvasPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/canvas" element={<CanvasPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
