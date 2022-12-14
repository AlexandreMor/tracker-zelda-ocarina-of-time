import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useRandomSpawns from "../useRandomSpawns";
import useSongs from "../useSongs";

function useDMCLogic() {
  const hookshot = useItems("hookshot");
  const hammer = useItems("hammer");
  const explosive = useItems("explosive");
  const hoverBoots = useItems("hover boots");
  const longshot = useItems("longshot");
  const bolero = useSongs("bolero");
  const zeldasLullaby = useSongs("zelda");
  const lowerAccess = useAccess("dmc lower");
  const upperAccess = useAccess("dmc upper");
  const fairySpawn = useRandomSpawns("adult spawn");
  const childSpawn = useRandomSpawns("child spawn");
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      bolero ||
      (lowerAccess && (hookshot || hoverBoots)) ||
      (upperAccess && (longshot || hoverBoots))
    ) {
      dispatch(makeReachable(19, 0));
    } else {
      dispatch(makeUnreachable(19, 0));
    }
  }, [
    bolero,
    lowerAccess,
    upperAccess,
    hookshot,
    hoverBoots,
    longshot,
    dispatch,
  ]);

  useEffect(() => {
    if ((lowerAccess || upperAccess) && hoverBoots) {
      dispatch(makeReachable(19, 1));
    } else {
      dispatch(makeUnreachable(19, 1));
    }
  }, [lowerAccess, upperAccess, hoverBoots, dispatch]);

  useEffect(() => {
    if (lowerAccess || upperAccess) {
      dispatch(makeReachable(19, 2));
    } else {
      dispatch(makeUnreachable(19, 2));
    }
  }, [lowerAccess, upperAccess, dispatch]);

  useEffect(() => {
    if (
      (((lowerAccess || (upperAccess && (longshot || hoverBoots))) && hammer) ||
        fairySpawn === "cf" ||
        childSpawn === "cf") &&
      zeldasLullaby
    ) {
      dispatch(makeReachable(19, 3));
    } else {
      dispatch(makeUnreachable(19, 3));
    }
  }, [
    lowerAccess,
    upperAccess,
    hammer,
    fairySpawn,
    childSpawn,
    zeldasLullaby,
    longshot,
    hoverBoots,
    dispatch,
  ]);

  useEffect(() => {
    if ((lowerAccess || upperAccess) && (hammer || explosive)) {
      dispatch(makeReachable(19, 4));
    } else {
      dispatch(makeUnreachable(19, 4));
    }
  }, [lowerAccess, upperAccess, hammer, explosive, dispatch]);

  useEffect(() => {
    if ((lowerAccess || (upperAccess && (longshot || hoverBoots))) && hammer) {
      dispatch(makeReachable(19, 5));
      dispatch(makeReachable(19, 6));
      dispatch(makeReachable(19, 7));
    } else {
      dispatch(makeUnreachable(19, 5));
      dispatch(makeUnreachable(19, 6));
      dispatch(makeUnreachable(19, 7));
    }
  }, [lowerAccess, upperAccess, hammer, longshot, hoverBoots, dispatch]);
}

export default useDMCLogic;
