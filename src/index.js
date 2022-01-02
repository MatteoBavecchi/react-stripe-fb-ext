import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const app = initializeApp({
  apiKey: "AIzaSyBE7JMBahNx-3DmBzJLDVd9xIO3msRjwrc",
  authDomain: "auth-test-99d38.firebaseapp.com",
  projectId: "auth-test-99d38",
  storageBucket: "auth-test-99d38.appspot.com",
  messagingSenderId: "785844393732",
  appId: "1:785844393732:web:8c3ecbb1573aa93b30a251"
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
