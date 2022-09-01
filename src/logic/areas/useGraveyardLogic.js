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
  }, [zeldasLullaby, dispatch]);

  useEffect(() => {
    if (zeldasLullaby && fire) {
      dispatch(makeReachable(14, 7));
    } else {
      dispatch(makeUnreachable(14, 7));
    }
  }, [zeldasLullaby, fire, dispatch]);

  useEffect(() => {
    if (riverAccess) {
      dispatch(makeReachable(14, 3));
    } else {
      dispatch(makeUnreachable(14, 3));
    }
  }, [riverAccess, dispatch]);

  useEffect(() => {
    if (sunSong) {
      dispatch(makeReachable(14, 6));
    } else {
      dispatch(makeUnreachable(14, 6));
    }
  }, [sunSong, dispatch]);
}

export default useGraveyardLogic;
