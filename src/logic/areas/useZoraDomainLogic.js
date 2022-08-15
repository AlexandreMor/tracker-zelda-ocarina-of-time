import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useSongs from "../useSongs";

function useZoraDomainLogic() {
  const zeldasLullaby = useSongs("zelda");
  const zoraDomainAccess = useAccess("zora domain");
  const rutosLetterDelivered = useAccess("can deliver ruto's letter");
  const dispatch = useDispatch();

  useEffect(() => {
    if (zoraDomainAccess) {
      dispatch(makeReachable(23, 0));
      dispatch(makeReachable(23, 1));
      dispatch(makeReachable(23, 3));
      dispatch(makeReachable(23, 4));
      dispatch(makeReachable(23, 5));
      dispatch(makeReachable(23, 6));
    } else {
      dispatch(makeUnreachable(23, 0));
      dispatch(makeUnreachable(23, 1));
      dispatch(makeUnreachable(23, 3));
      dispatch(makeUnreachable(23, 4));
      dispatch(makeUnreachable(23, 5));
      dispatch(makeUnreachable(23, 6));
    }
    if (rutosLetterDelivered && zeldasLullaby) {
      dispatch(makeReachable(23, 2));
    } else {
      dispatch(makeUnreachable(23, 2));
    }
  }, [dispatch, zoraDomainAccess, rutosLetterDelivered, zeldasLullaby]);
}

export default useZoraDomainLogic;
