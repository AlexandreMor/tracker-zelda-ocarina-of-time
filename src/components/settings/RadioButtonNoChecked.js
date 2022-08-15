import React from "react";

function RadioButtonNoChecked({ settingId, data, name }) {
  return (
    <input type="radio" name={name} id={data.html} value={data.inputValue} />
  );
}

export default RadioButtonNoChecked;
