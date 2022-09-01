import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";

function useIceCavernLogic() {
  const areas = useSelector(selectChecks);
  const hookshot = useItems("hookshot");
  const ocarina = useItems("ocarina");
  const iceCavernAccess = useAccess(areas[26].entrance);
  const emptyBottle = useItems("empty bottle");
  const dispatch = useDispatch();

  useEffect(() => {
    if (iceCavernAccess && ocarina && emptyBottle) {
      dispatch(makeReachable(26, 0));
    } else {
      dispatch(makeUnreachable(26, 0));
    }
  }, [iceCavernAccess, ocarina, emptyBottle, dispatch]);

  useEffect(() => {
    if (iceCavernAccess && hookshot) {
      dispatch(makeReachable(26, 1));
    } else {
      dispatch(makeUnreachable(26, 1));
    }
  }, [iceCavernAccess, hookshot, dispatch]);

  useEffect(() => {
    if (iceCavernAccess && hookshot && emptyBottle) {
      dispatch(makeReachable(26, 4));
      dispatch(makeReachable(26, 6));
    } else {
      dispatch(makeUnreachable(26, 4));
      dispatch(makeUnreachable(26, 6));
    }
  }, [iceCavernAccess, emptyBottle, hookshot, dispatch]);

  useEffect(() => {
    if (iceCavernAccess && emptyBottle) {
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
  }, [iceCavernAccess, emptyBottle, dispatch]);
}

export default useIceCavernLogic;
