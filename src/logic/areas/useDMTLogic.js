import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useDMTLogic() {
  const explosive = useItems("explosive");
  const hammer = useItems("hammer");
  const canDeliverPrescription = useAccess("can finish Biggoron quest");
  const sos = useSongs("sos");
  const epona = useSongs("epona");
  const zelda = useSongs("zelda");
  const dispatch = useDispatch();

  useEffect(() => {
    if (explosive || hammer) {
      dispatch(makeReachable(17, 1));
    } else {
      dispatch(makeUnreachable(17, 1));
    }
    if (sos) {
      dispatch(makeReachable(17, 2));
    } else {
      dispatch(makeUnreachable(17, 2));
    }
    if ((explosive || hammer) && zelda) {
      dispatch(makeReachable(17, 3));
    } else {
      dispatch(makeUnreachable(17, 3));
    }
    if (canDeliverPrescription) {
      dispatch(makeReachable(17, 4));
    } else {
      dispatch(makeUnreachable(17, 4));
    }
    if ((explosive || hammer) && epona) {
      dispatch(makeReachable(17, 5));
    } else {
      dispatch(makeUnreachable(17, 5));
    }
  }, [explosive, hammer, canDeliverPrescription, sos, epona, zelda, dispatch]);
}

export default useDMTLogic;
