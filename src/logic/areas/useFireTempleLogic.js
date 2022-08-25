import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";
import useSongs from "../useSongs";

function useFireTempleLogic() {
  const areas = useSelector(selectChecks);
  const explosive = useItems("explosive");
  const hammer = useItems("hammer");
  const hookshot = useItems("hookshot");
  const bow = useItems("bow");
  const strength = useItems("strength 1");
  const ocarina = useItems("ocarina");
  const goronTunic = useItems("goron tunic");
  const hoverBoots = useItems("hover boots");
  const keys = useKeys("fire keys");
  const bossKey = useKeys("fire boss key");
  const sot = useSongs("sot");
  const fireTempleAccess = useAccess(areas[21].entrance);
  const dispatch = useDispatch();
  const lowerMaze = useCallback(() => {
    if (keys >= 3 && goronTunic && strength) {
      return true;
    } else {
      return false;
    }
  }, [keys, goronTunic, strength]);
  const upperMaze = useCallback(() => {
    if (keys >= 5 && lowerMaze()) {
      return true;
    } else {
      return false;
    }
  }, [keys, lowerMaze]);
  const highestFloor = useCallback(() => {
    if (keys >= 7 || (keys >= 6 && upperMaze() && hoverBoots && hammer)) {
      return true;
    } else {
      return false;
    }
  }, [keys, upperMaze, hoverBoots, hammer]);

  useEffect(() => {
    if (fireTempleAccess) {
      dispatch(makeReachable(21, 0));
      if (hammer) {
        dispatch(makeReachable(21, 1));
        dispatch(makeReachable(21, 2));
        dispatch(makeReachable(21, 3));
      } else {
        dispatch(makeUnreachable(21, 1));
        dispatch(makeUnreachable(21, 2));
        dispatch(makeUnreachable(21, 3));
      }
      if (keys >= 1) {
        dispatch(makeReachable(21, 4));
      } else {
        dispatch(makeUnreachable(21, 4));
      }
      if (keys >= 1 && sot) {
        dispatch(makeReachable(21, 5));
      } else {
        dispatch(makeUnreachable(21, 5));
      }
      if (keys >= 1 && explosive) {
        dispatch(makeReachable(21, 6));
      } else {
        dispatch(makeUnreachable(21, 6));
      }
      if (lowerMaze()) {
        dispatch(makeReachable(21, 7));
        dispatch(makeReachable(21, 9));
      } else {
        dispatch(makeUnreachable(21, 7));
        dispatch(makeUnreachable(21, 9));
      }
      if (lowerMaze() && explosive) {
        dispatch(makeReachable(21, 8));
      } else {
        dispatch(makeUnreachable(21, 8));
      }
      if ((lowerMaze() && keys >= 4 && bow) || upperMaze()) {
        dispatch(makeReachable(21, 10));
      } else {
        dispatch(makeUnreachable(21, 10));
      }
      if (upperMaze()) {
        dispatch(makeReachable(21, 11));
      } else {
        dispatch(makeUnreachable(21, 11));
      }
      if (upperMaze() && explosive) {
        dispatch(makeReachable(21, 12));
      } else {
        dispatch(makeUnreachable(21, 12));
      }
      if (upperMaze() && hookshot && ocarina) {
        dispatch(makeReachable(21, 13));
        dispatch(makeReachable(21, 14));
        dispatch(makeReachable(21, 15));
      } else {
        dispatch(makeUnreachable(21, 13));
        dispatch(makeUnreachable(21, 14));
        dispatch(makeUnreachable(21, 15));
      }
      if (upperMaze() && keys >= 6) {
        dispatch(makeReachable(21, 16));
      } else {
        dispatch(makeUnreachable(21, 16));
      }
      if (highestFloor() && hammer && (hoverBoots || explosive)) {
        dispatch(makeReachable(21, 17));
      } else {
        dispatch(makeUnreachable(21, 17));
      }
      if (highestFloor() && explosive) {
        dispatch(makeReachable(21, 18));
      } else {
        dispatch(makeUnreachable(21, 18));
      }
      if (bossKey === 1) {
        dispatch(makeReachable(21, 19));
      } else {
        dispatch(makeUnreachable(21, 19));
      }
    } else {
      for (let i = 0; i < areas[21].checks.length; i++) {
        dispatch(makeUnreachable(21, i));
      }
    }
  }, [
    fireTempleAccess,
    areas,
    hammer,
    dispatch,
    keys,
    lowerMaze,
    upperMaze,
    highestFloor,
    bossKey,
    hookshot,
    ocarina,
    explosive,
    hoverBoots,
    strength,
    goronTunic,
    bow,
    sot,
  ]);
}

export default useFireTempleLogic;
