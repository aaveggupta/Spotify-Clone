import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../../Helpers/DataLayer";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon className="header__left-icon" />
        <input
          type="text"
          className="header__left-search"
          placeholder="Search for Artists, Songs or Podcasts"
        />
      </div>
      <div className="header__right">
        <Avatar
          src={user?.images[0]?.url}
          alt={user?.display_name}
          className="header__right-avatar"
        />
        <h4 className="header__right-name">{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
