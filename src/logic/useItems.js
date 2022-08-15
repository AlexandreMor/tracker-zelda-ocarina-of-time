import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../utils/selectors";

function useItems(name) {
  const items = useSelector(selectItems);
  const itemsLogic = useCallback(
    (id, number) => {
      if (items[id].number >= number) {
        return true;
      } else {
        return false;
      }
    },
    [items]
  );

  switch (name) {
    case "hookshot":
      return itemsLogic(0, 1);
    case "longshot":
      return itemsLogic(0, 2);
    case "bow":
      return itemsLogic(1, 1);
    case "fire arrows":
      return itemsLogic(2, 1);
    case "light arrows":
      return itemsLogic(3, 1);
    case "ocarina":
      return itemsLogic(4, 1);
    case "lens":
      return itemsLogic(5, 1);
    case "dins":
      return itemsLogic(6, 1);
    case "farore":
      return itemsLogic(7, 1);
    case "slingshot":
      return itemsLogic(8, 1);
    case "boomerang":
      return itemsLogic(9, 1);
    case "hammer":
      return itemsLogic(10, 1);
    case "bomb bag":
      return itemsLogic(11, 1);
    case "explosive":
      if (items[11].number === 1 || items[16].number === 1) {
        return true;
      } else {
        return false;
      }
    case "bottle":
      if (items[12].number === 1 || items[13].number === 1) {
        return true;
      } else {
        return false;
      }
    case "big poe":
      return itemsLogic(13, 1);
    case "ruto's letter":
      return itemsLogic(14, 1);
    case "kokiri sword":
      return itemsLogic(15, 1);
    case "bombchus":
      return itemsLogic(16, 1);
    case "silver scale":
      return itemsLogic(17, 1);
    case "golden scale":
      return itemsLogic(17, 2);
    case "strength 1":
      return itemsLogic(18, 1);
    case "strength 2":
      return itemsLogic(18, 2);
    case "strength 3":
      return itemsLogic(18, 3);
    case "mirror shield":
      return itemsLogic(19, 1);
    case "magic":
      return itemsLogic(20, 1);
    case "adult wallet":
      return itemsLogic(21, 1);
    case "giant wallet":
      return itemsLogic(21, 2);
    case "gerudo card":
      return itemsLogic(22, 1);
    case "goron tunic":
      return itemsLogic(23, 1);
    case "zora tunic":
      return itemsLogic(24, 1);
    case "prescription":
      return itemsLogic(25, 1);
    case "claim check":
      return itemsLogic(25, 4);
    case "mask":
      return itemsLogic(26, 1);
    case "iron boots":
      return itemsLogic(27, 1);
    case "hover boots":
      return itemsLogic(28, 1);
    case "10 tokens":
      return itemsLogic(29, 10);
    case "20 tokens":
      return itemsLogic(29, 20);
    case "30 tokens":
      return itemsLogic(29, 30);
    case "40 tokens":
      return itemsLogic(29, 40);
    case "50 tokens":
      return itemsLogic(29, 50);
    case "fire child":
      if (items[20].number >= 1 && items[6].number === 1) {
        return true;
      } else {
        return false;
      }
    case "fire":
      if (
        items[20].number >= 1 &&
        (items[6].number === 1 ||
          (items[1].number === 1 && items[2].number === 1))
      ) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
}

export default useItems;
