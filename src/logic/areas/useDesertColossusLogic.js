import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useDesertColossusLogic() {
  const desertColossusAccess = useAccess("desert colossus");
  const strength2 = useItems("strength 2");
  const riverAccess = useAccess("zora river");
  const explosive = useItems("explosive");
  const ocarina = useItems("ocarina");
  const zeldasLullaby = useSongs("zelda");
  const dispatch = useDispatch();

  useEffect(() => {
    if (ocarina && desertColossusAccess) {
      dispatch(makeReachable(30, 0));
    } else {
      dispatch(makeUnreachable(30, 0));
    }
  }, [ocarina, desertColossusAccess, dispatch]);

  useEffect(() => {
    if (desertColossusAccess && explosive && zeldasLullaby) {
      dispatch(makeReachable(30, 1));
    } else {
      dispatch(makeUnreachable(30, 1));
    }
  }, [explosive, desertColossusAccess, zeldasLullaby, dispatch]);

  useEffect(() => {
    if (desertColossusAccess && riverAccess) {
      dispatch(makeReachable(30, 2));
    } else {
      dispatch(makeUnreachable(30, 2));
    }
  }, [riverAccess, desertColossusAccess, dispatch]);

  useEffect(() => {
    if (desertColossusAccess && strength2) {
      dispatch(makeReachable(30, 3));
      dispatch(makeReachable(30, 4));
    } else {
      dispatch(makeUnreachable(30, 3));
      dispatch(makeUnreachable(30, 4));
    }
  }, [strength2, desertColossusAccess, dispatch]);
}

export default useDesertColossusLogic;
