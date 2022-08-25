import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useLostWoodsLogic() {
  const dispatch = useDispatch();
  const saria = useSongs("saria");
  const slingshot = useItems("slingshot");
  const explosive = useItems("explosive");
  const ocarina = useItems("ocarina");
  const scrubsGrottoAccess = useAccess("lw grotto & sfm grotto");

  useEffect(() => {
    if (saria) {
      dispatch(makeReachable(1, 0));
    } else {
      dispatch(makeUnreachable(1, 0));
    }
  }, [saria, dispatch]);

  useEffect(() => {
    if (slingshot) {
      dispatch(makeReachable(1, 2));
    } else {
      dispatch(makeUnreachable(1, 2));
    }
  }, [slingshot, dispatch]);

  useEffect(() => {
    if (ocarina) {
      dispatch(makeReachable(1, 3));
    } else {
      dispatch(makeUnreachable(1, 3));
    }
  }, [ocarina, dispatch]);

  useEffect(() => {
    if (explosive) {
      dispatch(makeReachable(1, 4));
    } else {
      dispatch(makeUnreachable(1, 4));
    }
  }, [explosive, dispatch]);

  useEffect(() => {
    if (scrubsGrottoAccess) {
      dispatch(makeReachable(1, 8));
      dispatch(makeReachable(1, 9));
    } else {
      dispatch(makeUnreachable(1, 8));
      dispatch(makeUnreachable(1, 9));
    }
  }, [scrubsGrottoAccess, dispatch]);
}

export default useLostWoodsLogic;
