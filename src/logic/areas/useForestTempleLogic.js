import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";
import useSettings from "../useSettings";
import useSongs from "../useSongs";

function useForestTempleLogic() {
  const dispatch = useDispatch();
  const areas = useSelector(selectChecks);
  const forestTempleAccess = useAccess(areas[4].entrance);
  const keys = useKeys("forest keys");
  const bossKey = useKeys("forest boss key");
  const hookshot = useItems("hookshot");
  const bow = useItems("bow");
  const slingshot = useItems("slingshot");
  const boomerang = useItems("boomerang");
  const explosive = useItems("explosive");
  const magicChild = useItems("magic child");
  const hoverBoots = useItems("hover boots");
  const ironBoots = useItems("iron boots");
  const goldenScale = useItems("golden scale");
  const sot = useSongs("sot");
  const strength = useItems("strength 1");
  const dungeonsShuffle = useSettings("dungeons shuffle");
  const adultAccessOnly = useCallback(() => {
    if (
      (areas[4].entrance === "forest" ||
      areas[4].entrance === "water")
    ) {
      return true;
    } else {
      return false;
    }
  }, [areas]);

  const projectile = useCallback(() => {
    if (bow || (slingshot && !adultAccessOnly() && dungeonsShuffle==="true")) {
      return true;
    } else {
      return false;
    }
  }, [bow, slingshot, adultAccessOnly, dungeonsShuffle]);

  const NWOutdoors = useCallback(() => {
    if (
      (projectile() && (hookshot || ironBoots || goldenScale)) ||
      sot ||
      (hoverBoots && keys >= 1)
    ) {
      return true;
    } else {
      return false;
    }
  }, [hookshot, ironBoots, goldenScale, sot, keys, hoverBoots, projectile]);

  const NEOutdoors = useCallback(() => {
    if (bow || NWOutdoors()) {
      return true;
    } else {
      return false;
    }
  }, [bow, NWOutdoors]);
  const AfterBlockRoom = useCallback(() => {
    if (keys >= 3 && strength) {
      return true;
    }
    return false;
  }, [keys, strength]);

  useEffect(() => {
    if (forestTempleAccess) {
      dispatch(makeReachable(4, 1));
      dispatch(makeReachable(4, 3));
      if (hookshot || projectile() || boomerang || explosive || magicChild) {
        dispatch(makeReachable(4, 0));
      } else {
        dispatch(makeUnreachable(4, 0));
      }
      if (hookshot) {
        dispatch(makeReachable(4, 2));
      } else {
        dispatch(makeUnreachable(4, 2));
      }
      if (NEOutdoors() && hookshot) {
        dispatch(makeReachable(4, 4));
        dispatch(makeReachable(4, 5));
      } else {
        dispatch(makeUnreachable(4, 4));
        dispatch(makeUnreachable(4, 5));
      }
      if ((NEOutdoors() && hookshot) || NWOutdoors()) {
        dispatch(makeReachable(4, 6));
        dispatch(makeReachable(4, 7));
      } else {
        dispatch(makeUnreachable(4, 6));
        dispatch(makeUnreachable(4, 7));
      }
      if (keys >= 1 && projectile() && strength) {
        dispatch(makeReachable(4, 8));
      } else {
        dispatch(makeUnreachable(4, 8));
      }
      if (
        (keys >= 1 && hoverBoots) ||
        (keys >= 2 && strength && projectile())
      ) {
        dispatch(makeReachable(4, 9));
      } else {
        dispatch(makeUnreachable(4, 9));
      }
      if (
        ((keys >= 1 && hoverBoots) ||
          (keys >= 2 && strength && projectile())) &&
        hookshot
      ) {
        dispatch(makeReachable(4, 10));
      } else {
        dispatch(makeUnreachable(4, 10));
      }
      if (keys >= 2 && strength && projectile()) {
        dispatch(makeReachable(4, 11));
      } else {
        dispatch(makeUnreachable(4, 11));
      }
      if (AfterBlockRoom() && bow) {
        dispatch(makeReachable(4, 12));
        dispatch(makeReachable(4, 14));
      } else {
        dispatch(makeUnreachable(4, 12));
        dispatch(makeUnreachable(4, 14));
      }
      if (AfterBlockRoom()) {
        dispatch(makeReachable(4, 13));
      } else {
        dispatch(makeUnreachable(4, 13));
      }
      if (keys >= 5 && AfterBlockRoom()) {
        dispatch(makeReachable(4, 15));
        dispatch(makeReachable(4, 16));
      } else {
        dispatch(makeUnreachable(4, 15));
        dispatch(makeUnreachable(4, 16));
      }
      if (keys === 5 && AfterBlockRoom() && hookshot) {
        dispatch(makeReachable(4, 17));
      } else {
        dispatch(makeUnreachable(4, 17));
      }
      if (keys === 5 && AfterBlockRoom() && bossKey === 1 && (hookshot || bow)) {
        dispatch(makeReachable(4, 18));
      } else {
        dispatch(makeUnreachable(4, 18));
      }
    } else {
      for (let i = 0; i < areas[4].checks.length; i++) {
        dispatch(makeUnreachable(4, i));
      }
    }
  }, [
    forestTempleAccess,
    hookshot,
    bow,
    slingshot,
    boomerang,
    explosive,
    magicChild,
    hoverBoots,
    ironBoots,
    goldenScale,
    sot,
    keys,
    bossKey,
    strength,
    areas,
    dispatch,
    NEOutdoors,
    NWOutdoors,
    AfterBlockRoom,
    projectile,
  ]);
}

export default useForestTempleLogic;
