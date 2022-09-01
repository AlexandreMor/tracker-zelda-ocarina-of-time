import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";

function useJabuLogic() {
  const areas = useSelector(selectChecks);
  const jabuAccess = useAccess(areas[25].entrance);
  const explosive = useItems("explosive");
  const boomerang = useItems("boomerang");
  const slingshot = useItems("slingshot");
  const dispatch = useDispatch();

  useEffect(() => {
    if (jabuAccess && (explosive || boomerang || slingshot)) {
      dispatch(makeReachable(25, 0));
      dispatch(makeReachable(25, 1));
      dispatch(makeReachable(25, 2));
    } else {
      dispatch(makeUnreachable(25, 0));
      dispatch(makeUnreachable(25, 1));
      dispatch(makeUnreachable(25, 2));
    }
  }, [jabuAccess, explosive, boomerang, slingshot, dispatch]);

  useEffect(() => {
    if (jabuAccess && boomerang) {
      dispatch(makeReachable(25, 3));
      dispatch(makeReachable(25, 4));
      dispatch(makeReachable(25, 5));
      dispatch(makeReachable(25, 6));
      dispatch(makeReachable(25, 7));
      dispatch(makeReachable(25, 8));
    } else {
      dispatch(makeUnreachable(25, 3));
      dispatch(makeUnreachable(25, 4));
      dispatch(makeUnreachable(25, 5));
      dispatch(makeUnreachable(25, 6));
      dispatch(makeUnreachable(25, 7));
      dispatch(makeUnreachable(25, 8));
    }
  }, [jabuAccess, boomerang, dispatch]);
}

export default useJabuLogic;
