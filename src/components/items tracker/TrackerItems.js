import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectMedallionsStones } from "../../utils/selectors";
import TrackerElement from "./TrackerElement";
import TrackerImage from "./TrackerImage";

export default function TrackerItems() {
  const items = useSelector(selectItems);
  const itemsDisplay = items.filter(item => item.id < 29).map((item) => {
    return (
      <TrackerImage key={item.name} element={item} stringElement="items" />
    );
  });
  const skullDisplay = <TrackerImage key={items[29].name} element={items[29]} stringElement="skull" />
 

  const dungeons = useSelector(selectMedallionsStones);
  const stonesDisplay = dungeons
    .filter((stone) => stone.id <= 2)
    .map((stone) => {
      return (
        <TrackerImage
          key={stone.name}
          element={stone}
          stringElement="dungeons"
        />
      );
    });
  const medallionsDisplay = dungeons
    .filter((medallion) => medallion.id > 2)
    .map((medallion) => {
      return (
        <TrackerImage
          key={medallion.name}
          element={medallion}
          stringElement="dungeons"
        />
      );
    });
  return (
    <div className="items-tracker">
      <TrackerElement cssClass={"items"} display={itemsDisplay} />
      <TrackerElement cssClass={"skull"} display={skullDisplay} />
      <TrackerElement cssClass={"stones"} display={stonesDisplay} />
      <TrackerElement cssClass={"medallions"} display={medallionsDisplay} />
    </div>
  );
}
