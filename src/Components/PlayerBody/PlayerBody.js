import React from "react";
import { useDataLayerValue } from "../../Helpers/DataLayer";
import Header from "../Header/Header";
import "./PlayerBody.css";

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "../SongRow/SongRow";

const PlayerBody = ({ spotify }) => {
  const [{ discoverWeekly, user }, dispatch] = useDataLayerValue();

  console.log(discoverWeekly);

  return (
    <div className="player-body">
      <Header spotify={spotify} />
      <div className="player-body__dw">
        <img
          src={discoverWeekly?.images[0]?.url}
          alt="discover weekly"
          className="player-body__dw-left"
        />
        <div className="player-body__dw-right">
          <h5 className="player-body__dw-right-playlist">PLAYLIST</h5>
          <h1 className="player-body__dw-right-title">
            {discoverWeekly?.name}
          </h1>
          <h5 className="player-body__dw-right-text">
            {discoverWeekly?.description}
          </h5>
          <h5 className="player-body__dw-right-madefor">
            Made for{" "}
            <span style={{ color: "white" }}>{user?.display_name}</span> ·
            30songs
          </h5>
        </div>
      </div>
      <div className="player-body__icons">
        <PlayCircleFilledWhiteIcon
          className="player-body__icons-l"
          style={{ fontSize: "4.5rem" }}
        />
        <FavoriteBorderIcon
          className="player-body__icons-c"
          style={{ fontSize: "2.5rem" }}
        />
        <MoreHorizIcon
          className="player-body__icons-r"
          style={{ fontSize: "2.5rem" }}
        />
      </div>
      <div className="player-body__songs">
        {discoverWeekly?.tracks?.items.map((song) => (
          <SongRow
            key={Math.random().toString()}
            title={song?.track?.name}
            artists={song?.track?.artists}
            image={song?.track?.album?.images[1]?.url}
            albumName={song?.track?.album?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerBody;
