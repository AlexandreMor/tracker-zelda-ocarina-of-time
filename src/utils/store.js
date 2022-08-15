import { configureStore } from "@reduxjs/toolkit";
import checks from "../features/checks";
import hints from "../features/hints";
import items from "../features/items";
import settings from "../features/settings";

export const store = configureStore({
  reducer: {
    tracker: items,
    checks: checks,
    hints: hints,
    settings: settings,
  },
});
