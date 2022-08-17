import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useItems from "../useItems";
import useRandomSpawns from "../useRandomSpawns";
import useSongs from "../useSongs";

function useOutsideGanonsCastleLogic() {
  const strength3 = useItems("strength 3");
  const zeldasLullaby = useSongs("zelda");
  const dispatch = useDispatch();
  const ganonsFairySpawn = useRandomSpawns("adult spawn");

  useEffect(() => {
    if ((strength3 || ganonsFairySpawn === "gaf") && zeldasLullaby) {
      dispatch(makeReachable(12, 0));
    } else {
      dispatch(makeUnreachable(12, 0));
    }
  }, [strength3, zeldasLullaby, dispatch, ganonsFairySpawn]);
}

export default useOutsideGanonsCastleLogic;
