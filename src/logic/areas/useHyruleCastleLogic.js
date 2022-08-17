import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useItems from "../useItems";
import useRandomSpawns from "../useRandomSpawns";
import useSongs from "../useSongs";

function useHyruleCastleLogic() {
  const explosive = useItems("explosive");
  const zeldasLullaby = useSongs("zelda");
  const dinsSpawn = useRandomSpawns("child spawn")
  const dispatch = useDispatch();

  useEffect(() => {
    if ((explosive || dinsSpawn === "din") && zeldasLullaby) {
      dispatch(makeReachable(11, 0));
    } else {
      dispatch(makeUnreachable(11, 0));
    }
  }, [explosive, zeldasLullaby, dispatch, dinsSpawn]);
}

export default useHyruleCastleLogic;
