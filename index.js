import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from "./global-styles"
import { App } from './App';
import { FirebaseContext } from "./context/firebase"

const config = {
    apiKey: "AIzaSyBza4Sd2C3NRLRqT_gPPfN99zcDD406RPY",
    authDomain: "netflix-clay.firebaseapp.com",
    databaseURL: "https://netflix-clay-default-rtdb.firebaseio.com",
    projectId: "netflix-clay",
    storageBucket: "netflix-clay.appspot.com",
    messagingSenderId: "797453022772",
    appId: "1:797453022772:web:1737ddf03dd9e13e58bc61"
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
