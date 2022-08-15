import React from "react";
import InputField from "./InputField";
import { useSelector } from "react-redux";
import { selectSettings } from "../../utils/selectors";

function PathHint({ hint }) {
  const settings = useSelector(selectSettings);
  return (
    <li key={hint.name} className="hint-name">
      {hint.name}
      <InputField
        hintField={hint.locationField}
        id={hint.id}
        fieldType="location"
        hint={hint.location}
      />{" "}
      to
      <InputField
        hintField={hint.bossField}
        id={hint.id}
        fieldType="boss"
        hint={hint.boss}
      />{" "}
      {settings[0].value==="true" && "for" }
      {settings[0].value==="true" && (
        <InputField hintField={hint.player} id={hint.id} fieldType="player" />
      )}
    </li>
  );
}

export default PathHint;
