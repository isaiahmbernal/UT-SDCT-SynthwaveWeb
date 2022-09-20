import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MapPage from "./pages/Map/MapPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MissingPage from "./pages/MissingPage";
import CountdownPage from "./pages/CountdownPage";
import ProgressPage from "./pages/ProgressPage";

export default function App() {
  const location = useLocation();
  return (
    <div className="bg-black">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/">
            <Route index element={<CountdownPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="progress" element={<ProgressPage />}>
              {/* <Route path="?" */}
            </Route>
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
