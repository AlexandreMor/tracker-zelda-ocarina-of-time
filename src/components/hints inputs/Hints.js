import React from "react";
import OtherHint from "./OtherHint";
import FoolishHint from "./FoolishHint";
import PathHint from "./PathHint";
import { useSelector } from "react-redux";
import { selectHints } from "../../utils/selectors";

export default function Hints() {
  const hintsDisplay = useSelector(selectHints);
  const paths = hintsDisplay
    .filter((hint) => hint.name.includes("Path"))
    .map((hint) => {
      return <PathHint key={hint.name} hint={hint} />;
    });
  const foolishes = hintsDisplay
    .filter((hint) => hint.name.includes("Foolish"))
    .map((hint) => {
      return <FoolishHint key={hint.name} hint={hint} />;
    });
  const alwaysHints = hintsDisplay
    .filter(
      (hint) => hint.hasOwnProperty("type") && hint.type.includes("always")
    )
    .map((hint) => {
      return <OtherHint key={hint.name} hint={hint} />;
    });
  const sometimesHints = hintsDisplay
    .filter((hint) => hint.name.includes("Sometimes"))
    .map((hint) => {
      return <OtherHint key={hint.name} hint={hint} />;
    });
  return (
    <div>
      <ul className="field-list">
        <h5>Paths/WoTH</h5>
        {paths}
      </ul>
      <ul className="field-list">
        <h5>Foolishes</h5>
        {foolishes}
      </ul>
      <ul className="field-list">
        <h5>Always hints</h5>
        {alwaysHints}
      </ul>
      <ul className="field-list">
        <h5>Sometimes hints</h5>
        {sometimesHints}
      </ul>
    </div>
  );
}
