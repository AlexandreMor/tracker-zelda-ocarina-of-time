import React from "react";
import useSettings from "../logic/useSettings";
import DungeonsShuffleFields from "./dungeons shuffle/DungeonsShuffleFields";
import HintsDisplay from "./hints display/HintsDisplay";
import Hints from "./hints inputs/Hints";

import Tracker from "./items tracker/Tracker";

export default function Aside({display}) {
  const dungeonsShuffleSetting = useSettings("dungeons shuffle");
  return (
    <aside className="aside">
      {display ==="tracker" ? <div><Tracker /><HintsDisplay /></div> : <div><Hints />{dungeonsShuffleSetting==="true" && <DungeonsShuffleFields />}</div>}
    </aside>
  );
}
