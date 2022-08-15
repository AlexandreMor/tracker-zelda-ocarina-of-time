import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useHyruleCastleLogic() {
  const explosive = useItems("explosive");
  const zeldasLullaby = useSongs("zelda");
  const dispatch = useDispatch();

  useEffect(() => {
    if (explosive && zeldasLullaby) {
      dispatch(makeReachable(11, 0));
    } else {
      dispatch(makeUnreachable(11, 0));
    }
  }, [explosive, zeldasLullaby, dispatch]);
}

export default useHyruleCastleLogic;
