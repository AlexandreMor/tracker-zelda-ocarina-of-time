import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useRandomSpawns from "../useRandomSpawns";
import useSongs from "../useSongs";

function useZoraFountainLogic() {
  const dispatch = useDispatch();
  const zoraFountainAccessInAdult = useAccess("zora fountain in adult");
  const zoraFountainAccess = useAccess("zora fountain");
  const ironBoots = useItems("iron boots");
  const explosive = useItems("explosive");
  const zeldasLullaby = useSongs("zelda");
  const zfFairyChild = useRandomSpawns("child spawn");
  const zfFairyAdult = useRandomSpawns("adult spawn");

  useEffect(() => {
    if (zoraFountainAccessInAdult) {
      dispatch(makeReachable(24, 0));
    } else {
      dispatch(makeUnreachable(24, 0));
    }
  }, [zoraFountainAccessInAdult, dispatch]);

  useEffect(() => {
    if (zoraFountainAccessInAdult && ironBoots) {
      dispatch(makeReachable(24, 1));
    } else {
      dispatch(makeUnreachable(24, 1));
    }
  }, [zoraFountainAccessInAdult, ironBoots, dispatch]);

  useEffect(() => {
    if (
      (((zoraFountainAccessInAdult || zoraFountainAccess) && explosive) ||
        zfFairyChild === "zff" ||
        zfFairyAdult === "zff") &&
      zeldasLullaby
    ) {
      dispatch(makeReachable(24, 2));
    } else {
      dispatch(makeUnreachable(24, 2));
    }
  }, [
    zoraFountainAccessInAdult,
    zoraFountainAccess,
    explosive,
    zfFairyAdult,
    zfFairyChild,
    zeldasLullaby,
    dispatch,
  ]);
}

export default useZoraFountainLogic;
