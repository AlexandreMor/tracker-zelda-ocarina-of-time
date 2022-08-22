import React from "react";
import ItemsBox from "../areas/ItemsBox";
import { useDispatch, useSelector } from "react-redux";
import InputField from "./InputField";
import { hintBox } from "../../features/hints";
import { selectChecks } from "../../utils/selectors";

function OtherHint({ hint }) {
  const areas = useSelector(selectChecks);
  const dispatch = useDispatch();

  return (
    <li key={hint.name} className="hint-name">
      {(hint.type === "always" ||
        (hint.type === "sometimes" && hint.check !== "")) && (
        <div className="input-item" onClick={() => dispatch(hintBox(hint.id))}>
          {areas[hint.idArea].checks[hint.idCheck].item !== "" && (
            <img
              className="image-small"
              src={areas[hint.idArea].checks[hint.idCheck].item}
              alt={hint.name}
            />
          )}
          {hint.box && <ItemsBox idArea={hint.idArea} idCheck={hint.idCheck} />}
        </div>
      )}
      {hint.name.includes("Sometimes") && (
        <InputField
          htmlClass="input-field-aside"
          hintField={hint.checkInput}
          hint={hint.check}
          id={hint.id}
          fieldType="sometimes"
        />
      )}
      <span>
        {hint.idArea !== 0 && hint.name.includes("Sometimes") && hint.check}
        {hint.type.includes("always") && hint.name}
      </span>
    </li>
  );
}

export default OtherHint;
