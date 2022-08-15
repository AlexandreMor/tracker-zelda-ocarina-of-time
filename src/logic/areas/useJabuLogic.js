import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";

function useJabuLogic() {
  const areas = useSelector(selectChecks);
  const jabuAccess = useAccess("zora fountain");
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
    if (jabuAccess && boomerang) {
      for (let i = 3; i < 9; i++) {
        dispatch(makeReachable(25, i));
      }
    } else {
      for (let i = 3; i < areas[25].checks.length; i++) {
        dispatch(makeUnreachable(25, i));
      }
    }
  }, [jabuAccess, explosive, boomerang, slingshot,areas, dispatch]);
}

export default useJabuLogic;
