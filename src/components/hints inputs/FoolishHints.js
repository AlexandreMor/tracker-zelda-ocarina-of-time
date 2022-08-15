import React from "react";
import InputField from "./InputField";

function FoolishHints({ hint }) {
  return (
    <li key={hint.name} className="hint-name">
      {hint.name} <InputField hintField={hint.locationField} id={hint.id} fieldType="location" hint={hint.location} />
    </li>
  );
}

export default FoolishHints;
