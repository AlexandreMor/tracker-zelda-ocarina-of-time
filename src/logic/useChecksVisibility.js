import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeInvisible, makeVisible } from "../features/checks";
import { selectChecks, selectSettings } from "../utils/selectors";

function useChecksVisibility() {
  const areas = useSelector(selectChecks);
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();
  useEffect(() => {
    if (settings[4].value === "true") {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "skullsanity")
          .map((check) => {
            return dispatch(makeVisible(area.id, check.id));
          })
      );
    } else {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "skullsanity")
          .map((check) => {
            return dispatch(makeInvisible(area.id, check.id));
          })
      );
    }
  });

  useEffect(() => {
    if (settings[5].value === "true") {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "scrubsanity")
          .map((check) => {
            return dispatch(makeVisible(area.id, check.id));
          })
      );
    } else {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "scrubsanity")
          .map((check) => {
            return dispatch(makeInvisible(area.id, check.id));
          })
      );
    }
  });
  useEffect(() => {
    if (settings[6].value === "true") {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "cowsanity")
          .map((check) => {
            return dispatch(makeVisible(area.id, check.id));
          })
      );
    } else {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "cowsanity")
          .map((check) => {
            return dispatch(makeInvisible(area.id, check.id));
          })
      );
    }
  });

  useEffect(() => {
    if (settings[11].value === "true") {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "medigoron & carpet salesman")
          .map((check) => {
            return dispatch(makeVisible(area.id, check.id));
          })
      );
    } else {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "medigoron & carpet salesman")
          .map((check) => {
            return dispatch(makeInvisible(area.id, check.id));
          })
      );
    }
  });
}

export default useChecksVisibility;
