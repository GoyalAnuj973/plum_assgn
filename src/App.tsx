import React from "react";
import "./App.css";
import Confirmation from "./Screens/ConfirmationScreen";
import Declaration from "./Screens/DeclarationScreen";
import Form from "./Screens/FormScreen";
import Package from "./Screens/PackageScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Confirmed from "./Screens/Confirmed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/package-selection" element={<Package />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/successfull" element={<Confirmed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
