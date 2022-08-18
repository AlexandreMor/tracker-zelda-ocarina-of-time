import React from "react";
import { useSelector } from "react-redux";
import { selectChecks, selectHints } from "../../utils/selectors";
import FoolishDisplay from "./FoolishDisplay";
import HintImage from "./HintImage";
import OtherHintDisplay from "./OtherHintDisplay";
import PathDisplay from "./PathDisplay";

function HintsDisplay() {
  const hints = useSelector(selectHints);
  const areas = useSelector(selectChecks);
  const pathsDisplay = hints
    .filter((hint) => hint.location !== "" && hint.id < 8)
    .map((hint) => {
      return (
        <div key={hint.name}>
          <PathDisplay hint={hint} />
          {hint.location !== "" &&
            areas
              .filter((area) => area.id === hint.idArea)
              .map((area) => {
                return area.checks
                  .filter((check) => check.item !== "")
                  .map((check) => {
                    return <HintImage key={check.name} check={check} />;
                  });
              })}
        </div>
      );
    });
  const foolishesDisplay = hints
    .filter((hint) => hint.location !== "" && hint.id >= 8 && hint.id < 12)
    .map((hint) => {
      return (
        <div key={hint.name}>
          <FoolishDisplay hint={hint} />
        </div>
      );
    });
  const alwaysHintsDisplay = hints
    .filter((hint) => hint.location !== "" && hint.id >= 12 && hint.id < 19)
    .map((hint) => {
      return (
        <div key={hint.name}>
          <OtherHintDisplay hint={hint} areas={areas} />
        </div>
      );
    });
  const sometimesHintsDisplay = hints
    .filter((hint) => hint.location !== "" && hint.id >= 19 && hint.id < 29)
    .map((hint) => {
      return (
        <div key={hint.name}>
          <OtherHintDisplay hint={hint} areas={areas} />
        </div>
      );
    });
  return (
    <div className="hints-display">
      <h4 className="lightblue">Paths</h4>
      {pathsDisplay}
      <h4 className="pink">Foolishes</h4>
      {foolishesDisplay}
      <h4>Always Hints</h4>
      {alwaysHintsDisplay}
      <h4>Sometimes Hints</h4>
      {sometimesHintsDisplay}
    </div>
  );
}

export default HintsDisplay;
