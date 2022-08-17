import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpawn } from "../../features/randomSpawns";
import { selectRandomSpawns } from "../../utils/selectors";
import Input from "../Input";

function RandomSpawns() {
  const randomSpawns = useSelector(selectRandomSpawns);
  const dispatch = useDispatch();
  const handleChange = (e, id) => {
    dispatch(setSpawn(id, e.target.value));
  };
  const randomFields = randomSpawns.map((field) => {
    return (
      <li key={field.name} className="hint-name">
        <Input
          htmlClass="input-field-aside"
          placeholder="spa"
          value={field.value}
          handleChange={(e) => handleChange(e, field.id)}
        />
        {field.name}
      </li>
    );
  });

  return (
    <div>
      <ul className="field-list">
      <h5>Random Spawns</h5>
        {randomFields}</ul>
    </div>
  );
}
export default RandomSpawns;
