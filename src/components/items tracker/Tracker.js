import React from "react";
import TrackerItems from "./TrackerItems";
import TrackerSongs from "./TrackerSongs";

export default function Tracker() {
  return (
    <div className="tracker-elements">
      <TrackerItems />
      <TrackerSongs />
    </div>
  );
}
