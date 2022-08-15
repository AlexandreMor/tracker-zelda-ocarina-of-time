import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useSFMLogic() {
  const dispatch = useDispatch();
  const ocarina = useItems("ocarina");
  const minuetAccess = useAccess("minuet");
  const wolfosGrottoAccess = useAccess("lw grotto & sfm grotto");
  const sos = useSongs("sos");

  useEffect(() => {
    if (ocarina) {
      dispatch(makeReachable(2, 0));
    } else {
      dispatch(makeUnreachable(2, 0));
    }
  }, [ocarina, dispatch]);

  useEffect(() => {
    if (ocarina && minuetAccess) {
      dispatch(makeReachable(2, 1));
    } else {
      dispatch(makeUnreachable(2, 1));
    }
  }, [minuetAccess, ocarina, dispatch]);

  useEffect(() => {
    if (wolfosGrottoAccess) {
      dispatch(makeReachable(2, 2));
    } else {
      dispatch(makeUnreachable(2, 2));
    }
  }, [wolfosGrottoAccess, dispatch]);

  useEffect(() => {
    if (minuetAccess && sos) {
      dispatch(makeReachable(2, 3));
      dispatch(makeReachable(2, 4));
    } else {
      dispatch(makeUnreachable(2, 3));
      dispatch(makeUnreachable(2, 4));
    }
  }, [minuetAccess, sos, dispatch]);
}

export default useSFMLogic;
