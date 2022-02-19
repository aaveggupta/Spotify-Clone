import React from "react";
import Footer from "../Footer/Footer";
import PlayerBody from "../PlayerBody/PlayerBody";
import SideBar from "../SideBar/SideBar";
import "./Player.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <PlayerBody spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
