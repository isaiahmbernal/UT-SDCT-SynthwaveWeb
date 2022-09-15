import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MapPage from "./pages/MapPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MissingPage from "./pages/MissingPage";
import CountdownPage from "./pages/CountdownPage";
import ProgressPage from "./pages/ProgressPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MapPage />} />
          <Route path="countdown" element={<CountdownPage />} />
          <Route path="progress" element={<ProgressPage />} >
            {/* <Route path="?" */}
          </Route>
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
