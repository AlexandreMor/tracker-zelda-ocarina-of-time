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
    <div>
      <h3>Paths</h3>
      {pathsDisplay}
      <h3>Foolishes</h3>
      {foolishesDisplay}
      <h3>Always Hints</h3>
      {alwaysHintsDisplay}
      <h3>Sometimes Hints</h3>
      {sometimesHintsDisplay}
    </div>
  );
}

export default HintsDisplay;
