import React from "react";
import OtherHint from "./OtherHint";
import FoolishHint from "./FoolishHint";
import PathHint from "./PathHint";
import { useSelector } from "react-redux";
import { selectHints } from "../../utils/selectors";
import useSettings from "../../logic/useSettings";

export default function Hints() {
  const hintsDisplay = useSelector(selectHints);
  const multiworld = useSettings("multiworld");
  const classicNumberOfPathHints = (id) => {
    if (multiworld === "false") {
      return id < 5;
    } else {
      return id < 8;
    }
  };
  const classicNumberOfFoolishHints = (id) => {
    if (multiworld === "false") {
      return id >= 8 && id < 11;
    } else {
      return id >= 8 && id < 12;
    }
  };
  const classicNumberOfSometimesHints = (id) => {
    if (multiworld === "false") {
      return id >= 19 && id < 24;
    } else {
      return id >= 19 && id <= 28;
    }
  };
  const paths = hintsDisplay
    .filter((hint) => classicNumberOfPathHints(hint.id))
    .map((hint) => {
      return <PathHint key={hint.name} hint={hint} />;
    });
  const foolishes = hintsDisplay
    .filter((hint) => classicNumberOfFoolishHints(hint.id))
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
    .filter((hint) => classicNumberOfSometimesHints(hint.id))
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
        <h5 className="pink">Foolishes</h5>
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
