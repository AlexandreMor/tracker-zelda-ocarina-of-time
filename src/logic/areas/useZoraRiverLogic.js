import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useZoraRiverLogic() {
  const hoverBoots = useItems("hover boots");
  const zeldasLullaby = useSongs("zelda");
  const epona = useSongs("epona");
  const saria = useSongs("saria");
  const sunSong = useSongs("sun song");
  const sot = useSongs("sot");
  const sos = useSongs("sos");
  const allChildSongs =
    zeldasLullaby && epona && saria && sunSong && sot && sos;
  const riverAccess = useAccess("zora river");
  const dispatch = useDispatch();

  useEffect(() => {
    if (riverAccess || hoverBoots) {
      dispatch(makeReachable(22, 0));
      dispatch(makeReachable(22, 6));
    } else {
      dispatch(makeUnreachable(22, 0));
      dispatch(makeUnreachable(22, 6));
    }
    if (sos) {
      dispatch(makeReachable(22, 1));
      dispatch(makeReachable(22, 2));
    } else {
      dispatch(makeUnreachable(22, 1));
      dispatch(makeUnreachable(22, 2));
    }
    if (sos && riverAccess) {
      dispatch(makeReachable(22, 3));
    } else {
      dispatch(makeUnreachable(22, 3));
    }
    if (riverAccess && allChildSongs) {
      dispatch(makeReachable(22, 4));
    } else {
      dispatch(makeUnreachable(22, 4));
    }
  }, [dispatch, riverAccess, allChildSongs, sos, hoverBoots]);
}

export default useZoraRiverLogic;
