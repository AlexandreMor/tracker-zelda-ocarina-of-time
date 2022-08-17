import { useSelector } from "react-redux";
import { selectRandomSpawns } from "../utils/selectors";

function useRandomSpawns(name) {
  const randomSpawns = useSelector(selectRandomSpawns);
  switch (name) {
    case "child spawn":
      return randomSpawns[0].location;
    case "adult spawn":
      return randomSpawns[1].location;
    default:
      return null;
  }
}

export default useRandomSpawns;
