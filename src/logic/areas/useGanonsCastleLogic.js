import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";
import useSongs from "../useSongs";

function useGanonsCastleLogic() {
  const ganonsCastleAccess = useAccess("ganon");
  const fireArrows = useItems("fire arrows");
  const magic = useItems("magic");
  const hookshot = useItems("hookshot");
  const longshot = useItems("longshot");
  const dins = useItems("dins");
  const hoverBoots = useItems("hover boots");
  const strength3 = useItems("strength 3");
  const explosive = useItems("explosive");
  const keys = useKeys("ganon");
  const zeldasLullaby = useSongs("zelda");
  const sot = useSongs("sot");
  const dispatch = useDispatch();

  useEffect(() => {
    if (ganonsCastleAccess) {
      dispatch(makeReachable(33, 0));
      dispatch(makeReachable(33, 1));
      dispatch(makeReachable(33, 2));
      dispatch(makeReachable(33, 3));
      dispatch(makeReachable(33, 4));
      dispatch(makeReachable(33, 5));
      dispatch(makeReachable(33, 6));
      dispatch(makeReachable(33, 19));
    } else {
      dispatch(makeUnreachable(33, 0));
      dispatch(makeUnreachable(33, 1));
      dispatch(makeUnreachable(33, 2));
      dispatch(makeUnreachable(33, 3));
      dispatch(makeUnreachable(33, 4));
      dispatch(makeUnreachable(33, 5));
      dispatch(makeUnreachable(33, 6));
      dispatch(makeUnreachable(33, 19));
    }
  }, [ganonsCastleAccess, dispatch]);

  useEffect(() => {
    if (
      ganonsCastleAccess &&
      ((fireArrows && magic) || hookshot || hoverBoots || sot)
    ) {
      dispatch(makeReachable(33, 7));
    } else {
      dispatch(makeUnreachable(33, 7));
    }
  }, [
    ganonsCastleAccess,
    fireArrows,
    magic,
    hookshot,
    hoverBoots,
    sot,
    dispatch,
  ]);

  useEffect(() => {
    if (
      ganonsCastleAccess &&
      ((fireArrows && magic) || (longshot && (dins || hoverBoots)))
    ) {
      dispatch(makeReachable(33, 8));
    } else {
      dispatch(makeUnreachable(33, 8));
    }
  }, [
    ganonsCastleAccess,
    fireArrows,
    magic,
    longshot,
    hoverBoots,
    dins,
    dispatch,
  ]);

  useEffect(() => {
    if (ganonsCastleAccess && strength3) {
      dispatch(makeReachable(33, 9));
      dispatch(makeReachable(33, 10));
      dispatch(makeReachable(33, 11));
      dispatch(makeReachable(33, 12));
      dispatch(makeReachable(33, 13));
      dispatch(makeReachable(33, 14));
      dispatch(makeReachable(33, 15));
    } else {
      dispatch(makeUnreachable(33, 9));
      dispatch(makeUnreachable(33, 10));
      dispatch(makeUnreachable(33, 11));
      dispatch(makeUnreachable(33, 12));
      dispatch(makeUnreachable(33, 13));
      dispatch(makeUnreachable(33, 14));
      dispatch(makeUnreachable(33, 15));
    }
  }, [ganonsCastleAccess, strength3, dispatch]);

  useEffect(() => {
    if (ganonsCastleAccess && keys >= 1 && zeldasLullaby && strength3) {
      dispatch(makeReachable(33, 16));
    } else {
      dispatch(makeUnreachable(33, 16));
    }
  }, [ganonsCastleAccess, keys, zeldasLullaby, strength3, dispatch]);

  useEffect(() => {
    if (ganonsCastleAccess && hookshot) {
      dispatch(makeReachable(33, 17));
    } else {
      dispatch(makeUnreachable(33, 17));
    }
  }, [ganonsCastleAccess, hookshot, dispatch]);

  useEffect(() => {
    if (ganonsCastleAccess && hookshot && explosive) {
      dispatch(makeReachable(33, 18));
    } else {
      dispatch(makeUnreachable(33, 18));
    }
  }, [ganonsCastleAccess, hookshot, explosive, dispatch]);
}

export default useGanonsCastleLogic;
