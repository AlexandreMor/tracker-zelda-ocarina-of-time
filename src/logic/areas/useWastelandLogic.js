import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";

function useWastelandLogic() {
  const wastelandAfterMovingSand = useAccess("wasteland after moving sand");
  const adultWallet = useItems("adult wallet");
  const fire = useItems("fire");
  const dispatch = useDispatch();

  useEffect(() => {
    if (wastelandAfterMovingSand && adultWallet) {
      dispatch(makeReachable(29, 0));
    } else {
      dispatch(makeUnreachable(29, 0));
    }
    if (wastelandAfterMovingSand && fire) {
      dispatch(makeReachable(29, 1));
    } else {
      dispatch(makeUnreachable(29, 1));
    }
  }, [wastelandAfterMovingSand, adultWallet, fire, dispatch]);
}

export default useWastelandLogic;
