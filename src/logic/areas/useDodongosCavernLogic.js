import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSettings from "../useSettings";

function useDodongosCavernLogic() {
  const areas = useSelector(selectChecks);
  const dodongosCavernLogic = useAccess(areas[20].entrance);
  const explosive = useItems("explosive");
  const hammer = useItems("hammer");
  const strength = useItems("strength 1");
  const bow = useItems("bow");
  const slingshot = useItems("slingshot");
  const boomerang = useItems("boomerang");
  const hookshot = useItems("hookshot");
  const bombs = useItems("bomb bag");
  const dungeonsShuffle = useSettings("dungeons shuffle");
  const dispatch = useDispatch();
  const destroyWalls = useCallback(() => {
    if (explosive || strength || hammer) {
      return true;
    } else {
      return false;
    }
  }, [explosive, strength, hammer]);

  const afterStares = useCallback(() => {
    if (explosive || strength) {
      return true;
    } else {
      return false;
    }
  }, [explosive, strength]);

  const adultAccessOnly = useCallback(() => {
    if (areas[20].entrance === "forest" || areas[20].entrance === "water") {
      return true;
    } else {
      return false;
    }
  }, [areas]);

  useEffect(() => {
    if (dodongosCavernLogic) {
      dispatch(makeUnreachable(20, 3));
      if (hookshot && destroyWalls) {
        dispatch(makeReachable(20, 0));
      } else {
        dispatch(makeUnreachable(20, 0));
      }
      if (destroyWalls) {
        dispatch(makeReachable(20, 1));
        dispatch(makeReachable(20, 2));
        dispatch(makeReachable(20, 4));
        dispatch(makeReachable(20, 5));
      } else {
        dispatch(makeUnreachable(20, 1));
        dispatch(makeUnreachable(20, 2));
        dispatch(makeUnreachable(20, 4));
        dispatch(makeUnreachable(20, 5));
      }
      if (afterStares && hookshot) {
        dispatch(makeReachable(20, 6));
      } else {
        dispatch(makeUnreachable(20, 6));
      }
      if (
        afterStares &&
        (bow ||
          hookshot ||
          explosive ||
          ((!dungeonsShuffle || (dungeonsShuffle && !adultAccessOnly())) &&
            (slingshot || boomerang)))
      ) {
        dispatch(makeReachable(20, 7));
      } else {
        dispatch(makeUnreachable(20, 7));
      }
      if (afterStares) {
        dispatch(makeReachable(20, 8));
        dispatch(makeReachable(20, 9));
      } else {
        dispatch(makeUnreachable(20, 8));
        dispatch(makeUnreachable(20, 9));
      }
      if (afterStares && destroyWalls) {
        dispatch(makeReachable(20, 10));
        dispatch(makeReachable(20, 11));
        dispatch(makeReachable(20, 12));
      } else {
        dispatch(makeUnreachable(20, 10));
        dispatch(makeUnreachable(20, 11));
        dispatch(makeUnreachable(20, 12));
      }
      if (afterStares && bombs) {
        dispatch(makeReachable(20, 12));
        dispatch(makeReachable(20, 13));
        dispatch(makeReachable(20, 14));
      } else {
        dispatch(makeUnreachable(20, 12));
        dispatch(makeUnreachable(20, 13));
        dispatch(makeUnreachable(20, 14));
      }
    } else {
      for (let i = 0; i < areas[20].checks.length; i++) {
        dispatch(makeUnreachable(20, i));
      }
    }
  }, [
    dodongosCavernLogic,
    hookshot,
    destroyWalls,
    dispatch,
    afterStares,
    bombs,
    bow,
    slingshot,
    boomerang,
    explosive,
    areas,
    dungeonsShuffle,
    adultAccessOnly,
  ]);
}

export default useDodongosCavernLogic;
