import React from "react";

function FoolishDisplay({hint}) {
  return (
    <h4 className="hint-name-display">
      <span className="pink">{hint.location} is Foolish</span>
    </h4>
  );
}

export default FoolishDisplay;
