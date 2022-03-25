import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.scss";
import App from "./App";
import Amend from "./routes/amend";
import Booking from "./routes/booking";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="booking" element={<Booking />} />
      <Route path="amend" element={<Amend />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)