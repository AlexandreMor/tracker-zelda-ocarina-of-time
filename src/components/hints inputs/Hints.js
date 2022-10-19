import React from "react";
import OtherHint from "./OtherHint";
import FoolishHint from "./FoolishHint";
import PathHint from "./PathHint";
import { useSelector } from "react-redux";
import { selectHints } from "../../utils/selectors";
import useSettings from "../../logic/useSettings";

export default function Hints() {
  const hintsDisplay = useSelector(selectHints);
  const presetHints = useSettings("preset hints");
  const classicNumberOfPathHints = (id) => {
    if (presetHints === "classic" || presetHints === "s6") {
      return id < 5;
    }
    if (presetHints === "mw") {
      return id < 8;
    }
  };
  const classicNumberOfFoolishHints = (id) => {
    if (presetHints === "classic") {
      return id >= 8 && id < 11;
    }
    if (presetHints === "mw") {
      return id >= 8 && id < 12;
    }
    if (presetHints === "s6") {
      return null;
    }
  };
  const classicNumberOfSometimesHints = (id) => {
    if (presetHints === "classic") {
      return id >= 20 && id < 25;
    }
    if (presetHints === "mw") {
      return id >= 20 && id <= 29;
    }
    if (presetHints === "s6") {
      return id >= 20 && id < 27;
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
      {presetHints !== "s6" && (
        <ul className="field-list">
          <h5 className="pink">Foolishes</h5>
          {foolishes}
        </ul>
      )}
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
