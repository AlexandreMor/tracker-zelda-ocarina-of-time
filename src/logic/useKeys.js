import { useSelector } from "react-redux";
import { selectChecks } from "../utils/selectors";

function useKeys(name) {
  const areas = useSelector(selectChecks);
  const keys = (id) => {
    return areas[id].maxKeys - areas[id].keysLeft;
  };
  const bossKey = (id) => {
    return areas[id].maxBossKey - areas[id].bossKeyLeft;
  };
  switch (name) {
    case "forest keys":
      return keys(4);
    case "forest boss key":
      return bossKey(4);
    case "fire keys":
      return keys(21);
    case "fire boss key":
      return bossKey(21);
    case "water keys":
      return keys(8);
    case "water boss key":
      return bossKey(8);
    case "shadow keys":
      return keys(16);
    case "shadow boss key":
      return bossKey(16);
    case "spirit keys":
      return keys(32);
    case "spirit boss key":
      return bossKey(32);
    case "botw":
      return keys(15);
    case "gtg":
      return keys(31);
    case "ganon":
      return keys(33);
    default:
      return null;
  }
}

export default useKeys;
