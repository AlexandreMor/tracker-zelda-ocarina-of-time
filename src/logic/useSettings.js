import { useSelector } from "react-redux";
import { selectSettings } from "../utils/selectors";

function useSettings(name) {
  const settings = useSelector(selectSettings);

  switch (name) {
    case "dungeons shuffle":
      return settings[7].value;
    case "deku":
      return settings[1].value;
    case "bridge":
      return settings[8].value;
    default:
      return false;
  }
}

export default useSettings;
