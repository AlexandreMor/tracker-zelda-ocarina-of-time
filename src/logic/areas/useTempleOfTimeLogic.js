import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useMedallions from "../useMedallions";

function useTempleOfTimeLogic() {
  const prelude = useMedallions("forest");
  const lightArrowsCutscene = useMedallions("light arrows cutscene");
  const dispatch = useDispatch();

  useEffect(() => {
    if (prelude) {
      dispatch(makeReachable(10, 0));
    } else {
      dispatch(makeUnreachable(10, 0));
    }
  }, [prelude, dispatch]);

  useEffect(() => {
    if (lightArrowsCutscene) {
      dispatch(makeReachable(10, 1));
    } else {
      dispatch(makeUnreachable(10, 1));
    }
  }, [lightArrowsCutscene, dispatch]);
}

export default useTempleOfTimeLogic;
