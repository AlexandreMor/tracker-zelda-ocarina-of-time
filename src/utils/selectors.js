export const selectItems = (state) => {
  return state.tracker[0].items;
};

export const selectMedallionsStones = (state) => {
  return state.tracker[2].dungeons;
};

export const selectSongs = (state) => {
  return state.tracker[1].songs;
};

export const selectChecks = (state) => {
  return state.checks;
};

export const selectHints = (state) => {
  return state.hints;
};

export const selectSettings = (state) => {
  return state.settings;
};

export const selectRandomSpawns = (state) => {
  return state.randomSpawns;
};