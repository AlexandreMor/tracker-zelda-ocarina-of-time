import React from "react";
import InputField from "./InputField";

function FoolishHint({ hint }) {
  return (
    <li key={hint.name} className="hint-name">
      <InputField
        htmlClass="input-field-aside "
        hintField={hint.locationField}
        id={hint.id}
        fieldType="location"
        hint={hint.location}
      />
      <span className="pink">{hint.location !== "" && hint.location}</span>
    </li>
  );
}

export default FoolishHint;
