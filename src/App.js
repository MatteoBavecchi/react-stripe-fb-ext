import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/functions';
var auth = null;
var user = null;

class App extends Component {


  login = () => {
    auth = firebase.auth().signInAnonymously()
      .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    console.log("ciao");
  }
  goToCheckout = () => {
    firebase.default
      .firestore()
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: 'price_1JTrBwCteg4IFPA3ZXanNvnY', 
        tax_rates: ['txr_1KCJpxCteg4IFPA3J0AeiB6u'],
        success_url: 'signup-5',
        cancel_url: '/',
        billing_address_collection: "required",
        tax_id_collection: {
          enabled: true,
        },
      })
      .then((docRef) => {
        docRef.onSnapshot(async (snap) => {
          const { error, url } = snap.data();
          if (error) {
            alert(`An error occurred: ${error.message}`);
          }

          if (url) {
            /*
            const stripe = await loadStripe(
              'pk_test_51JPvIuCteg4IFPA3FLES9iu76s9HCWf2mTIRTdNcpZqk6PKwYe718GUJCzOs1h7SW2JsB5FUTNpJ4Uznf7rXxLhg00D3BqLaSX' // todo enter your public stripe key here
            );
            console.log(`redirecting`);
            await stripe.redirectToCheckout({ sessionId });
            */
            window.location.assign(url);
          }
        });
      });
  }

  async sendToCustomerPortal() {
    const functionRef = firebase.default
      .functions()
      .httpsCallable('ext-firestore-stripe-payments-createPortalLink');
    const { data } = await functionRef({ returnUrl: window.location.origin });
    window.location.assign(data.url);
  }

  componentDidMount() {
    this.login();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <button onClick={() => this.goToCheckout()}>Abbonati</button>
        <button onClick={() => this.sendToCustomerPortal()}>Gestisci abbonamento</button>
      </div>
    );
  }
}

export default App;
