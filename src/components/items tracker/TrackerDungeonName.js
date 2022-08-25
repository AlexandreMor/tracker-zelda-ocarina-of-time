import React, { useState } from "react";

function TrackerDungeonName() {
  const dungeonsName = [
    "Free",
    "Deku",
    "DC",
    "Jabu",
    "Frst",
    "Fire",
    "Watr",
    "Shdw",
    "Sprt",
  ];
  const [id, setId] = useState(0);
  const handleClick = () => {
    if (id < 8) {
      return setId(id + 1);
    }
    return setId(0);
  };
  return (
    <div className="dungeon-name" onClick={() => handleClick()}>
      {dungeonsName[id]}
    </div>
  );
}

export default TrackerDungeonName;
