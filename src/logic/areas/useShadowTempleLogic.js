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
    if (shadowAccess && (hookshot || hoverBoots)) {
      dispatch(makeReachable(16, 0));
      dispatch(makeReachable(16, 1));
    } else {
      dispatch(makeUnreachable(16, 0));
      dispatch(makeUnreachable(16, 1));
    }
  }, [shadowAccess, hookshot, hoverBoots, dispatch]);

  useEffect(() => {
    if (shadowAccess && hoverBoots) {
      dispatch(makeReachable(16, 2));
      dispatch(makeReachable(16, 3));
    } else {
      dispatch(makeUnreachable(16, 2));
      dispatch(makeUnreachable(16, 3));
    }
  }, [shadowAccess, hoverBoots, dispatch]);

  useEffect(() => {
    if (shadowAccess && bigRoomAccess()) {
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
  }, [shadowAccess, bigRoomAccess, dispatch]);

  useEffect(() => {
    if (shadowAccess && bigRoomAccess() && strength) {
      dispatch(makeReachable(16, 7));
      dispatch(makeReachable(16, 8));
    } else {
      dispatch(makeUnreachable(16, 7));
      dispatch(makeUnreachable(16, 8));
    }
  }, [shadowAccess, bigRoomAccess, strength, dispatch]);

  useEffect(() => {
    if (shadowAccess && bigRoomAccess() && hookshot) {
      dispatch(makeReachable(16, 10));
    } else {
      dispatch(makeUnreachable(16, 10));
    }
  }, [shadowAccess, bigRoomAccess, hookshot, dispatch]);

  useEffect(() => {
    if (shadowAccess && invisibleSpikesAccess()) {
      dispatch(makeReachable(16, 11));
    } else {
      dispatch(makeUnreachable(16, 11));
    }
  }, [shadowAccess, invisibleSpikesAccess, dispatch]);

  useEffect(() => {
    if (shadowAccess && hookshot && (explosive || strength)) {
      dispatch(makeReachable(16, 13));
    } else {
      dispatch(makeUnreachable(16, 13));
    }
  }, [shadowAccess, hookshot, explosive, strength, dispatch]);

  useEffect(() => {
    if (shadowAccess && invisibleSpikesAccess() && hookshot) {
      dispatch(makeReachable(16, 12));
    } else {
      dispatch(makeUnreachable(16, 12));
    }
  }, [shadowAccess, hookshot, invisibleSpikesAccess, dispatch]);

  useEffect(() => {
    if (shadowAccess && windTunnelAccess()) {
      dispatch(makeReachable(16, 14));
      dispatch(makeReachable(16, 15));
    } else {
      dispatch(makeUnreachable(16, 14));
      dispatch(makeUnreachable(16, 15));
    }
  }, [shadowAccess, windTunnelAccess, dispatch]);

  useEffect(() => {
    if (shadowAccess && windTunnelAccess() && explosive) {
      dispatch(makeReachable(16, 16));
    } else {
      dispatch(makeUnreachable(16, 16));
    }
  }, [shadowAccess, windTunnelAccess, explosive, dispatch]);

  useEffect(() => {
    if (shadowAccess && boatAccess() && longshot) {
      dispatch(makeReachable(16, 17));
    } else {
      dispatch(makeUnreachable(16, 17));
    }
  }, [shadowAccess, boatAccess, longshot, dispatch]);

  useEffect(() => {
    if (shadowAccess && boatAccess() && dins && zeldasLullaby) {
      dispatch(makeReachable(16, 18));
      dispatch(makeReachable(16, 19));
    } else {
      dispatch(makeUnreachable(16, 18));
      dispatch(makeUnreachable(16, 19));
    }
  }, [shadowAccess, boatAccess, dins, zeldasLullaby, dispatch]);

  useEffect(() => {
    if (shadowAccess && boatAccess() && zeldasLullaby) {
      dispatch(makeReachable(16, 20));
      dispatch(makeReachable(16, 21));
    } else {
      dispatch(makeUnreachable(16, 20));
      dispatch(makeUnreachable(16, 21));
    }
  }, [shadowAccess, boatAccess, zeldasLullaby, dispatch]);

  useEffect(() => {
    if (
      shadowAccess &&
      boatAccess() &&
      bossKey === 1 &&
      keys >= 5 &&
      (bow || longshot) &&
      zeldasLullaby
    ) {
      dispatch(makeReachable(16, 22));
    } else {
      dispatch(makeUnreachable(16, 22));
    }
  }, [
    shadowAccess,
    boatAccess,
    zeldasLullaby,
    bossKey,
    keys,
    bow,
    longshot,
    dispatch,
  ]);
}

export default useShadowTempleLogic;
