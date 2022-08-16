import React from "react";
import InputField from "./InputField";
import useSettings from "../../logic/useSettings";

function PathHint({ hint }) {
  const multiworld = useSettings("multiworld");
  return (
    <li key={hint.name} className="hint-name">
      {hint.name}
      <InputField
        htmlClass="input-field"
        hintField={hint.locationField}
        id={hint.id}
        fieldType="location"
        hint={hint.location}
      />{" "}
      to
      <InputField
        htmlClass="input-field"
        hintField={hint.bossField}
        id={hint.id}
        fieldType="boss"
        hint={hint.boss}
      />{" "}
      {multiworld === "true" && "for"}
      {multiworld === "true" && (
        <InputField
          htmlClass="input-field"
          hintField={hint.player}
          id={hint.id}
          fieldType="player"
        />
      )}
    </li>
  );
}

export default PathHint;
