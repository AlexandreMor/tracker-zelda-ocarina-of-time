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
        <li key={hint.name}>
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
        </li>
      );
    });
  const foolishesDisplay = hints
    .filter((hint) => hint.location !== "" && hint.id >= 8 && hint.id < 12)
    .map((hint) => {
      return (
        <li key={hint.name}>
          <FoolishDisplay hint={hint} />
        </li>
      );
    });
  const alwaysHintsDisplay = hints
    .filter((hint) => hint.location !== "" && hint.id >= 12 && hint.id < 19)
    .map((hint) => {
      return (
        <li key={hint.name}>
          <OtherHintDisplay hint={hint} areas={areas} />
        </li>
      );
    });
  const sometimesHintsDisplay = hints
    .filter((hint) => hint.location !== "" && hint.id >= 19 && hint.id < 29)
    .map((hint) => {
      return (
        <li key={hint.name}>
          <OtherHintDisplay hint={hint} areas={areas} />
        </li>
      );
    });
  return (
    <div className="hints-display">
      <h5 className="lightblue h5-hints">Paths</h5>
      <ul className="hints-list">
      {pathsDisplay}
      </ul>
      <h5 className="pink h5-hints">Foolishes</h5>
      <ul className="hints-list">
      {foolishesDisplay}
      </ul>
      <h5 className="h5-hints">Other Hints</h5>
      <div className="other-hints">
      <ul className="hints-list">
      {alwaysHintsDisplay}
      </ul>
      <ul className="hints-list">
      {sometimesHintsDisplay}
      </ul>
      </div>
    </div>
  );
}

export default HintsDisplay;
