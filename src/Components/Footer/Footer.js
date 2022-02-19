import React from "react";
import "./Footer.css";

import ShuffleIcon from "@mui/icons-material/Shuffle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatIcon from "@mui/icons-material/Repeat";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import Slider from "@mui/material/Slider";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://i.scdn.co/image/ab67616d00001e029e495fb707973f3390850eea"
          alt=""
          className="footer__left-img"
        />
        <div className="footer__left-des">
          <div className="footer__left-title">Heat Waves</div>
          <div className="footer__left-artist">
            Glass Animals - Dreamland (+ Bonus Levels)
          </div>
        </div>
      </div>
      <div className="footer__center-up">
        <ShuffleIcon
          style={{ fontSize: "21px" }}
          className="footer__center-up__lm"
        />
        <SkipPreviousIcon
          style={{ fontSize: "33px" }}
          className="footer__center-up__l"
        />
        <PlayCircleIcon
          style={{ fontSize: "48px" }}
          className="footer__center-up__center"
        />
        <SkipNextIcon
          style={{ fontSize: "33px" }}
          className="footer__center-up__r"
        />
        <RepeatIcon
          style={{ fontSize: "21px" }}
          className="footer__center-up__rm"
        />
      </div>
      <div className="footer__right">
        <QueueMusicIcon
          style={{ fontSize: "24px" }}
          className="footer__right__q"
        />
        <VolumeUpIcon
          style={{ fontSize: "24px" }}
          className="footer__right__v"
        />
        <Slider
          size="small"
          aria-label="small"
          className="footer__right-slider"
          style={{ color: "#1db954", width: "16rem" }}
        />
      </div>
    </div>
  );
};

export default Footer;
