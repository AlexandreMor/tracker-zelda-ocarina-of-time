import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { box, done, setPlayer } from "../../features/checks";
import { selectSettings } from "../../utils/selectors";
import ItemsBox from "./ItemsBox";

function Check({ check, idArea }) {
  const dispatch = useDispatch();
  const settings = useSelector(selectSettings);
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
      <span
        style={check.reachable ? { color: "#51aa3a" } : { color: "#c3423d" }}
        className={check.checked ? "check-done" : "check-undone"}
        onClick={() => dispatch(done(idArea, check.id))}
      >
        {check.name}
      </span>
      {settings[0].value === "true" && (
        <input
          type="text"
          className="input-field"
          placeholder="pla"
          value={check.player}
          onChange={(e) => {
            return dispatch(setPlayer(idArea, check.id, e.target.value));
          }}
        />
      )}
    </li>
  );
}

export default Check;
