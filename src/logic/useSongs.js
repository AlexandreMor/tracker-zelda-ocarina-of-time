import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectSongs } from "../utils/selectors";

function useSongs(name) {
  const songs = useSelector(selectSongs);
  const items = useSelector(selectItems);
  const songsLogic = useCallback(
    (id) => {
      if (songs[id].number === 1 && items[4].number >= 1) {
        return true;
      } else {
        return false;
      }
    },
    [songs, items]
  );

  switch (name) {
    case "zelda":
      return songsLogic(0);

    case "epona":
      return songsLogic(1);

    case "saria":
      return songsLogic(2);

    case "sun song":
      return songsLogic(3);

    case "sot":
      return songsLogic(4);

    case "sos":
      return songsLogic(5);

    case "minuet":
      return songsLogic(6);

    case "bolero":
      return songsLogic(7);

    case "serenade":
      return songsLogic(8);

    case "nocturne":
      return songsLogic(9);

    case "requiem":
      return songsLogic(10);

    case "prelude":
      return songsLogic(11);

    default:
      return false;
  }
}

export default useSongs;
