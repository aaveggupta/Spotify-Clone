import React, { useEffect, useState } from "react";
import "./SongRow.css";

const SongRow = ({ title, artists, image, albumName }) => {
  const [artist, setArtist] = useState("");

  useEffect(() => {
    let names = [];
    artists.map((art) => names.push(art?.name));
    let artistAll = names.join(" • ");
    setArtist(`${artistAll} - ${albumName}`);
  }, [artists]);

  return (
    <div className="songrow">
      <img src={image} alt="" className="songrow-img" />
      <div className="songrow-des">
        <div className="songrow-title">{title}</div>
        <div className="songrow-artist">{artist}</div>
      </div>
    </div>
  );
};

export default SongRow;
