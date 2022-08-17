import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useRandomSpawns from "../useRandomSpawns";
import useSongs from "../useSongs";

function useZoraDomainLogic() {
  const zeldasLullaby = useSongs("zelda");
  const zoraDomainAccess = useAccess("zora domain");
  const rutosLetterDelivered = useAccess("can deliver ruto's letter");
  const adultSpawn = useRandomSpawns("adult spawn");
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
    if (rutosLetterDelivered && (zeldasLullaby || adultSpawn === "zd")) {
      dispatch(makeReachable(23, 2));
    } else {
      dispatch(makeUnreachable(23, 2));
    }
  }, [
    dispatch,
    zoraDomainAccess,
    rutosLetterDelivered,
    zeldasLullaby,
    adultSpawn,
  ]);
}

export default useZoraDomainLogic;
