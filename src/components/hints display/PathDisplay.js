import React from "react";

function PathDisplay({ hint }) {
  return (
    <h5 className="hint-name-display">
      <span className="lightblue">{hint.location}</span>
      {hint.boss !== "" && " to "}
      <span className="red">{hint.boss}</span>
      {hint.player !== "" && " for "}
      <span className="green">{hint.player}</span>
    </h5>
  );
}

export default PathDisplay;
