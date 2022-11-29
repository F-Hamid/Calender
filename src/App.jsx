import React from "react";
import { Container, Navbar } from "./components";

const App = () => {
  return (
    <div className="app flex justify-between w-[90vw] h-[92vh] bg-color-secondary m-12 p-4 rounded-sm">
      <Navbar />
      <Container />
    </div>
  );
};

export default App;
