//__App__//
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PackageDetailsPage from "./pages/PackageDetailsPage";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

function App() {
  const [selectedCountry, setSelectedCountry] = useState({
    code: "SA",
    name: "السعودية",
    currency: "ر.س",
    flag: "🇸🇦",
  });

  // handel country with props
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <Header onCountrySelect={handleCountrySelect} />

      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={<Home selectedCountry={selectedCountry} />}
          />
          <Route
            path="/package/:id"
            element={<PackageDetailsPage selectedCountry={selectedCountry} />}
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
