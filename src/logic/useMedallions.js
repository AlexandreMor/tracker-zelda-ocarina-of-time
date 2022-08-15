import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectMedallionsStones } from "../utils/selectors";

function useMedallions(name) {
  const dungeons = useSelector(selectMedallionsStones);
  const medallionsLogic = useCallback(
    (id1, id2, id3) => {
      if (typeof id2 !== "undefined") {
        if (dungeons[id1].number === 1 && dungeons[id2].number === 1) {
          return true;
        } else {
          return false;
        }
      }
      if (typeof id2 !== "undefined" && typeof id3 !== "undefined") {
        if (
          dungeons[id1].number === 1 &&
          dungeons[id2].number === 1 &&
          dungeons[id3].number === 1
        ) {
          return true;
        } else {
          return false;
        }
      } else if (dungeons[id1].number === 1) {
        return true;
      } else {
        return false;
      }
    },
    [dungeons]
  );

    switch (name) {
      case "forest":
        return medallionsLogic(3);
      case "nocturne":
        return medallionsLogic(3, 4, 5);
      case "light arrows cutscene":
        return medallionsLogic(6, 7);
      default:
        return false;
    }
}

export default useMedallions;
