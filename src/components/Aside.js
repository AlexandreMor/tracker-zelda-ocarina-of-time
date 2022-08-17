import React from "react";
import useSettings from "../logic/useSettings";
import DungeonsShuffleFields from "./dungeons shuffle/DungeonsShuffleFields";
import HintsDisplay from "./hints display/HintsDisplay";
import Hints from "./hints inputs/Hints";

import Tracker from "./items tracker/Tracker";
import RandomSpawns from "./random spawns/RandomSpawns";

export default function Aside({ display }) {
  const dungeonsShuffleSetting = useSettings("dungeons shuffle");
  return (
    <aside className="aside">
      {display === "tracker" ? (
        <div>
          <Tracker />
          <HintsDisplay />
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
