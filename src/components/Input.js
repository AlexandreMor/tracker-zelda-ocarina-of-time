import React from "react";

function Input({ htmlClass, placeholder, value, handleChange }) {
  return (
    <input
      type="text"
      className={htmlClass}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      maxLength="3"
    />
  );
}

export default Input;
