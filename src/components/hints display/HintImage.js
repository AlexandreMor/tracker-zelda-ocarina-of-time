import React from "react";

function HintImage({ check }) {
  return (
    <div className="hint-image">
      <div className="image-player">
        <img className="image-small" src={check.item} alt={check.name} />
        <span className="hint-player-name">{check.player}</span>
      </div>
    </div>
  );
}

export default HintImage;
