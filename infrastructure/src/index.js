import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./Pages/homePage";

const App = () => {
  return (
    <HomePage />
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
