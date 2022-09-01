import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useGerudosFortressLogic() {
  const hookshot = useItems("hookshot");
  const hoverBoots = useItems("hover boots");
  const bow = useItems("bow");
  const ocarina = useItems("ocarina");
  const gerudoCard = useItems("gerudo card");
  const epona = useSongs("epona");
  const fortressAccess = useAccess("gerudo valley after bridge");
  const dispatch = useDispatch();

  useEffect(() => {
    if (((hookshot && ocarina) || hoverBoots) && fortressAccess) {
      dispatch(makeReachable(28, 0));
    } else {
      dispatch(makeUnreachable(28, 0));
    }
  }, [hookshot, ocarina, hoverBoots, fortressAccess, dispatch]);

  useEffect(() => {
    if (bow && epona && fortressAccess && gerudoCard) {
      dispatch(makeReachable(28, 1));
      dispatch(makeReachable(28, 2));
    } else {
      dispatch(makeUnreachable(28, 1));
      dispatch(makeUnreachable(28, 2));
    }
  }, [bow, epona, fortressAccess, gerudoCard, dispatch]);
}

export default useGerudosFortressLogic;
