import React from "react";
import { useDispatch } from "react-redux";
import {
  addBossKey,
  addKey,
  removeBossKey,
  removeKey,
} from "../../features/checks";

function KeysDisplay({ area }) {
  const imageKey = `${process.env.PUBLIC_URL}/assets/small_key.png`;
  const imageBossKey = `${process.env.PUBLIC_URL}/assets/boss_key.png`;
  const dispatch = useDispatch();
  const handleClick = (param) => {
    if (param === "key") {
      if (area.keysLeft > 0) {
        return dispatch(removeKey(area.id));
      } else {
        return null;
      }
    } else {
      if (area.bossKeyLeft > 0) {
        return dispatch(removeBossKey(area.id));
      } else {
        return null;
      }
    }
  };
  const handleOnContextMenu = (param) => {
    if (param === "key") {
      if (area.keysLeft < area.maxKeys) {
        dispatch(addKey(area.id));
      } else {
        return null;
      }
    } else {
      if (area.bossKeyLeft < area.maxBossKey) {
        dispatch(addBossKey(area.id));
      } else {
        return null;
      }
    }
  };
  return (
    <div className="keys">
      <div
        onClick={() => handleClick("key")}
        onContextMenu={() => handleOnContextMenu("key")}
      >
        <img className="image-small" src={imageKey} alt="key" />
        <span className="number_keys">{area.keysLeft}</span>
      </div>
      {area.hasOwnProperty("bossKeyLeft") && (
        <div
          onClick={() => handleClick("boss key")}
          onContextMenu={() => handleOnContextMenu("boss key")}
        >
          <img className="image-small" src={imageBossKey} alt="boss_key" />
          <span className="number_keys">{area.bossKeyLeft}</span>
        </div>
      )}
    </div>
  );
}

export default KeysDisplay;
