import React from "react";

function RadioButton({ settingId, data, name }) {
  return (
    <input
      type="radio"
      name={name}
      id={data.html}
      value={data.inputValue}
      defaultChecked
    />
  );
}

export default RadioButton;
