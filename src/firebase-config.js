import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBVqM3QnbZa-wUxcAJwbiqZAjmZbYwMEQ",

  authDomain: "react-portofolio-a5072.firebaseapp.com",

  databaseURL: "https://react-portofolio-a5072-default-rtdb.firebaseio.com",

  projectId: "react-portofolio-a5072",

  storageBucket: "react-portofolio-a5072.appspot.com",

  messagingSenderId: "91229360008",

  appId: "1:91229360008:web:8f147d8aa50f89825f343d",

  measurementId: "G-Q9YGPFSZKY",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
