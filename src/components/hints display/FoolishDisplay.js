import React from "react";

function FoolishDisplay({hint}) {
  return (
    <h5 className="hint-name-display pink">
      <span>{hint.location}</span>
    </h5>
  );
}

export default FoolishDisplay;
