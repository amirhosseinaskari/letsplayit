import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyADFx249HOQbc8DWRxhpH9yLCiaWcps6XU',
  authDomain: 'letsplayit.firebaseapp.com',
  databaseURL: 'https://letsplayit.firebaseio.com',
  projectId: 'letsplayit',
  storageBucket: 'letsplayit.appspot.com',
  messagingSenderId: '500560013739',
  appId: '1:500560013739:web:25e19546f977660338caee',
  measurementId: 'G-2R7E2N4KYH',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
