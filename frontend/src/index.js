import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MapPage from "./pages/Map/MapPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MissingPage from "./pages/MissingPage";

export default function App() {
  const location = useLocation();
  return (
    <div className="bg-black" onTouchMove={(event) => {
      console.log("Bruh")
      if (event.scale !== 1) {
        event.preventDefault();
      }
    }}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/">
            <Route index element={<MapPage />} />
            <Route path="*" element={<MissingPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter onTouchMove={(event) => {
      console.log("Bruh")
      if (event.scale !== 1) {
        event.preventDefault();
      }
    }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
