import React from "react";

function OtherHintDisplay({ hint, areas }) {
  return (
    <h5 className="other-hint-display">
      <span className="other-hint-name">
        {hint.type === "always" ? hint.name : hint.check}
      </span>
      {areas[hint.idArea].checks[hint.idCheck].item !== "" &&
        hint.idArea !== 0 && (
          <img
            className="image-small"
            src={areas[hint.idArea].checks[hint.idCheck].item}
            alt={hint.name}
          />
        )}
    </h5>
  );
}

export default OtherHintDisplay;
