import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useSongs from "../useSongs";

function useKokiriForestLogic() {
  const dispatch = useDispatch();
  const sos = useSongs("sos");
  const epona = useSongs("epona");

  useEffect(() => {
    if (sos) {
      dispatch(makeReachable(0, 5));
    } else {
      dispatch(makeUnreachable(0, 5));
    }
  }, [sos, dispatch]);

  useEffect(() => {
    if (epona) {
      dispatch(makeReachable(0, 6));
    } else {
      dispatch(makeUnreachable(0, 6));
    }
  }, [epona, dispatch]);
}

export default useKokiriForestLogic;
