import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useZoraFountainLogic() {
  const dispatch = useDispatch();
  const zoraFountainAccess = useAccess("zora fountain");
  const ironBoots = useItems("iron boots");
  const explosive = useItems("explosive");
  const zeldasLullaby = useSongs("zelda");

  useEffect(() => {
    if (zoraFountainAccess) {
      dispatch(makeReachable(24, 0));
    } else {
      dispatch(makeUnreachable(24, 0));
    }
    if (zoraFountainAccess && ironBoots) {
      dispatch(makeReachable(24, 1));
    } else {
      dispatch(makeUnreachable(24, 1));
    }
    if (zoraFountainAccess && explosive && zeldasLullaby) {
      dispatch(makeReachable(24, 2));
    }
  }, [zoraFountainAccess, ironBoots, explosive, zeldasLullaby, dispatch]);
}

export default useZoraFountainLogic;
