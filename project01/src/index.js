import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.css";
import './index.css';
import Home from "./pages/home.js"
import Feature from "./pages/feature.js"
import Plain from './pages/plain';
import Contact from './pages/contact.js';
import {HashRouter , Routes , Route} from "react-router-dom"
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/feature' element={<Feature/>}></Route>
          <Route path='/plain' element={<Plain/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

    </HashRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
