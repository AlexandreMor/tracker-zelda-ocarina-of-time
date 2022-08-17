import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeReachable, makeUnreachable } from "../../features/checks";
import useAccess from "../useAccess";
import useItems from "../useItems";
import useRandomSpawns from "../useRandomSpawns";
import useSongs from "../useSongs";

function useGoronCityLogic() {
  const hookshot = useItems("hookshot");
  const explosive = useItems("explosive");
  const bombs = useItems("bomb bag");
  const hammer = useItems("hammer");
  const bow = useItems("bow");
  const dins = useItems("fire child");
  const goronTunic = useItems("goron tunic");
  const strength1 = useItems("strength 1");
  const strength2 = useItems("strength 2");
  const adultWallet = useItems("adult wallet");
  const fireChild = useItems("fire child");
  const zeldasLullaby = useSongs("zelda");
  const saria = useSongs("saria");
  const sot = useSongs("sot");
  const dmcLowerAccess = useAccess("dmc lower");
  const goronShopChild = useRandomSpawns("child spawn");
  const goronShopAdult = useRandomSpawns("adult spawn");
  const dispatch = useDispatch();

  useEffect(() => {
    if (explosive) {
      dispatch(makeReachable(18, 0));
    } else {
      dispatch(makeUnreachable(18, 0));
    }
    if (zeldasLullaby && saria) {
      dispatch(makeReachable(18, 1));
    } else {
      dispatch(makeUnreachable(18, 1));
    }
    if ((zeldasLullaby || fireChild) && bombs) {
      dispatch(makeReachable(18, 2));
    } else {
      dispatch(makeUnreachable(18, 2));
    }
    if (explosive || bow || strength1) {
      dispatch(makeReachable(18, 3));
    } else {
      dispatch(makeUnreachable(18, 3));
    }
    if (explosive || hammer || strength2) {
      dispatch(makeReachable(18, 4));
      dispatch(makeReachable(18, 5));
    } else {
      dispatch(makeUnreachable(18, 4));
      dispatch(makeUnreachable(18, 5));
    }
    if (hammer || strength2) {
      dispatch(makeReachable(18, 6));
    } else {
      dispatch(makeUnreachable(18, 6));
    }
    if ((goronTunic && hookshot) || sot) {
      dispatch(makeReachable(18, 7));
      dispatch(makeReachable(18, 8));
      dispatch(makeReachable(18, 9));
    }
    if (
      explosive ||
      bow ||
      strength1 ||
      dins ||
      goronShopChild === "gsh" ||
      goronShopAdult === "gsh"
    ) {
      dispatch(makeReachable(18, 10));
      dispatch(makeReachable(18, 11));
      dispatch(makeReachable(18, 12));
      dispatch(makeReachable(18, 13));
    }
    if ((explosive || hammer || strength1) && adultWallet) {
      dispatch(makeReachable(18, 14));
    } else {
      dispatch(makeUnreachable(18, 14));
    }
  }, [
    explosive,
    hookshot,
    hammer,
    strength1,
    strength2,
    adultWallet,
    fireChild,
    zeldasLullaby,
    saria,
    sot,
    dmcLowerAccess,
    bombs,
    goronTunic,
    dispatch,
    goronShopChild,
    goronShopAdult,
    dins,
    bow,
  ]);
}

export default useGoronCityLogic;
