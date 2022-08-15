import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useItems from "../useItems";
import useSongs from "../useSongs";
import useStones from "../useStones";

function useHyruleFieldLogic() {
  const threeStones = useStones("3 stones");
  const hammer = useItems("hammer");
  const explosive = useItems("explosive");
  const goldenScale = useItems("golden scale");
  const ironBoots = useItems("iron boots");
  const fireChild = useItems("fire child");
  const ocarina = useItems("ocarina");
  const fire = useItems("fire");
  const epona = useSongs("epona");
  const dispatch = useDispatch();

  useEffect(() => {
    if (threeStones && ocarina) {
      dispatch(makeReachable(5, 0));
      dispatch(makeReachable(5, 7));
    } else {
      dispatch(makeUnreachable(5, 0));
      dispatch(makeUnreachable(5, 7));
    }
    if (explosive || hammer) {
      dispatch(makeReachable(5, 2));
      dispatch(makeReachable(5, 3));
      dispatch(makeReachable(5, 4));
    } else {
      dispatch(makeUnreachable(5, 2));
      dispatch(makeUnreachable(5, 3));
      dispatch(makeUnreachable(5, 4));
    }
    if ((explosive || hammer) && (goldenScale || ironBoots)) {
      dispatch(makeReachable(5, 5));
    } else {
      dispatch(makeUnreachable(5, 5));
    }
    if (((explosive && fireChild) || (hammer && fire)) && epona) {
      dispatch(makeReachable(5, 6));
    } else {
      dispatch(makeUnreachable(5, 6));
    }
  }, [
    threeStones,
    dispatch,
    explosive,
    hammer,
    goldenScale,
    ironBoots,
    fireChild,
    fire,
    epona,
    ocarina,
  ]);
}

export default useHyruleFieldLogic;
