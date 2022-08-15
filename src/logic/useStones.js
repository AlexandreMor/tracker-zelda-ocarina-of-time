import { useSelector } from "react-redux";
import { selectMedallionsStones } from "../utils/selectors";

function useStones(name) {
  const dungeons = useSelector(selectMedallionsStones);

  if (name === "3 stones") {
    if (
      dungeons[0].number === 1 &&
      dungeons[1].number === 1 &&
      dungeons[2].number === 1
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export default useStones;
