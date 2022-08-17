import { createAction, createReducer } from "@reduxjs/toolkit";
import { randomSpawnsState } from "../datas/randomSpawnsState";

export const setSpawn = createAction("randomSpawns/setSpawn", (id, value) => ({
  payload: { id, value },
}));

export default createReducer(randomSpawnsState, (builder) => {
  builder.addCase(setSpawn, (draft, action) => {
    draft[action.payload.id].location = action.payload.value;
  });
});
