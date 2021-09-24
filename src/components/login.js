import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import "./style.css";

export default function Login({ status }) {
  const [loggedStatus, setLogged] = useState();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  function loginHandler() {
    signInWithPopup(auth, provider);
  }
  function logOutHandler() {
    signOut(auth, provider);
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogged(true);
      status(loggedStatus);
    } else {
      setLogged(false);
      status(loggedStatus);
    }
  });

  return (
    <>
      <div className="login">
        {loggedStatus ? (
          <section id="logout">
            <button id="logout-btn" onClick={logOutHandler}>
              log out
            </button>
          </section>
        ) : (
          <section id="login">
            <button id="login-btn" onClick={loginHandler}>
              Log in
            </button>
          </section>
        )}
      </div>
    </>
  );
}
