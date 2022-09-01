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
  }, [ocarina, dispatch]);

  useEffect(() => {
    if (ocarina && nocturneAccess) {
      dispatch(makeReachable(13, 1));
    } else {
      dispatch(makeUnreachable(13, 1));
    }
  }, [ocarina, nocturneAccess, dispatch]);

  useEffect(() => {
    if (bow) {
      dispatch(makeReachable(13, 6));
    } else {
      dispatch(makeUnreachable(13, 6));
    }
  }, [bow, dispatch]);

  useEffect(() => {
    if (epona) {
      dispatch(makeReachable(13, 9));
    } else {
      dispatch(makeUnreachable(13, 9));
    }
  }, [epona, dispatch]);

  useEffect(() => {
    if (explosive || hammer) {
      dispatch(makeReachable(13, 10));
    } else {
      dispatch(makeUnreachable(13, 10));
    }
  }, [explosive, hammer, dispatch]);

  useEffect(() => {
    if (tenSkulls) {
      dispatch(makeReachable(13, 11));
    } else {
      dispatch(makeUnreachable(13, 11));
    }
  }, [tenSkulls, dispatch]);

  useEffect(() => {
    if (twentySkulls) {
      dispatch(makeReachable(13, 12));
    } else {
      dispatch(makeUnreachable(13, 12));
    }
  }, [twentySkulls, dispatch]);

  useEffect(() => {
    if (thirtySkulls) {
      dispatch(makeReachable(13, 13));
    } else {
      dispatch(makeUnreachable(13, 13));
    }
  }, [thirtySkulls, dispatch]);

  useEffect(() => {
    if (fortySkulls) {
      dispatch(makeReachable(13, 14));
    } else {
      dispatch(makeUnreachable(13, 14));
    }
  }, [fortySkulls, dispatch]);

  useEffect(() => {
    if (fiftySkulls) {
      dispatch(makeReachable(13, 15));
    } else {
      dispatch(makeUnreachable(13, 15));
    }
  }, [fiftySkulls, dispatch]);
}

export default useKakarikoLogic;
