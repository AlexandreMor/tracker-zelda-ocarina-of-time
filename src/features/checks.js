import { createAction, createReducer } from "@reduxjs/toolkit";
import { areasState } from "../datas/areasState";

export const makeReachable = createAction(
  "check/makeReachable",
  (idArea, idCheck) => ({
    payload: { idArea, idCheck },
  })
);

export const makeUnreachable = createAction(
  "check/makeUnreachable",
  (idArea, idCheck) => ({
    payload: { idArea, idCheck },
  })
);
export const box = createAction("check/box", (idArea, idCheck) => ({
  payload: { idArea, idCheck },
}));
export const setItemCheck = createAction(
  "check/additem",
  (image, idArea, idCheck) => ({
    payload: { image, idArea, idCheck },
  })
);
export const done = createAction("check/done", (idArea, idCheck) => ({
  payload: { idArea, idCheck },
}));

export const makeVisible = createAction(
  "check/makeVisible",
  (idArea, idCheck) => ({
    payload: { idArea, idCheck },
  })
);

export const makeInvisible = createAction(
  "check/makeInvisible",
  (idArea, idCheck) => ({
    payload: { idArea, idCheck },
  })
);

export const addKey = createAction("check/addKey", (idArea) => ({
  payload: { idArea },
}));

export const removeKey = createAction("check/removeKey", (idArea) => ({
  payload: { idArea },
}));

export const addBossKey = createAction("check/addBossKey", (idArea) => ({
  payload: { idArea },
}));

export const removeBossKey = createAction("check/removeBossKey", (idArea) => ({
  payload: { idArea },
}));

export const setPlayer = createAction("check/setPlayer", (idArea, idCheck, value) => ({
  payload: { idArea, idCheck, value },
}));

export default createReducer(areasState, (builder) => {
  builder.addCase(makeReachable, (draft, action) => {
    draft[action.payload.idArea].checks[
      action.payload.idCheck
    ].reachable = true;
  });
  builder.addCase(makeUnreachable, (draft, action) => {
    draft[action.payload.idArea].checks[
      action.payload.idCheck
    ].reachable = false;
  });
  builder.addCase(box, (draft, action) => {
    if (!draft[action.payload.idArea].checks[action.payload.idCheck].box) {
      draft[action.payload.idArea].checks[action.payload.idCheck].box = true;
    } else {
      draft[action.payload.idArea].checks[action.payload.idCheck].box = false;
    }
  });
  builder.addCase(setItemCheck, (draft, action) => {
    draft[action.payload.idArea].checks[action.payload.idCheck].item =
      action.payload.image;
  });
  builder.addCase(done, (draft, action) => {
    if (!draft[action.payload.idArea].checks[action.payload.idCheck].checked) {
      draft[action.payload.idArea].checks[
        action.payload.idCheck
      ].checked = true;
    } else {
      draft[action.payload.idArea].checks[
        action.payload.idCheck
      ].checked = false;
    }
  });
  builder.addCase(makeVisible, (draft, action) => {
    draft[action.payload.idArea].checks[
      action.payload.idCheck
    ].visibility = true;
  });
  builder.addCase(makeInvisible, (draft, action) => {
    draft[action.payload.idArea].checks[
      action.payload.idCheck
    ].visibility = false;
  });
  builder.addCase(addKey, (draft, action) => {
    draft[action.payload.idArea].keysLeft += 1;
  });
  builder.addCase(removeKey, (draft, action) => {
    draft[action.payload.idArea].keysLeft -= 1;
  });
  builder.addCase(addBossKey, (draft, action) => {
    draft[action.payload.idArea].bossKeyLeft += 1;
  });
  builder.addCase(removeBossKey, (draft, action) => {
    draft[action.payload.idArea].bossKeyLeft -= 1;
  });
  builder.addCase(setPlayer, (draft, action) => {
    draft[action.payload.idArea].checks[
      action.payload.idCheck
    ].player = action.payload.value;
  });
});
