import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";
import useSettings from "../useSettings";
import useSongs from "../useSongs";

function useSpiritTempleLogic() {
  const areas = useSelector(selectChecks);
  const hookshot = useItems("hookshot");
  const longshot = useItems("longshot");
  const bow = useItems("bow");
  const slingshot = useItems("slingshot");
  const boomerang = useItems("boomerang");
  const strength2 = useItems("strength 2");
  const mirrorShield = useItems("mirror shield");
  const explosive = useItems("explosive");
  const fire = useItems("fire");
  const hoverBoots = useItems("hover boots");
  const keys = useKeys("spirit keys");
  const bossKey = useKeys("spirit boss key");
  const zeldasLullaby = useSongs("zelda");
  const sot = useSongs("sot");
  const requiem = useSongs("requiem");
  const bolero = useSongs("bolero");
  const spiritTempleAccess = useAccess(areas[32].entrance);
  const dungeonsShuffle = useSettings("dungeons shuffle");
  const dispatch = useDispatch();

  const spiritChildAccess = useCallback(() => {
    if (
      (areas[32].entrance === "spirit" && requiem) ||
      (areas[32].entrance === "fire" && bolero) ||
      (spiritTempleAccess && dungeonsShuffle==="true")
    ) {
      return true;
    } else {
      return false;
    }
  }, [spiritTempleAccess, requiem, dungeonsShuffle, areas, bolero]);

  const mainRoomAccess = useCallback(() => {
    if ((keys >= 1 && explosive) || (strength2 && keys >= 3)) {
      return true;
    } else {
      return false;
    }
  }, [keys, explosive, strength2]);

  const projectileAdult = useCallback(() => {
    if (hookshot || bow) {
      return true;
    } else {
      return false;
    }
  }, [bow, hookshot]);

  const projectileChild = useCallback(() => {
    if (slingshot || boomerang) {
      return true;
    } else {
      return false;
    }
  }, [boomerang, slingshot]);

  const spiritTempleClimb = useCallback(() => {
    if (
      (projectileChild() && keys >= 5 && spiritChildAccess()) ||
      (projectileAdult() && strength2 && keys >= 3 && spiritTempleAccess) ||
      (((projectileAdult() && projectileChild()) || explosive) &&
        keys === 1 &&
        spiritChildAccess() &&
        spiritTempleAccess)
    ) {
      return true;
    } else {
      return false;
    }
  }, [
    keys,
    strength2,
    explosive,
    projectileAdult,
    projectileChild,
    spiritTempleAccess,
    spiritChildAccess,
  ]);

  const beyondAnubisRoom = useCallback(() => {
    if (strength2 && spiritTempleAccess && explosive && keys >= 4) {
      return true;
    } else {
      return false;
    }
  }, [spiritTempleAccess, strength2, explosive, keys]);

  useEffect(() => {
    if ((boomerang || slingshot || explosive) && spiritChildAccess()) {
      dispatch(makeReachable(32, 0));
      dispatch(makeReachable(32, 1));
      dispatch(makeReachable(32, 2));
    } else {
      dispatch(makeUnreachable(32, 0));
      dispatch(makeUnreachable(32, 1));
      dispatch(makeUnreachable(32, 2));
    }
  }, [boomerang, slingshot, explosive, spiritChildAccess, dispatch]);

  useEffect(() => {
    if (spiritTempleClimb()) {
      dispatch(makeReachable(32, 3));
      dispatch(makeReachable(32, 4));
      dispatch(makeReachable(32, 5));
    } else {
      dispatch(makeUnreachable(32, 3));
      dispatch(makeUnreachable(32, 4));
      dispatch(makeUnreachable(32, 5));
    }
  }, [spiritTempleClimb, dispatch]);

  useEffect(() => {
    if (
      (keys >= 5 && explosive && spiritChildAccess()) ||
      (fire && keys >= 3 && strength2 && spiritTempleAccess) ||
      (keys >= 1 &&
        explosive &&
        fire &&
        spiritChildAccess() &&
        spiritTempleAccess)
    ) {
      dispatch(makeReachable(32, 6));
      dispatch(makeReachable(32, 7));
    } else {
      dispatch(makeUnreachable(32, 6));
      dispatch(makeUnreachable(32, 7));
    }
  }, [
    spiritChildAccess,
    keys,
    explosive,
    fire,
    strength2,
    spiritTempleAccess,
    dispatch,
  ]);

  useEffect(() => {
    if (
      mainRoomAccess() &&
      ((hookshot && spiritTempleAccess && keys >= 3) ||
        (boomerang && spiritChildAccess() && keys >= 5) ||
        (boomerang &&
          hookshot &&
          (explosive || (keys >= 2 && !dungeonsShuffle)) &&
          spiritChildAccess() &&
          spiritTempleAccess))
    ) {
      dispatch(makeReachable(32, 8));
    } else {
      dispatch(makeUnreachable(32, 8));
    }
  }, [
    mainRoomAccess,
    hookshot,
    spiritTempleAccess,
    keys,
    boomerang,
    spiritChildAccess,
    explosive,
    dungeonsShuffle,
    dispatch,
  ]);

  useEffect(() => {
    if (
      (keys >= 5 &&
        ((explosive && spiritChildAccess()) ||
          (strength2 && spiritTempleAccess))) ||
      (keys >= 3 && explosive && longshot && spiritTempleAccess)
    ) {
      dispatch(makeReachable(32, 9));
    } else {
      dispatch(makeUnreachable(32, 9));
    }
  }, [
    keys,
    explosive,
    spiritChildAccess,
    strength2,
    spiritTempleAccess,
    longshot,
    dispatch,
  ]);

  useEffect(() => {
    if (hookshot && zeldasLullaby && strength2 && spiritTempleAccess) {
      dispatch(makeReachable(32, 10));
    } else {
      dispatch(makeUnreachable(32, 10));
    }
  }, [hookshot, zeldasLullaby, strength2, spiritTempleAccess, dispatch]);

  useEffect(() => {
    if (strength2 && (bow || hookshot || explosive) && spiritTempleAccess) {
      dispatch(makeReachable(32, 12));
    } else {
      dispatch(makeUnreachable(32, 12));
    }
  }, [hookshot, explosive, strength2, bow, spiritTempleAccess, dispatch]);

  useEffect(() => {
    if (
      strength2 &&
      (bow || hookshot || explosive) &&
      sot &&
      spiritTempleAccess
    ) {
      dispatch(makeReachable(32, 11));
    } else {
      dispatch(makeUnreachable(32, 11));
    }
  }, [strength2, bow, hookshot, explosive, sot, spiritTempleAccess, dispatch]);

  useEffect(() => {
    if (strength2 && keys >= 3 && spiritTempleAccess) {
      dispatch(makeReachable(32, 13));
      dispatch(makeReachable(32, 14));
    } else {
      dispatch(makeUnreachable(32, 13));
      dispatch(makeUnreachable(32, 14));
    }
  }, [strength2, keys, spiritTempleAccess, dispatch]);

  useEffect(() => {
    if (
      strength2 &&
      keys >= 3 &&
      zeldasLullaby &&
      (hookshot || hoverBoots) &&
      spiritTempleAccess
    ) {
      dispatch(makeReachable(32, 15));
    } else {
      dispatch(makeUnreachable(32, 15));
    }
  }, [
    strength2,
    keys,
    zeldasLullaby,
    hookshot,
    hoverBoots,
    spiritTempleAccess,
    dispatch,
  ]);

  useEffect(() => {
    if (strength2 && keys >= 3 && zeldasLullaby && spiritTempleAccess) {
      dispatch(makeReachable(32, 16));
    } else {
      dispatch(makeUnreachable(32, 16));
    }
  }, [strength2, keys, zeldasLullaby, spiritTempleAccess, dispatch]);

  useEffect(() => {
    if (
      strength2 &&
      keys >= 3 &&
      (hookshot || hoverBoots) &&
      spiritTempleAccess
    ) {
      dispatch(makeReachable(32, 17));
    } else {
      dispatch(makeUnreachable(32, 17));
    }
  }, [strength2, keys, hookshot, hoverBoots, spiritTempleAccess, dispatch]);

  useEffect(() => {
    if (beyondAnubisRoom() && mirrorShield) {
      dispatch(makeReachable(32, 18));
    } else {
      dispatch(makeUnreachable(32, 18));
    }
  }, [beyondAnubisRoom, mirrorShield, spiritTempleAccess, dispatch]);

  useEffect(() => {
    if (beyondAnubisRoom()) {
      dispatch(makeReachable(32, 19));
      dispatch(makeReachable(32, 20));
      dispatch(makeReachable(32, 21));
    } else {
      dispatch(makeUnreachable(32, 19));
      dispatch(makeUnreachable(32, 20));
      dispatch(makeUnreachable(32, 21));
    }
  }, [beyondAnubisRoom, dispatch]);

  useEffect(() => {
    if (
      strength2 &&
      keys >= 5 &&
      zeldasLullaby &&
      bow &&
      hookshot &&
      spiritTempleAccess
    ) {
      dispatch(makeReachable(32, 22));
    } else {
      dispatch(makeUnreachable(32, 22));
    }
  }, [
    strength2,
    keys,
    zeldasLullaby,
    bow,
    hookshot,
    spiritTempleAccess,
    dispatch,
  ]);

  useEffect(() => {
    if (strength2 && keys >= 5 && mirrorShield && spiritTempleAccess) {
      dispatch(makeReachable(32, 23));
    } else {
      dispatch(makeUnreachable(32, 23));
    }
  }, [strength2, keys, spiritTempleAccess, mirrorShield, dispatch]);

  useEffect(() => {
    if (
      strength2 &&
      keys >= 5 &&
      bossKey &&
      hookshot &&
      mirrorShield &&
      spiritTempleAccess &&
      explosive
    ) {
      dispatch(makeReachable(32, 24));
    } else {
      dispatch(makeUnreachable(32, 24));
    }
  }, [
    strength2,
    keys,
    bossKey,
    hookshot,
    explosive,
    spiritTempleAccess,
    mirrorShield,
    dispatch,
  ]);
}

export default useSpiritTempleLogic;
