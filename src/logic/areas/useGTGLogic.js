import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";
import useSettings from "../useSettings";
import useSongs from "../useSongs";

function useGTGLogic() {
  const areas = useSelector(selectChecks);
  const explosive = useItems("explosive");
  const hammer = useItems("hammer");
  const hookshot = useItems("hookshot");
  const longshot = useItems("longshot");
  const hoverBoots = useItems("hover boots");
  const slingshot = useItems("slingshot");
  const bow = useItems("bow");
  const strength2 = useItems("strength 2");
  const ironBoots = useItems("iron boots");
  const kokiriSword = useItems("kokiri sword");
  const sot = useSongs("sot");
  const keys = useKeys("gtg");
  const gtgAccess = useAccess(areas[31].entrance);
  const dungeonsShuffle = useSettings("dungeons shuffle");
  const dispatch = useDispatch();

  const adultAccessOnly = useCallback(() => {
    if (areas[31].entrance === "forest" || areas[31].entrance === "water") {
      return true;
    } else {
      return false;
    }
  }, [areas]);

  const wolfosRoom = useCallback(() => {
    if (
      (dungeonsShuffle === "false" ||
        (!adultAccessOnly() && kokiriSword && dungeonsShuffle)) &&
      hookshot
    ) {
      return true;
    } else {
      return false;
    }
  }, [hookshot, dungeonsShuffle, adultAccessOnly, kokiriSword]);

  const canBeatBeamosDino = useCallback(() => {
    if (
      explosive &&
      (dungeonsShuffle === "false" ||
        (!adultAccessOnly() && kokiriSword && dungeonsShuffle))
    ) {
      return true;
    } else {
      return false;
    }
  }, [explosive, dungeonsShuffle, adultAccessOnly, kokiriSword]);

  useEffect(() => {
    if (gtgAccess) {
      if (
        bow ||
        (slingshot && !adultAccessOnly() && dungeonsShuffle === "true")
      ) {
        dispatch(makeReachable(31, 0));
        dispatch(makeReachable(31, 1));
      } else {
        dispatch(makeUnreachable(31, 0));
        dispatch(makeUnreachable(31, 1));
      }
      if (
        dungeonsShuffle === "false" ||
        (!adultAccessOnly() && kokiriSword && dungeonsShuffle === "true")
      ) {
        dispatch(makeReachable(31, 2));
      } else {
        dispatch(makeUnreachable(31, 2));
      }
      if (wolfosRoom()) {
        dispatch(makeReachable(31, 3));
      } else {
        dispatch(makeUnreachable(31, 3));
      }
      if (wolfosRoom() && strength2) {
        dispatch(makeReachable(31, 4));
        dispatch(makeReachable(31, 5));
        dispatch(makeReachable(31, 6));
        dispatch(makeReachable(31, 7));
      } else {
        dispatch(makeUnreachable(31, 4));
        dispatch(makeUnreachable(31, 5));
        dispatch(makeUnreachable(31, 6));
        dispatch(makeUnreachable(31, 7));
      }
      if (wolfosRoom() && bow) {
        dispatch(makeReachable(31, 8));
        dispatch(makeReachable(31, 9));
      } else {
        dispatch(makeUnreachable(31, 8));
        dispatch(makeUnreachable(31, 9));
      }
      if (
        wolfosRoom() ||
        (canBeatBeamosDino() && (hookshot || (longshot && hoverBoots)))
      ) {
        dispatch(makeReachable(31, 10));
      } else {
        dispatch(makeUnreachable(31, 10));
      }
      if (
        (wolfosRoom() ||
          (canBeatBeamosDino() && (hookshot || (longshot && hoverBoots)))) &&
        hammer
      ) {
        dispatch(makeReachable(31, 11));
      } else {
        dispatch(makeUnreachable(31, 11));
      }
      if (keys === 9 || (canBeatBeamosDino() && sot)) {
        dispatch(makeReachable(31, 12));
        dispatch(makeReachable(31, 13));
        dispatch(makeReachable(31, 14));
      } else {
        dispatch(makeUnreachable(31, 12));
        dispatch(makeUnreachable(31, 13));
        dispatch(makeUnreachable(31, 14));
      }
      if (sot && ironBoots && canBeatBeamosDino()) {
        dispatch(makeReachable(31, 15));
      } else {
        dispatch(makeUnreachable(31, 15));
      }
      if (canBeatBeamosDino()) {
        dispatch(makeReachable(31, 16));
      } else {
        dispatch(makeUnreachable(31, 16));
      }
      if (keys >= 3) {
        dispatch(makeReachable(31, 17));
      } else {
        dispatch(makeUnreachable(31, 17));
      }
      if (keys >= 4) {
        dispatch(makeReachable(31, 18));
      } else {
        dispatch(makeUnreachable(31, 18));
      }
      if (keys >= 6) {
        dispatch(makeReachable(31, 19));
      } else {
        dispatch(makeUnreachable(31, 19));
      }
      if (keys >= 7) {
        dispatch(makeReachable(31, 20));
      } else {
        dispatch(makeUnreachable(31, 20));
      }
      if (keys === 9) {
        dispatch(makeReachable(31, 21));
      } else {
        dispatch(makeUnreachable(31, 21));
      }
    }
  }, [
    bow,
    slingshot,
    adultAccessOnly,
    gtgAccess,
    dispatch,
    dungeonsShuffle,
    kokiriSword,
    strength2,
    wolfosRoom,
    canBeatBeamosDino,
    sot,
    ironBoots,
    hookshot,
    longshot,
    hoverBoots,
    keys,
    hammer,
  ]);
}

export default useGTGLogic;
