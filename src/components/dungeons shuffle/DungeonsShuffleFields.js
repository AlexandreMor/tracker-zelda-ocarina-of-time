import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEntrance } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import Input from "../Input";

function DungeonsShuffleFields() {
  const areas = useSelector(selectChecks);
  const dungeons = areas.filter(
    (area) => area.hasOwnProperty("entrance") && area.name !== "Ganon's Castle"
  );
  const dispatch = useDispatch();
  const handleChange = (e, idDungeon) => {
    dungeons
      .filter(
        (dungeon) => dungeon.name.toLowerCase().slice(0, 3) === e.target.value
      )
      .map((dungeon) => {
        return dispatch(setEntrance(idDungeon, dungeon.name.toLowerCase()));
      });
  };
  const dungeonsShuffleInputs = dungeons.map((dungeon) => {
    return (
      <li className="hint-name" key={dungeon.name}>
        <Input
          htmlClass="input-field-aside"
          placeholder="dun"
          value={dungeon.dungeonsShuffleInputs}
          handleChange={(e) => handleChange(e, dungeon.id)}
        />
        {dungeon.name}
      </li>
    );
  });

  return (
    <div>
      <ul className="field-list">
        <h5>Dungeons Shuffle</h5>
        {dungeonsShuffleInputs}
      </ul>
    </div>
  );
}
export default DungeonsShuffleFields;
