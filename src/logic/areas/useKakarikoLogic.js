import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useItems from "../useItems";
import useMedallions from "../useMedallions";
import useSongs from "../useSongs";

function useKakarikoLogic() {
  const ocarina = useItems("ocarina");
  const hammer = useItems("hammer");
  const explosive = useItems("explosive");
  const bow = useItems("bow");
  const epona = useSongs("epona");
  const nocturneAccess = useMedallions("nocturne");
  const tenSkulls = useItems("10 tokens");
  const twentySkulls = useItems("20 tokens");
  const thirtySkulls = useItems("30 tokens");
  const fortySkulls = useItems("40 tokens");
  const fiftySkulls = useItems("50 tokens");
  const dispatch = useDispatch();

  useEffect(() => {
    if (ocarina) {
      dispatch(makeReachable(13, 0));
    } else {
      dispatch(makeUnreachable(13, 0));
    }
    if (ocarina && nocturneAccess) {
      dispatch(makeReachable(13, 1));
    } else {
      dispatch(makeUnreachable(13, 1));
    }
    if (bow) {
      dispatch(makeReachable(13, 6));
    } else {
      dispatch(makeUnreachable(13, 6));
    }
    if (epona) {
      dispatch(makeReachable(13, 9));
    } else {
      dispatch(makeUnreachable(13, 9));
    }
    if (explosive || hammer) {
      dispatch(makeReachable(13, 10));
    } else {
      dispatch(makeUnreachable(13, 10));
    }
    if (tenSkulls) {
      dispatch(makeReachable(13, 11));
    } else {
      dispatch(makeUnreachable(13, 11));
    }
    if (twentySkulls) {
      dispatch(makeReachable(13, 12));
    } else {
      dispatch(makeUnreachable(13, 12));
    }
    if (thirtySkulls) {
      dispatch(makeReachable(13, 13));
    } else {
      dispatch(makeUnreachable(13, 13));
    }
    if (fortySkulls) {
      dispatch(makeReachable(13, 14));
    } else {
      dispatch(makeUnreachable(13, 14));
    }
    if (fiftySkulls) {
      dispatch(makeReachable(13, 15));
    } else {
      dispatch(makeUnreachable(13, 15));
    }
  }, [
    ocarina,
    nocturneAccess,
    bow,
    epona,
    explosive,
    hammer,
    tenSkulls,
    twentySkulls,
    thirtySkulls,
    fortySkulls,
    fiftySkulls,
    dispatch,
  ]);
}

export default useKakarikoLogic;
