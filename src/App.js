import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWarehouse from "./pages/AddWarehouse";
import Home from "./pages/Home";
import Readwarehouse from "./pages/Readwarehouse";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/addWarehouse" element={<AddWarehouse />} />
      <Route exact path="/readWarehouse/:id" element={<Readwarehouse />} />
    </Routes>
  );
}

export default App;
