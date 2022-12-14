import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";
import useSettings from "../useSettings";
import useSongs from "../useSongs";

function useWaterTempleLogic() {
  const areas = useSelector(selectChecks);
  const hookshot = useItems("hookshot");
  const longshot = useItems("longshot");
  const hoverBoots = useItems("hover boots");
  const strength = useItems("strength 1");
  const bow = useItems("bow");
  const slingshot = useItems("slingshot");
  const explosive = useItems("explosive");
  const goldenScale = useItems("golden scale");
  const ironBoots = useItems("iron boots");
  const dins = useItems("fire child");
  const faroresWind = useItems("farore");
  const boomerang = useItems("boomerang");
  const zoraTunic = useItems("zora tunic");
  const zeldasLullaby = useSongs("zelda");
  const sot = useSongs("sot");
  const keys = useKeys("water keys");
  const bossKey = useKeys("water boss key");
  const dungeonsShuffle = useSettings("dungeons shuffle");
  const enterWaterTemple = useAccess(areas[8].entrance);
  const dispatch = useDispatch();

  const waterDive = useCallback(() => {
    if ((longshot && goldenScale) || ironBoots) {
      return true;
    } else {
      return false;
    }
  }, [longshot, goldenScale, ironBoots]);

  const raiseWaterLevel = useCallback(() => {
    if (hookshot || hoverBoots || bow) {
      return true;
    } else {
      return false;
    }
  }, [hookshot, hoverBoots, bow]);

  const middleWaterLevel = useCallback(() => {
    if (
      (dins || bow || (keys >= 5 && hookshot)) &&
      zeldasLullaby &&
      waterDive()
    ) {
      return true;
    } else {
      return false;
    }
  }, [dins, bow, keys, hookshot, zeldasLullaby, waterDive]);

  const adultAccessOnly = useCallback(() => {
    if (areas[8].entrance === "forest" || areas[8].entrance === "water") {
      return true;
    } else {
      return false;
    }
  }, [areas]);

  const northBasement = useCallback(() => {
    if (keys >= 4 && longshot && (ironBoots || zeldasLullaby)) {
      return true;
    } else {
      return false;
    }
  }, [keys, longshot, ironBoots, zeldasLullaby]);

  const darklinkRoom = useCallback(() => {
    if (raiseWaterLevel() && keys >= 5 && hookshot) {
      return true;
    } else {
      return false;
    }
  }, [raiseWaterLevel, keys, hookshot]);

  useEffect(() => {
    if (
      enterWaterTemple &&
      (hookshot || hoverBoots) &&
      explosive &&
      zeldasLullaby &&
      (ironBoots || goldenScale)
    ) {
      dispatch(makeReachable(8, 0));
    } else {
      dispatch(makeUnreachable(8, 0));
    }
  }, [
    enterWaterTemple,
    hookshot,
    hoverBoots,
    explosive,
    zeldasLullaby,
    ironBoots,
    goldenScale,
    dispatch,
  ]);

  useEffect(() => {
    if (enterWaterTemple && (zeldasLullaby || ironBoots) && hookshot) {
      dispatch(makeReachable(8, 1));
    } else {
      dispatch(makeUnreachable(8, 1));
    }
  }, [enterWaterTemple, hookshot, zeldasLullaby, ironBoots, dispatch]);

  useEffect(() => {
    if (enterWaterTemple && raiseWaterLevel() && waterDive()) {
      dispatch(makeReachable(8, 2));
    } else {
      dispatch(makeUnreachable(8, 2));
    }
  }, [enterWaterTemple, raiseWaterLevel, waterDive, dispatch]);

  useEffect(() => {
    if (enterWaterTemple && middleWaterLevel() && explosive && waterDive()) {
      dispatch(makeReachable(8, 3));
    } else {
      dispatch(makeUnreachable(8, 3));
    }
  }, [enterWaterTemple, middleWaterLevel, waterDive, explosive, dispatch]);

  useEffect(() => {
    if (
      enterWaterTemple &&
      (bow || dins || (!adultAccessOnly && dungeonsShuffle)) &&
      zeldasLullaby &&
      waterDive()
    ) {
      dispatch(makeReachable(8, 4));
    } else {
      dispatch(makeUnreachable(8, 4));
    }
  }, [
    enterWaterTemple,
    bow,
    dins,
    adultAccessOnly,
    dungeonsShuffle,
    zeldasLullaby,
    waterDive,
    dispatch,
  ]);

  useEffect(() => {
    if (enterWaterTemple && northBasement()) {
      dispatch(makeReachable(8, 5));
    } else {
      dispatch(makeUnreachable(8, 5));
    }
  }, [enterWaterTemple, northBasement, dispatch]);

  useEffect(() => {
    if (
      enterWaterTemple &&
      keys >= 5 &&
      northBasement() &&
      ironBoots &&
      ((explosive && strength) || hoverBoots)
    ) {
      dispatch(makeReachable(8, 6));
    } else {
      dispatch(makeUnreachable(8, 6));
    }
  }, [
    enterWaterTemple,
    northBasement,
    ironBoots,
    explosive,
    strength,
    hoverBoots,
    keys,
    dispatch,
  ]);

  useEffect(() => {
    if (
      enterWaterTemple &&
      waterDive() &&
      strength &&
      zeldasLullaby &&
      ((bow && (hoverBoots || longshot)) ||
        (slingshot &&
          !adultAccessOnly &&
          dungeonsShuffle &&
          middleWaterLevel()))
    ) {
      dispatch(makeReachable(8, 7));
    } else {
      dispatch(makeUnreachable(8, 7));
    }
  }, [
    enterWaterTemple,
    waterDive,
    bow,
    longshot,
    slingshot,
    adultAccessOnly,
    dungeonsShuffle,
    middleWaterLevel,
    strength,
    hoverBoots,
    zeldasLullaby,
    dispatch,
  ]);

  useEffect(() => {
    if (
      enterWaterTemple &&
      waterDive() &&
      zeldasLullaby &&
      (((longshot || (hookshot && faroresWind)) &&
        (keys >= 5 || bow || dins)) ||
        (hookshot && ironBoots && (bow || dins)) ||
        (!adultAccessOnly() && boomerang && faroresWind && dungeonsShuffle))
    ) {
      dispatch(makeReachable(8, 8));
    } else {
      dispatch(makeUnreachable(8, 8));
    }
  }, [
    enterWaterTemple,
    waterDive,
    zeldasLullaby,
    longshot,
    hookshot,
    faroresWind,
    keys,
    bow,
    dins,
    ironBoots,
    adultAccessOnly,
    boomerang,
    dungeonsShuffle,
    dispatch,
  ]);

  useEffect(() => {
    if (
      enterWaterTemple &&
      middleWaterLevel() &&
      ironBoots &&
      zoraTunic &&
      hookshot &&
      (keys >= 5 || bow || dins)
    ) {
      dispatch(makeReachable(8, 9));
    } else {
      dispatch(makeUnreachable(8, 9));
    }
  }, [
    enterWaterTemple,
    middleWaterLevel,
    ironBoots,
    zoraTunic,
    hookshot,
    bow,
    dins,
    keys,
    dispatch,
  ]);

  useEffect(() => {
    if (enterWaterTemple && raiseWaterLevel() && keys >= 4 && longshot) {
      dispatch(makeReachable(8, 10));
    } else {
      dispatch(makeUnreachable(8, 10));
    }
  }, [enterWaterTemple, raiseWaterLevel, longshot, keys, dispatch]);

  useEffect(() => {
    if (enterWaterTemple && darklinkRoom()) {
      dispatch(makeReachable(8, 11));
    } else {
      dispatch(makeUnreachable(8, 11));
    }
  }, [enterWaterTemple, darklinkRoom, dispatch]);

  useEffect(() => {
    if (enterWaterTemple && darklinkRoom() && sot && ironBoots) {
      dispatch(makeReachable(8, 12));
    } else {
      dispatch(makeUnreachable(8, 12));
    }
  }, [enterWaterTemple, darklinkRoom, sot, ironBoots, dispatch]);

  useEffect(() => {
    if (enterWaterTemple && darklinkRoom() && sot && bow) {
      dispatch(makeReachable(8, 13));
    } else {
      dispatch(makeUnreachable(8, 13));
    }
  }, [enterWaterTemple, darklinkRoom, sot, bow, dispatch]);

  useEffect(() => {
    if (
      enterWaterTemple &&
      ((waterDive() && zeldasLullaby && strength && ironBoots && hookshot) ||
        (darklinkRoom() && sot && ironBoots && bow))
    ) {
      dispatch(makeReachable(8, 14));
    } else {
      dispatch(makeUnreachable(8, 14));
    }
  }, [
    enterWaterTemple,
    waterDive,
    zeldasLullaby,
    strength,
    ironBoots,
    hookshot,
    darklinkRoom,
    sot,
    bow,
    dispatch,
  ]);

  useEffect(() => {
    if (enterWaterTemple && raiseWaterLevel() && bossKey === 1 && longshot) {
      dispatch(makeReachable(8, 15));
    } else {
      dispatch(makeUnreachable(8, 15));
    }
  }, [enterWaterTemple, raiseWaterLevel, bossKey, longshot, dispatch]);
}

export default useWaterTempleLogic;
