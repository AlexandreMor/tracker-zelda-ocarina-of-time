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
    } else {
      dispatch(makeUnreachable(21, 0));
    }
  }, [fireTempleAccess, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && hammer) {
      dispatch(makeReachable(21, 1));
      dispatch(makeReachable(21, 2));
      dispatch(makeReachable(21, 3));
    } else {
      dispatch(makeUnreachable(21, 1));
      dispatch(makeUnreachable(21, 2));
      dispatch(makeUnreachable(21, 3));
    }
  }, [fireTempleAccess, hammer, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && keys >= 1) {
      dispatch(makeReachable(21, 4));
    } else {
      dispatch(makeUnreachable(21, 4));
    }
  }, [fireTempleAccess, keys, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && keys >= 1 && sot) {
      dispatch(makeReachable(21, 5));
    } else {
      dispatch(makeUnreachable(21, 5));
    }
  }, [fireTempleAccess, keys, sot, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && keys >= 1 && explosive) {
      dispatch(makeReachable(21, 6));
    } else {
      dispatch(makeUnreachable(21, 6));
    }
  }, [fireTempleAccess, keys, explosive, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && lowerMaze()) {
      dispatch(makeReachable(21, 7));
      dispatch(makeReachable(21, 9));
    } else {
      dispatch(makeUnreachable(21, 7));
      dispatch(makeUnreachable(21, 9));
    }
  }, [fireTempleAccess, lowerMaze, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && lowerMaze() && explosive) {
      dispatch(makeReachable(21, 8));
    } else {
      dispatch(makeUnreachable(21, 8));
    }
  }, [fireTempleAccess, lowerMaze, explosive, dispatch]);

  useEffect(() => {
    if (
      fireTempleAccess &&
      ((lowerMaze() && keys >= 4 && bow) || upperMaze())
    ) {
      dispatch(makeReachable(21, 10));
    } else {
      dispatch(makeUnreachable(21, 10));
    }
  }, [fireTempleAccess, lowerMaze, keys, bow, upperMaze, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && upperMaze()) {
      dispatch(makeReachable(21, 11));
    } else {
      dispatch(makeUnreachable(21, 11));
    }
  }, [fireTempleAccess, upperMaze, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && upperMaze() && explosive) {
      dispatch(makeReachable(21, 12));
    } else {
      dispatch(makeUnreachable(21, 12));
    }
  }, [fireTempleAccess, upperMaze, explosive, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && upperMaze() && hookshot && ocarina) {
      dispatch(makeReachable(21, 13));
      dispatch(makeReachable(21, 14));
      dispatch(makeReachable(21, 15));
    } else {
      dispatch(makeUnreachable(21, 13));
      dispatch(makeUnreachable(21, 14));
      dispatch(makeUnreachable(21, 15));
    }
  }, [fireTempleAccess, upperMaze, hookshot, ocarina, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && upperMaze() && keys >= 6) {
      dispatch(makeReachable(21, 16));
    } else {
      dispatch(makeUnreachable(21, 16));
    }
  }, [fireTempleAccess, upperMaze, keys, dispatch]);

  useEffect(() => {
    if (
      fireTempleAccess &&
      highestFloor() &&
      hammer &&
      (hoverBoots || explosive)
    ) {
      dispatch(makeReachable(21, 17));
    } else {
      dispatch(makeUnreachable(21, 17));
    }
  }, [fireTempleAccess, highestFloor, hammer, hoverBoots, explosive, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && highestFloor() && explosive) {
      dispatch(makeReachable(21, 18));
    } else {
      dispatch(makeUnreachable(21, 18));
    }
  }, [fireTempleAccess, highestFloor, explosive, dispatch]);

  useEffect(() => {
    if (fireTempleAccess && bossKey === 1 && hammer) {
      dispatch(makeReachable(21, 19));
    } else {
      dispatch(makeUnreachable(21, 19));
    }
  }, [fireTempleAccess, bossKey, hammer, dispatch]);
}

export default useFireTempleLogic;
