import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";

function useLakeHyliaLogic() {
  const scale = useItems("silver scale");
  const goldenScale = useItems("golden scale");
  const hookshot = useItems("hookshot");
  const longshot = useItems("longshot");
  const bow = useItems("bow");
  const ocarina = useItems("ocarina");
  const riverAccess = useAccess("zora river");
  const waterCleared = useAccess("Morpha defeated");
  const dispatch = useDispatch();
  useEffect(() => {
    if (scale) {
      dispatch(makeReachable(7, 1));
    } else {
      dispatch(makeUnreachable(7, 1));
    }
    if ((hookshot && ocarina) || riverAccess || waterCleared) {
      dispatch(makeReachable(7, 2));
      dispatch(makeReachable(7, 3));
    } else {
      dispatch(makeUnreachable(7, 2));
      dispatch(makeUnreachable(7, 3));
    }
    if (goldenScale) {
      dispatch(makeReachable(7, 4));
    } else {
      dispatch(makeUnreachable(7, 4));
    }
    if (((longshot && ocarina) || waterCleared) && bow) {
      dispatch(makeReachable(7, 5));
    } else {
      dispatch(makeUnreachable(7, 5));
    }
  }, [
    scale,
    goldenScale,
    hookshot,
    longshot,
    bow,
    ocarina,
    riverAccess,
    waterCleared,
    dispatch,
  ]);
}

export default useLakeHyliaLogic;
