import React from "react";
import { useDispatch } from "react-redux";
import { box, done, setPlayer, setRupee } from "../../features/checks";
import useSettings from "../../logic/useSettings";
import Input from "../Input";
import ItemsBox from "./ItemsBox";

function Check({ check, idArea }) {
  const multiworld = useSettings("multiworld");
  const shopsanity = useSettings("shopsanity");
  const dispatch = useDispatch();

  return (
    <li className={"check"}>
      <div
        className="input-item"
        onClick={() => dispatch(box(idArea, check.id))}
      >
        {check.item !== "" && (
          <img className="image-small" src={check.item} alt={check.name} />
        )}
        {check.box && <ItemsBox idCheck={check.id} idArea={idArea} />}
      </div>
      {multiworld === "true" && (
        <Input
          htmlClass="input-field"
          placeholder="pla"
          value={check.player}
          handleChange={(e) => {
            return dispatch(setPlayer(idArea, check.id, e.target.value));
          }}
        />
      )}
      {shopsanity === "true" && check.setting==="shopsanity" && (
        <Input
          htmlClass="input-field"
          placeholder="rup"
          value={check.rupee}
          handleChange={(e) => {
            return dispatch(setRupee(idArea, check.id, e.target.value));
          }}
        />
      )}
      <span
        style={check.reachable ? { color: "#51aa3a" } : { color: "#c3423d" }}
        className={check.checked ? "check-done" : "check-undone"}
        onClick={() => dispatch(done(idArea, check.id))}
      >
        {check.name}
      </span>
    </li>
  );
}

export default Check;
