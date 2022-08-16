import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEntrance } from "../features/checks";
import useSettings from "./useSettings";

function useDungeonsShuffleLogic() {
  const dungeonsShuffleSetting = useSettings("dungeons shuffle");
  const dispatch = useDispatch();

  useEffect(() => {
    if (dungeonsShuffleSetting === "true") {
      dispatch(setEntrance(3, "inaccessible"));
      dispatch(setEntrance(4, "inaccessible"));
      dispatch(setEntrance(8, "inaccessible"));
      dispatch(setEntrance(15, "inaccessible"));
      dispatch(setEntrance(16, "inaccessible"));
      dispatch(setEntrance(20, "inaccessible"));
      dispatch(setEntrance(21, "inaccessible"));
      dispatch(setEntrance(25, "inaccessible"));
      dispatch(setEntrance(26, "inaccessible"));
      dispatch(setEntrance(31, "inaccessible"));
      dispatch(setEntrance(32, "inaccessible"));
    }
    if (dungeonsShuffleSetting === "false") {
      dispatch(setEntrance(3, "deku"));
      dispatch(setEntrance(4, "forest"));
      dispatch(setEntrance(8, "water"));
      dispatch(setEntrance(15, "botw"));
      dispatch(setEntrance(16, "shadow"));
      dispatch(setEntrance(20, "dc"));
      dispatch(setEntrance(21, "fire"));
      dispatch(setEntrance(25, "jabu"));
      dispatch(setEntrance(26, "ice"));
      dispatch(setEntrance(31, "gtg"));
      dispatch(setEntrance(32, "spirit"));
    }
  }, [dungeonsShuffleSetting, dispatch]);
}

export default useDungeonsShuffleLogic;
