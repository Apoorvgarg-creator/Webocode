import React from "react";

import DiscountCard from "./components/DiscountCard";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <HomePage />
      <Navbar />
      <DiscountCard />
    </>
  );
};

export default App;
