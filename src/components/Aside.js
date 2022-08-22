import React from "react";
import useSettings from "../logic/useSettings";
import DungeonsShuffleFields from "./dungeons shuffle/DungeonsShuffleFields";
import Hints from "./hints inputs/Hints";

import Tracker from "./items tracker/Tracker";
import RandomSpawns from "./random spawns/RandomSpawns";

export default function Aside({ display }) {
  const dungeonsShuffleSetting = useSettings("dungeons shuffle");
  return (
    <aside className="aside">
      {display === "tracker" ? (
        <div className="aside-left">
          <Tracker />
        </div>
      ) : (
        <div className="aside-right">
          <Hints />
          <RandomSpawns />
          {dungeonsShuffleSetting === "true" && <DungeonsShuffleFields />}
        </div>
      )}
    </aside>
  );
}
