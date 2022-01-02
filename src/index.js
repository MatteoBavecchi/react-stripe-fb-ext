import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';

const app = firebase.initializeApp({
  apiKey: "AIzaSyA_30OZ08ZPCDwCu_gwHSnmYuNkb6GRPpc",
  authDomain: "civil-willow-211119.firebaseapp.com",
  databaseURL: "https://civil-willow-211119.firebaseio.com",
  projectId: "civil-willow-211119",
  storageBucket: "civil-willow-211119.appspot.com",
  messagingSenderId: "709281914321",
  appId: "1:709281914321:web:b03f54f94d991b0e9ad4f0",
  measurementId: "G-JTQQMVGPL6"
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
