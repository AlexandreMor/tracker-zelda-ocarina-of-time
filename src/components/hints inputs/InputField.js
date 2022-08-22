import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bosses, sometimesList } from "../../datas/hintsState";
import {
  areaInput,
  areaName,
  bossInput,
  bossName,
  playerInput,
  sometimesInput,
  sometimesName,
} from "../../features/hints";
import { selectChecks } from "../../utils/selectors";
import Input from "../Input";

function InputField({ hintField, id, fieldType, hint,htmlClass }) {
  const areas = useSelector(selectChecks);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (fieldType === "location") {
      return dispatch(areaInput(id, e.target.value));
    }
    if (fieldType === "boss") {
      return dispatch(bossInput(id, e.target.value));
    }
    if (fieldType === "player") {
      return dispatch(playerInput(id, e.target.value));
    }
    if (fieldType === "sometimes") {
      return dispatch(sometimesInput(id, e.target.value));
    }
  };
  useEffect(() => {
    if (fieldType === "location" && hintField !== "") {
      areas
        .filter((area) => area.short === hintField)
        .map((area) => {
          return dispatch(areaName(id, area.name, area.id));
        });
    }
    if (fieldType === "location" && hintField === "" && hint !== "") {
      dispatch(areaName(id, hintField, 0));
    }
    if (fieldType === "boss" && hintField === "" && hint !== "") {
      dispatch(bossName(id, hintField));
    }
    if (fieldType === "boss" && hintField !== "") {
      bosses
        .filter((boss) => boss.toLowerCase().slice(0, 3) === hintField)
        .map((boss) => {
          return dispatch(bossName(id, boss));
        });
    }
    if (fieldType === "sometimes" && hintField !== "") {
      sometimesList
        .filter((sometime) => sometime.short === hintField)
        .map((sometime) => {
          return dispatch(
            sometimesName(
              id,
              sometime.location,
              sometime.idArea,
              sometime.idCheck
            )
          );
        });
    }
    if (fieldType === "sometimes" && hintField === "" && hint !=="") {
      sometimesList
        .map((sometime) => {
          return dispatch(
            sometimesName(
              id,
              "",
              0,
              0
            )
          );
        });
    }
  }, [dispatch, id, fieldType, hintField, hint, areas]);

  return (
    <Input
      type="text"
      htmlClass={htmlClass}
      placeholder={fieldType}
      value={hintField}
      handleChange={(e) => handleChange(e)}
    />
  );
}

export default InputField;
