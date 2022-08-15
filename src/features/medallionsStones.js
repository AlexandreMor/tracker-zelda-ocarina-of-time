import { createAction, createReducer } from "@reduxjs/toolkit";
import { medallionsStonesState } from "../datas/medallionsStonesState";

const setMedallionsStones = createAction("medallionsstones/set",(item) => ({
    payload: { item }
  }));
  const unsetMedallionsStones = createAction("medallionsstones/unset",(item) => ({
    payload: { item }
  }));

export default createReducer(medallionsStonesState, (builder) => {
    builder.addCase(setMedallionsStones, (draft, action) => [action.payload.item].number++);
    builder.addCase(unsetMedallionsStones, (draft, action) => [action.payload].number--);
  });