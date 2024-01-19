import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { HashRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <NavBar/>
//     <App />
//   </React.StrictMode>
// );



ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <NavBar/>
    <App />
    <Footer/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


