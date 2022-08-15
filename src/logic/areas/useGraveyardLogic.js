import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useGraveyardLogic() {
  const fire = useItems("fire");
  const zeldasLullaby = useSongs("zelda");
  const sunSong = useSongs("sun song");
  const riverAccess = useAccess("zora river");
  const dispatch = useDispatch();

  useEffect(() => {
    if (zeldasLullaby) {
      dispatch(makeReachable(14, 0));
    } else {
      dispatch(makeUnreachable(14, 0));
    }
    if (zeldasLullaby && fire) {
      dispatch(makeReachable(14, 7));
    } else {
      dispatch(makeUnreachable(14, 7));
    }
    if (riverAccess) {
      dispatch(makeReachable(14, 3));
    } else {
      dispatch(makeUnreachable(14, 3));
    }
    if (sunSong) {
      dispatch(makeReachable(14, 6));
    } else {
      dispatch(makeUnreachable(14, 6));
    }
  }, [fire, riverAccess, sunSong, zeldasLullaby, dispatch]);
}

export default useGraveyardLogic;
