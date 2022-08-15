import React from "react";
import HintsDisplay from "./hints display/HintsDisplay";
import Hints from "./hints inputs/Hints";

import Tracker from "./items tracker/Tracker";

export default function Aside({display}) {
  return (
    <aside className="aside">
      {display ==="tracker" ? <div><Tracker /><HintsDisplay /></div> : <Hints />}
    </aside>
  );
}
