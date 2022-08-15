import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";

function useIceCavernLogic() {
  const hookshot = useItems("hookshot");
  const ocarina = useItems("ocarina");
  const iceCavernAccess = useAccess("zora fountain");
  const dispatch = useDispatch();

  useEffect(() => {
    if (iceCavernAccess && ocarina) {
      dispatch(makeReachable(26, 0));
    } else {
      dispatch(makeUnreachable(26, 0));
    }
    if (iceCavernAccess && hookshot) {
      dispatch(makeReachable(26, 1));
      dispatch(makeReachable(26, 4));
      dispatch(makeReachable(26, 6));
    } else {
      dispatch(makeUnreachable(26, 1));
      dispatch(makeUnreachable(26, 4));
      dispatch(makeUnreachable(26, 6));
    }
    if (iceCavernAccess) {
      dispatch(makeReachable(26, 2));
      dispatch(makeReachable(26, 3));
      dispatch(makeReachable(26, 5));
      dispatch(makeReachable(26, 7));
    } else {
      dispatch(makeUnreachable(26, 2));
      dispatch(makeUnreachable(26, 3));
      dispatch(makeUnreachable(26, 5));
      dispatch(makeUnreachable(26, 7));
    }
  }, [iceCavernAccess, hookshot, ocarina, dispatch]);
}

export default useIceCavernLogic;
