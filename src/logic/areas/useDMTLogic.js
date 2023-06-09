import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useRandomSpawns from "../useRandomSpawns";
import useSongs from "../useSongs";

function useDMTLogic() {
  const explosive = useItems("explosive");
  const hammer = useItems("hammer");
  const canDeliverPrescription = useAccess("can finish Biggoron quest");
  const sos = useSongs("sos");
  const epona = useSongs("epona");
  const zelda = useSongs("zelda");
  const dispatch = useDispatch();
  const fairySpawnAdult = useRandomSpawns("adult spawn");
  const fairySpawnChild = useRandomSpawns("child spawn");

  useEffect(() => {
    if (explosive || hammer) {
      dispatch(makeReachable(17, 1));
    } else {
      dispatch(makeUnreachable(17, 1));
    }
  }, [explosive, hammer, dispatch]);

  useEffect(() => {
    if (sos) {
      dispatch(makeReachable(17, 2));
    } else {
      dispatch(makeUnreachable(17, 2));
    }
  }, [sos, dispatch]);

  useEffect(() => {
    if ((explosive || hammer || fairySpawnAdult === "tf" || fairySpawnChild === "tf") && zelda) {
      dispatch(makeReachable(17, 3));
    } else {
      dispatch(makeUnreachable(17, 3));
    }
  }, [explosive, hammer, fairySpawnAdult, fairySpawnChild, zelda, dispatch]);

  useEffect(() => {
    if (canDeliverPrescription) {
      dispatch(makeReachable(17, 4));
    } else {
      dispatch(makeUnreachable(17, 4));
    }
  }, [canDeliverPrescription, dispatch]);

  useEffect(() => {
    if ((explosive || hammer) && epona) {
      dispatch(makeReachable(17, 5));
    } else {
      dispatch(makeUnreachable(17, 5));
    }
  }, [explosive, hammer, epona, dispatch]);
}

export default useDMTLogic;
