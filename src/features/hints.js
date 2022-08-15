import { createAction, createReducer } from "@reduxjs/toolkit";
import { hintsState } from "../datas/hintsState";

export const areaInput = createAction("hints/areaInput", (id, value) => ({
  payload: { id, value },
}));
export const areaName = createAction("hints/area", (id, value, idArea) => ({
  payload: { id, value, idArea },
}));
export const bossInput = createAction("hints/bossInput", (id, value) => ({
  payload: { id, value },
}));
export const bossName = createAction("hints/boss", (id, value) => ({
  payload: { id, value },
}));
export const playerInput = createAction("hints/playerInput", (id, value) => ({
  payload: { id, value },
}));
export const sometimesInput = createAction("hints/sometimesInput", (id, value) => ({
  payload: { id, value },
}));
export const sometimesName = createAction("hints/sometimesName", (id, checkName,idArea, idCheck) => ({
  payload: { id, checkName,idArea, idCheck },
}));
export const hintBox = createAction("hint/box", (id) => ({
  payload: { id },
}));

export default createReducer(hintsState, (builder) => {
  builder.addCase(areaInput, (draft, action) => {
    draft[action.payload.id].locationField = action.payload.value;
  });
  builder.addCase(areaName, (draft, action) => {
    draft[action.payload.id].location = action.payload.value;
    draft[action.payload.id].idArea = action.payload.idArea;
  });
  builder.addCase(bossInput, (draft, action) => {
    draft[action.payload.id].bossField = action.payload.value;
  });
  builder.addCase(bossName, (draft, action) => {
    draft[action.payload.id].boss = action.payload.value;
  });
  builder.addCase(playerInput, (draft, action) => {
    draft[action.payload.id].player = action.payload.value;
  });
  builder.addCase(sometimesInput, (draft, action) => {
    draft[action.payload.id].checkInput = action.payload.value;
  });
  builder.addCase(sometimesName, (draft, action) => {
    draft[action.payload.id].check = action.payload.checkName;
    draft[action.payload.id].idArea = action.payload.idArea;
    draft[action.payload.id].idCheck = action.payload.idCheck;
  });
  builder.addCase(hintBox, (draft, action) => {
    if (!draft[action.payload.id].box) {
      draft[action.payload.id].box = true;
    } else {
      draft[action.payload.id].box = false;
    }
  });
});
