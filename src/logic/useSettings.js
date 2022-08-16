import { useSelector } from "react-redux";
import { selectSettings } from "../utils/selectors";

function useSettings(name) {
  const settings = useSelector(selectSettings);

  switch (name) {
    case "dungeons shuffle":
      return settings[8].value;
    case "deku":
      return settings[1].value;
    case "bridge":
      return settings[9].value;
    case "multiworld":
      return settings[0].value;
    case "shopsanity":
      return settings[4].value;
    case "skullsanity":
      return settings[5].value;
    case "scrubsanity":
      return settings[6].value;
    case "cowsanity":
      return settings[7].value;
    case "shuffle carpet salesman & medigoron":
      return settings[10].value;
    case "keysy":
      return settings[11].value;
    case "boss keysy":
      return settings[12].value;
    default:
      return false;
  }
}

export default useSettings;
