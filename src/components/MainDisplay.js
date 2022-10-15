import React from "react";
import { useSelector } from "react-redux";
import { selectChecks } from "../utils/selectors";
import Area from "./areas/Area";
import AreasList from "./areas/AreasList";

function MainDisplay() {
  const areas = useSelector(selectChecks);
  const selectZone = (id1, id2) => {
    return areas
      .filter((area) => (area.id >= id1) & (area.id < id2))
      .map((area, index) => {
        return (
          <div key={index}>
            <Area area={area} />
          </div>
        );
      });
  };

  const kokiriZoneDisplay = selectZone(0, 5);
  const hyruleDisplay = selectZone(5, 9);
  const marketDisplay = selectZone(9, 15);
  const shadowTempleDisplay = selectZone(15, 17);
  const mountainZoneDisplay = selectZone(17, 22);
  const zoraZoneDisplay = selectZone(22, 27);
  const gerudoZoneDisplay = selectZone(27, 32);
  const spiritTempleAndGanonDisplay = selectZone(32, 34);

  return (
    <div className="main-display">
      <AreasList areas={kokiriZoneDisplay} />
      <AreasList areas={hyruleDisplay} />
      <AreasList areas={marketDisplay} />
      <AreasList areas={shadowTempleDisplay} />
      <AreasList areas={mountainZoneDisplay} />
      <AreasList areas={zoraZoneDisplay} />
      <AreasList areas={gerudoZoneDisplay} />
      <AreasList areas={spiritTempleAndGanonDisplay} />
    </div>
  );
}

export default MainDisplay;
