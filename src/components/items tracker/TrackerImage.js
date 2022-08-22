import React from "react";
import { itemsDecrement, itemsIncrement } from "../../features/items";
import { useDispatch } from "react-redux";
import TrackerDungeonName from "./TrackerDungeonName";

function TrackerImage({ element, stringElement }) {
  const dispatch = useDispatch();
  return (
    <div className="item-image"><img
    className={stringElement === "songs" ? "image-song" : "image-medium"}
      key={element.name}
      style={
        element.number === 0
          ? { filter: "grayscale(1)", opacity: "0.5" }
          : { filter: "grayscale(0)", opacity: "1" }
      }
      src={
        element.number <= 1 
          ? element.image[0] : element.number >= 1 && element.id < 29
          ? element.image[element.number - 1] : element.image[0]
      }
      alt={element.name}
      onClick={() => dispatch(itemsIncrement(stringElement, element.id))}
      onContextMenu={() => dispatch(itemsDecrement(stringElement, element.id))}
    />
    {stringElement==="dungeons" ? <TrackerDungeonName /> : ""}
    {stringElement==="skull" ? <span className="skull-number">{element.number}</span> : ""}
    </div>
  );
}

export default TrackerImage;
