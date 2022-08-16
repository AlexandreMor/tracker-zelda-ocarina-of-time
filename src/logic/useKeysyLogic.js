import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addAllKey,
  addBossKey,
  removeAllKey,
  removeBossKey,
} from "../features/checks";
import useSettings from "./useSettings";

function useKeysyLogic() {
  const keysy = useSettings("keysy");
  const bossKeysy = useSettings("boss keysy");
  const dispatch = useDispatch();

  useEffect(() => {
    if (keysy === "true") {
      dispatch(removeAllKey(4));
      dispatch(removeAllKey(8));
      dispatch(removeAllKey(15));
      dispatch(removeAllKey(16));
      dispatch(removeAllKey(21));
      dispatch(removeAllKey(31));
      dispatch(removeAllKey(32));
      dispatch(removeAllKey(33));
    }
    if (keysy === "false") {
      dispatch(addAllKey(4));
      dispatch(addAllKey(8));
      dispatch(addAllKey(15));
      dispatch(addAllKey(16));
      dispatch(addAllKey(21));
      dispatch(addAllKey(31));
      dispatch(addAllKey(32));
      dispatch(addAllKey(33));
    }
  }, [keysy, dispatch]);

  useEffect(() => {
    if (bossKeysy === "true") {
      dispatch(removeBossKey(4));
      dispatch(removeBossKey(8));
      dispatch(removeBossKey(15));
      dispatch(removeBossKey(16));
      dispatch(removeBossKey(21));
      dispatch(removeBossKey(31));
      dispatch(removeBossKey(32));
      dispatch(removeBossKey(33));
    } else {
      dispatch(addBossKey(4));
      dispatch(addBossKey(8));
      dispatch(addBossKey(15));
      dispatch(addBossKey(16));
      dispatch(addBossKey(21));
      dispatch(addBossKey(31));
      dispatch(addBossKey(32));
      dispatch(addBossKey(33));
    }
  }, [bossKeysy, dispatch]);
}

export default useKeysyLogic;
