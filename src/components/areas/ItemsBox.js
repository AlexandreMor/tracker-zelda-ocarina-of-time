import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setItemCheck } from "../../features/checks";
import { selectItems, selectSongs } from "../../utils/selectors";

function ItemsBox({ idCheck, idArea }) {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const itemsDisplay = items.map((item) => {
    return (
      <img
        className="image-medium"
        key={item.name}
        src={item.image[0]}
        alt={item.name}
        onClick={() => dispatch(setItemCheck(item.image[0], idArea, idCheck))}
      />
    );
  });
  const songs = useSelector(selectSongs);
  const songsDisplay = songs.map((song) => {
    return (
      <span key={song.name}>
        {song.name !== "cancel" ? (
          <img
            className="image-medium"
            src={song.image[0]}
            alt={song.name}
            onClick={() =>
              dispatch(setItemCheck(song.image[0], idArea, idCheck))
            }
          />
        ) : (
          <img
            className="image-medium"
            src={song.image[0]}
            alt={song.name}
            onClick={() => dispatch(setItemCheck("", idArea, idCheck))}
          />
        )}
      </span>
    );
  });
  return (
    <div className="box">
      {itemsDisplay}
      {songsDisplay}
    </div>
  );
}

export default ItemsBox;
