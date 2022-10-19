import React from "react";

function RadioButtonNoChecked({ data, name }) {
  return (
    <input type="radio" name={name} id={data.html} value={data.inputValue} />
  );
}

export default RadioButtonNoChecked;
