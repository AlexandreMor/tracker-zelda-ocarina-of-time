import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";

function useDekuLogic() {
  const dispatch = useDispatch();
  const areas = useSelector(selectChecks);
  const dekuAccess = useAccess(areas[3].entrance);
  const boomerang = useItems("boomerang");
  const slingshot = useItems("slingshot");
  const explosive = useItems("explosive");

  useEffect(() => {
    if (dekuAccess) {
      for (let i=0; i<9; i++) {
        dispatch(makeReachable(3, i));
      }
    } else {
      for (let i=0; i<9; i++) {
        dispatch(makeUnreachable(3, i));
      }
    }
  }, [dekuAccess, dispatch]);

  useEffect(() => {
    if (dekuAccess && boomerang && explosive) {
      dispatch(makeReachable(3, 9));
    } else {
      dispatch(makeUnreachable(3, 9));
    }
  }, [dekuAccess, boomerang, dispatch, explosive]);

  useEffect(() => {
    if (dekuAccess && slingshot) {
      dispatch(makeReachable(3, 10));
    } else {
      dispatch(makeUnreachable(3, 10));
    }
  }, [dekuAccess, slingshot, dispatch]);
}

export default useDekuLogic;
