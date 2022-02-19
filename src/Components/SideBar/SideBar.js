import React from "react";
import SideBarOptions from "../SideBarOptions/SideBarOptions";
import "./SideBar.css";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../../Helpers/DataLayer";

const SideBar = () => {
  const [{ playlist }, dispatch] = useDataLayerValue();

  console.log(playlist);

  return (
    <div className="side-bar">
      <img
        className="side-bar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt=""
      />
      <SideBarOptions title="Home" Icon={HomeIcon} />
      <SideBarOptions title="Search" Icon={SearchIcon} />
      <SideBarOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="side-bar__playlist">PLAYLIST</strong>
      <hr className="side-bar__hr" />
      {playlist?.items?.map((item) => (
        <SideBarOptions key={Math.random().toString()} title={item.name} />
      ))}
    </div>
  );
};

export default SideBar;
