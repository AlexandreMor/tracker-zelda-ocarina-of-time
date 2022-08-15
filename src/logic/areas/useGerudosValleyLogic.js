import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useGerudosValleyLogic() {
  const carpentersAccess = useAccess("gerudo valley after bridge");
  const hammer = useItems("hammer");
  const sos = useSongs("sos");
  const epona = useSongs("epona");
  const dispatch = useDispatch();

  useEffect(() => {
    if (epona) {
      dispatch(makeReachable(27, 2));
    } else {
      dispatch(makeUnreachable(27, 2));
    }
    if (carpentersAccess && hammer) {
      dispatch(makeReachable(27, 3));
    } else {
      dispatch(makeUnreachable(27, 3));
    }
    if (carpentersAccess && sos) {
      dispatch(makeReachable(27, 4));
      dispatch(makeReachable(27, 5));
    } else {
      dispatch(makeUnreachable(27, 4));
      dispatch(makeUnreachable(27, 5));
    }
  }, [carpentersAccess, hammer, sos, epona, dispatch]);
}

export default useGerudosValleyLogic;
