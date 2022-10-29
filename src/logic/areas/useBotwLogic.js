import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import { selectChecks } from "../../utils/selectors";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useKeys from "../useKeys";
import useSongs from "../useSongs";

function useBotwLogic() {
  const areas = useSelector(selectChecks);
  const boomerang = useItems("boomerang");
  const explosive = useItems("explosive");
  const fireChild = useItems("fire child");
  const strength = useItems("strength 1");
  const botwAccess = useAccess(areas[15].entrance);
  const keys = useKeys("botw");
  const zeldasLullaby = useSongs("zelda");
  const dispatch = useDispatch();

  useEffect(() => {
    if (botwAccess) {
      dispatch(makeReachable(15, 1));
      dispatch(makeReachable(15, 2));
      dispatch(makeReachable(15, 3));
      dispatch(makeReachable(15, 8));
      dispatch(makeReachable(15, 9));
    } else {
      dispatch(makeUnreachable(15, 1));
      dispatch(makeUnreachable(15, 2));
      dispatch(makeUnreachable(15, 3));
      dispatch(makeUnreachable(15, 8));
      dispatch(makeUnreachable(15, 9));
    }
  }, [botwAccess, dispatch]);

  useEffect(() => {
    if (botwAccess && explosive) {
      dispatch(makeReachable(15, 0));
      dispatch(makeReachable(15, 6));
    } else {
      dispatch(makeUnreachable(15, 0));
      dispatch(makeUnreachable(15, 6));
    }
  }, [botwAccess, explosive, dispatch]);

  useEffect(() => {
    if (botwAccess && boomerang && keys >= 3) {
      dispatch(makeReachable(15, 4));
      dispatch(makeReachable(15, 5));
      dispatch(makeReachable(15, 15));
    } else {
      dispatch(makeUnreachable(15, 4));
      dispatch(makeUnreachable(15, 5));
      dispatch(makeUnreachable(15, 15));
    }
  }, [botwAccess, boomerang, keys, dispatch]);

  useEffect(() => {
    if (botwAccess && zeldasLullaby) {
      dispatch(makeReachable(15, 7));
      dispatch(makeReachable(15, 10));
      dispatch(makeReachable(15, 11));
      dispatch(makeReachable(15, 12));
    } else {
      dispatch(makeUnreachable(15, 7));
      dispatch(makeUnreachable(15, 10));
      dispatch(makeUnreachable(15, 11));
      dispatch(makeUnreachable(15, 12));
    }
  }, [botwAccess, zeldasLullaby, dispatch]);

  useEffect(() => {
    if (botwAccess && keys >= 3) {
      dispatch(makeReachable(15, 13));
      dispatch(makeReachable(15, 14));
    } else {
      dispatch(makeUnreachable(15, 13));
      dispatch(makeUnreachable(15, 14));
    }
  }, [botwAccess, keys, dispatch]);

  useEffect(() => {
    if (botwAccess && (((fireChild || keys >= 3) && strength) || explosive)) {
      dispatch(makeReachable(15, 16));
    } else {
      dispatch(makeUnreachable(15, 16));
    }
  }, [botwAccess, fireChild, keys, strength, explosive, dispatch]);
}

export default useBotwLogic;
