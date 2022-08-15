import { createAction, createReducer } from "@reduxjs/toolkit";
import { settingsState } from "../datas/settingsState";

export const setSetting = createAction("settings/set", (id, value) => ({
  payload: { id, value },
}));

export default createReducer(settingsState, (builder) => {
  builder.addCase(setSetting, (draft, action) => {
    draft[action.payload.id].value = action.payload.value;
  });
});
