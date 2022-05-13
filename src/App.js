import "./App.css";
import CanvasPage from "./pages/CanvasPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import React from "react";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/canvas" element={<CanvasPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" />
    </Routes>
  </BrowserRouter>
);
