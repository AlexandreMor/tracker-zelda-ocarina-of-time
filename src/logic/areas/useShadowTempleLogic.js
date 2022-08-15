import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";

function useShadowTempleLogic() {
  const keys = useKeys("shadow keys");
  const bossKey = useKeys("shadow boss key");
  const hookshot = useItems("hookshot");
  const longshot = useItems("longshot");
  const dins = useItems("fire child");
  const explosive = useItems("explosive");
  const bow = useItems("bow");
  const hoverBoots = useItems("hover boots");
  const strength = useItems("strength 1");
  const zeldasLullaby = useItems("zelda");
  const areas = useSelector(selectChecks);
  const shadowAccess = useAccess(areas[16].entrance);
  const dispatch = useDispatch();

  const bigRoomAccess = useCallback(() => {
    if (explosive && keys >= 1) {
      return true;
    } else {
      return false;
    }
  }, [explosive, keys]);

  const invisibleSpikesAccess = useCallback(() => {
    if (bigRoomAccess() && keys >= 2) {
      return true;
    } else {
      return false;
    }
  }, [bigRoomAccess, keys]);

  const windTunnelAccess = useCallback(() => {
    if (invisibleSpikesAccess() && keys >= 3 && hookshot) {
      return true;
    } else {
      return false;
    }
  }, [hookshot, keys, invisibleSpikesAccess]);

  const boatAccess = useCallback(() => {
    if (windTunnelAccess() && keys >= 4) {
      return true;
    } else {
      return false;
    }
  }, [keys, windTunnelAccess]);

  useEffect(() => {
    if (shadowAccess) {
      if (hookshot || hoverBoots) {
        dispatch(makeReachable(16, 0));
        dispatch(makeReachable(16, 1));
      } else {
        dispatch(makeUnreachable(16, 0));
        dispatch(makeUnreachable(16, 1));
      }
      if (hoverBoots) {
        dispatch(makeReachable(16, 2));
        dispatch(makeReachable(16, 3));
      } else {
        dispatch(makeUnreachable(16, 2));
        dispatch(makeUnreachable(16, 3));
      }
      if (bigRoomAccess()) {
        dispatch(makeReachable(16, 4));
        dispatch(makeReachable(16, 5));
        dispatch(makeReachable(16, 6));
        dispatch(makeReachable(16, 9));
      } else {
        dispatch(makeUnreachable(16, 4));
        dispatch(makeUnreachable(16, 5));
        dispatch(makeUnreachable(16, 6));
        dispatch(makeUnreachable(16, 9));
      }
      if (bigRoomAccess() && strength) {
        dispatch(makeReachable(16, 7));
        dispatch(makeReachable(16, 8));
      } else {
        dispatch(makeUnreachable(16, 7));
        dispatch(makeUnreachable(16, 8));
      }
      if (bigRoomAccess() && hookshot) {
        dispatch(makeReachable(16, 10));
      } else {
        dispatch(makeUnreachable(16, 10));
      }
      if (invisibleSpikesAccess()) {
        dispatch(makeReachable(16, 11));
      } else {
        dispatch(makeUnreachable(16, 11));
      }
      if (invisibleSpikesAccess() && hookshot && (explosive || strength)) {
        dispatch(makeReachable(16, 13));
      } else {
        dispatch(makeUnreachable(16, 13));
      }
      if (invisibleSpikesAccess() && hookshot) {
        dispatch(makeReachable(16, 12));
      } else {
        dispatch(makeUnreachable(16, 12));
      }
      if (windTunnelAccess()) {
        dispatch(makeReachable(16, 14));
        dispatch(makeReachable(16, 15));
      } else {
        dispatch(makeUnreachable(16, 14));
        dispatch(makeUnreachable(16, 15));
      }
      if (windTunnelAccess() && explosive) {
        dispatch(makeReachable(16, 16));
      } else {
        dispatch(makeUnreachable(16, 16));
      }
      if (boatAccess() && longshot) {
        dispatch(makeReachable(16, 17));
      } else {
        dispatch(makeUnreachable(16, 17));
      }
      if (boatAccess() && dins && zeldasLullaby) {
        dispatch(makeReachable(16, 18));
        dispatch(makeReachable(16, 19));
      } else {
        dispatch(makeUnreachable(16, 18));
        dispatch(makeUnreachable(16, 19));
      }
      if (boatAccess() && zeldasLullaby) {
        dispatch(makeReachable(16, 20));
        dispatch(makeReachable(16, 21));
      } else {
        dispatch(makeUnreachable(16, 20));
        dispatch(makeUnreachable(16, 21));
      }
      if (
        boatAccess() &&
        bossKey &&
        keys === 5 &&
        (bow || longshot) &&
        zeldasLullaby
      ) {
        dispatch(makeReachable(16, 22));
      } else {
        dispatch(makeUnreachable(16, 22));
      }
    } else {
      for (let i = 0; i < areas[16].checks.length; i++) {
        dispatch(makeUnreachable(16, i));
      }
    }
  }, [
    shadowAccess,
    bossKey,
    keys,
    hookshot,
    longshot,
    dins,
    explosive,
    bow,
    hoverBoots,
    strength,
    zeldasLullaby,
    areas,
    bigRoomAccess,
    windTunnelAccess,
    invisibleSpikesAccess,
    boatAccess,
    dispatch,
  ]);
}

export default useShadowTempleLogic;
