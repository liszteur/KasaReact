import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom"

import Header from "./Composants/Header"
import Footer from "./Composants/Footer"
import Error from "./Composants/Error"
import Home from "./Pages/Home"
import Logement from "./Pages/Logement"
import Propos from "./Pages/Propos"
// ===========================================================


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
       <Routes>
         <Route path="" element={<Home/>} />
         <Route path="logement/c67ab8a7" element={<Logement/>} />
         <Route path="propos" element={<Propos/>} />
         <Route path="*" element={<Error/>} />
       </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
