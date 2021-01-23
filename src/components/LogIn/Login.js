import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../../firebase/Firebase";
import loginStyle from "../../styles/login.module.css";
export default function Login() {
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={loginStyle.login_extdiv}>
      <div className={loginStyle.login_container}>
        <img src="https://upload.wikimedia.org/wikiped" alt="..." />
        <h2>Sign In to Whatsapp</h2>
        <Button onClick={signin}>Sign In with google</Button>
      </div>
    </div>
  );
}
