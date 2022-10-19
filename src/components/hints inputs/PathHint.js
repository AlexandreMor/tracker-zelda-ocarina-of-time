import React from "react";
import InputField from "./InputField";
import useSettings from "../../logic/useSettings";
import { useSelector } from "react-redux";
import { selectChecks } from "../../utils/selectors";
import HintImage from "./HintImage";

function PathHint({ hint }) {
  const presetHints = useSettings("preset hints");
  const areas = useSelector(selectChecks);
  return (
    <li key={hint.name} className="hint-name path">
      <InputField
        htmlClass="input-field-aside"
        hintField={hint.locationField}
        id={hint.id}
        fieldType="location"
        hint={hint.location}
      />{" "}
      <InputField
        htmlClass="input-field-aside"
        hintField={hint.bossField}
        id={hint.id}
        fieldType="boss"
        hint={hint.boss}
      />
      {presetHints === "mw" && (
        <InputField
          htmlClass="input-field"
          hintField={hint.player}
          id={hint.id}
          fieldType="player"
        />
      )}
      <div>
        <span className="lightblue margin1">{hint.location}</span>
        <span className="red margin1">
          {hint.boss} {" " && hint.player}
        </span>
        <ul className="hints-list">
          {hint.location !== "" &&
            areas
              .filter((area) => area.id === hint.idArea)
              .map((area) => {
                return area.checks
                  .filter(
                    (check) =>
                      check.item !== "" && !check.item.includes("sold_out") && !check.item.includes("prelude") && !check.item.includes("serenade")
                  )
                  .map((check) => {
                    return <HintImage key={check.name} check={check} />;
                  });
              })}
        </ul>
      </div>
    </li>
  );
}

export default PathHint;
