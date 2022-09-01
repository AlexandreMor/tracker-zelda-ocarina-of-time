import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useRanchLogic() {
  const epona = useSongs("epona");
  const ocarina = useItems("ocarina");
  const dispatch = useDispatch();

  useEffect(() => {
    if (ocarina) {
      dispatch(makeReachable(6, 0));
    } else {
      dispatch(makeUnreachable(6, 0));
    }
  }, [ocarina, dispatch]);

  useEffect(() => {
    if (epona) {
      dispatch(makeReachable(6, 1));
      dispatch(makeReachable(6, 2));
      dispatch(makeReachable(6, 5));
      dispatch(makeReachable(6, 6));
    } else {
      dispatch(makeUnreachable(6, 1));
      dispatch(makeUnreachable(6, 2));
      dispatch(makeUnreachable(6, 5));
      dispatch(makeUnreachable(6, 6));
    }
  }, [epona, dispatch]);
}

export default useRanchLogic;
