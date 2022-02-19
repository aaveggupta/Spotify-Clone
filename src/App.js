import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Helpers/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useDataLayerValue } from "./Helpers/DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue(); // Here we are using the value of DataLayer.Provider which is a useReducer
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });
      spotify.getUserPlaylists().then((playlist) => {
        dispatch({ type: "SET_PLAYLIST", playlist: playlist });
      });
      spotify.getPlaylist("37i9dQZEVXbMDoHDwVN2tF").then((discoverWeekly) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discoverWeekly: discoverWeekly,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
