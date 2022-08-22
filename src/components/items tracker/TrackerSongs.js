import React from "react";
import { useSelector } from "react-redux";
import { selectSongs } from "../../utils/selectors";
import TrackerElement from "./TrackerElement";
import TrackerImage from "./TrackerImage";

function TrackerSongs() {
  const songs = useSelector(selectSongs);
  const songsDisplay = songs
    .filter((song) => song.name !== "cancel" && song.name !== "junk")
    .map((song) => {
      return (
        <TrackerImage key={song.name} element={song} stringElement="songs" />
      );
    });
  return <TrackerElement cssClass={"songs"} display={songsDisplay} />;
}

export default TrackerSongs;
