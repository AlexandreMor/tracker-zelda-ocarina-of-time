import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useSongs from "../useSongs";

function useMarketLogic() {
  const bombs = useItems("bomb bag");
  const magic = useItems("magic");
  const lens = useItems("lens");
  const bow = useItems("bow");
  const epona = useSongs("epona");
  const bottle = useItems("bottle");
  const rutosLetterDelivered = useAccess("can deliver ruto's letter");
  const bigPoe = useItems("big poe");
  const dispatch = useDispatch();

  useEffect(() => {
    if (bombs) {
      dispatch(makeReachable(9, 2));
      dispatch(makeReachable(9, 3));
    } else {
      dispatch(makeUnreachable(9, 2));
      dispatch(makeUnreachable(9, 3));
    }
  }, [bombs, dispatch]);

  useEffect(() => {
    if (magic && lens) {
      dispatch(makeReachable(9, 4));
    } else {
      dispatch(makeUnreachable(9, 4));
    }
  }, [magic, lens, dispatch]);

  useEffect(() => {
    if ((bow && epona && (bottle || rutosLetterDelivered)) || bigPoe) {
      dispatch(makeReachable(9, 5));
    } else {
      dispatch(makeUnreachable(9, 5));
    }
  }, [bow, epona, bottle, rutosLetterDelivered, bigPoe, dispatch]);
}

export default useMarketLogic;
