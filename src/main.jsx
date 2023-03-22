import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import UseApp from "./UseApp";
import UseEffectApp from "./UseEffectApp";
import IdsOrColors from "./IdsOrColors";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseEffectApp />
  </React.StrictMode>
);
