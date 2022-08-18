import React from "react";
import InputField from "./InputField";

function FoolishHint({ hint }) {
  return (
    <li key={hint.name} className="hint-name">
      <InputField htmlClass="input-field-aside " hintField={hint.locationField} id={hint.id} fieldType="location" hint={hint.location} />
    </li>
  );
}

export default FoolishHint;
