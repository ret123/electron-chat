import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Loginform from "../components/Loginform";
import Registerform from "../components/Registerform";

export default function Welcome() {
  const [isLogin, setIsLogin] = useState(true);
  const user = useSelector(({ auth }) => auth.user);

  const optInText = isLogin
    ? ["New User?", "Register"]
    : ["Already registered?", "Login"];

  if (user) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="centered-view mt-4">
      <div className="centered-container">
        {isLogin ? <Loginform /> : <Registerform />}

        <small className="form-text text-muted mt-2">
          {optInText[0]}
          <span onClick={() => setIsLogin(!isLogin)} className="btn-link ml-2">
            {optInText[1]}
          </span>
        </small>
      </div>
    </div>
  );
}
