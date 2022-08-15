import { createAction, createReducer } from "@reduxjs/toolkit";
import { trackerState } from "../datas/trackerState";

export const itemsIncrement = createAction(
  "items/increment",
  (element, id) => ({
    payload: { element, id },
  })
);

export const itemsDecrement = createAction(
  "items/decrement",
  (element, id) => ({
    payload: { element, id },
  })
);

export default createReducer(trackerState, (builder) => {
  builder.addCase(itemsIncrement, (draft, action) => {
    if (action.payload.element === "dungeons") {
      if (
        draft[2].dungeons[action.payload.id].number <=
        draft[2].dungeons[action.payload.id].limit
      ) {
        draft[2].dungeons[action.payload.id].number++;
      }
      if (
        draft[2].dungeons[action.payload.id].number >
        draft[2].dungeons[action.payload.id].limit
      ) {
        draft[2].dungeons[action.payload.id].number = 0;
      }
    }
    if (action.payload.element === "songs") {
      if (
        draft[1].songs[action.payload.id].number <=
        draft[1].songs[action.payload.id].limit
      ) {
        draft[1].songs[action.payload.id].number++;
      }
      if (
        draft[1].songs[action.payload.id].number >
        draft[1].songs[action.payload.id].limit
      ) {
        draft[1].songs[action.payload.id].number = 0;
      }
    }
    if (action.payload.element === "items") {
      if (
        draft[0].items[action.payload.id].number <=
        draft[0].items[action.payload.id].limit
      ) {
        draft[0].items[action.payload.id].number++;
      }
      if (
        draft[0].items[action.payload.id].number >
        draft[0].items[action.payload.id].limit
      ) {
        draft[0].items[action.payload.id].number = 0;
      }
    }
    if (action.payload.element === "skull") {
      if (
        draft[0].items[action.payload.id].number <=
        draft[0].items[action.payload.id].limit
      ) {
        draft[0].items[action.payload.id].number++;
      }
      if (
        draft[0].items[action.payload.id].number >
        draft[0].items[action.payload.id].limit
      ) {
        draft[0].items[action.payload.id].number = 0;
      }
    }
  });
  builder.addCase(
    itemsDecrement,
    (draft, action) => {
    if (action.payload.element === "dungeons") {
      if (
        draft[2].dungeons[action.payload.id].number > 0
      ) {
        draft[2].dungeons[action.payload.id].number--;
      }
    }
    if (action.payload.element === "songs") {
      if (
        draft[1].songs[action.payload.id].number > 0
      ) {
        draft[1].songs[action.payload.id].number--;
      }
    }
    if (action.payload.element === "items") {
      if (
        draft[0].items[action.payload.id].number > 0
      ) {
        draft[0].items[action.payload.id].number--;
      }
    }
    if (action.payload.element === "skull") {
      if (
        draft[0].items[action.payload.id].number > 0
      ) {
        draft[0].items[action.payload.id].number--;
      }
    }
  }
  );
});
