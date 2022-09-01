import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInvisible, setVisible } from "../../features/checks";
import { selectHints } from "../../utils/selectors";
import Check from "./Check";
import KeysDisplay from "./KeysDisplay";

function Area({ area }) {
  const hints = useSelector(selectHints);
  const dispatch=useDispatch();
  const backgroundColor = hints
    .filter((hint) => hint.id < 12 && hint.location === area.name)
    .map((hint) => {
      if (hint.name.includes("Path")) {
        return "area blue";
      }
      if (hint.name.includes("Foolish")) {
        return "area purple";
      }
      return "area transparent";
    });
  const checks = area.checks
    .filter((check) => check.visibility)
    .map((check, index) => {
      return <Check key={index} check={check} idArea={area.id} />;
    });

  const handleClick = () => {
    if (area.visibility) {
      dispatch(setInvisible(area.id))
    } else {
      dispatch(setVisible(area.id))
    }
  };
  
  return (
    <div className={backgroundColor}>
      <h5 className="area-name" onClick={()=>handleClick()}>{area.name}</h5>
      {area.hasOwnProperty("keysLeft") && <KeysDisplay area={area} />}
      {area.visibility && <ul className="checks-list">{checks}</ul>}
    </div>
  );
}

export default Area;
