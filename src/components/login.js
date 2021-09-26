import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import Create from "./create";

import "./style.css";
import ShowData from "./showData";

export default function Login() {
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
    } else {
      setLogged(false);
    }
  });

  return (
    <>
      <div className="login">
        {loggedStatus ? (
          <>
            <Create />
            <ShowData />
            <section id="logout">
              <button id="logout-btn" onClick={logOutHandler}>
                log out
              </button>
            </section>
          </>
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
