/**
 * Index- starts our - tar alla våra REACT-kompononeter och Mount dom till DOM
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //importerar APP-komponent från App.js 

ReactDOM.render( //tar vår app-komponent och renderar det till DOM
  //React.StrictMode: skickar varningar till oss
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root') //det sker i root-diven i public/index.html-filen som vi inte kommer röra
  //allt som sker i App.js kommer då köras o visas på vår webbsida
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

