import React from "react";
import OtherHints from "./OtherHints";
import FoolishHints from "./FoolishHints";
import PathHint from "./PathHint";
import { useSelector } from "react-redux";
import { selectHints } from "../../utils/selectors";

export default function PathHints() {
  const hintsDisplay = useSelector(selectHints);
  return (
    <ul className="field-list">
      {hintsDisplay.map((hint) => {
        if (hint.name.includes("Path")) {
          return <PathHint key={hint.name} hint={hint} />;
        }
        if (hint.name.includes("Foolish")) {
          return <FoolishHints key={hint.name} hint={hint} />;
        }
        if (hint.hasOwnProperty("type") && hint.type.includes("always")) {
          return <OtherHints key={hint.name} hint={hint} />;
        }
        if (hint.name.includes("Sometimes")) {
          return <OtherHints key={hint.name} hint={hint} />;
        }
        return null;
      })}
    </ul>
  );
}
