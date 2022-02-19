import React from "react";
import "./Login.css";
import { loginUrl } from "../../Helpers/spotify.js";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="spotify_logo"
      />
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
};

export default Login;
