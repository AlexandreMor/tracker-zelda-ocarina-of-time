import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeInvisible, makeVisible } from "../features/checks";
import { selectChecks } from "../utils/selectors";
import useSettings from "./useSettings";

function useChecksVisibility() {
  const areas = useSelector(selectChecks);
  const shopsanity = useSettings("shopsanity");
  const skullsanity = useSettings("skullsanity");
  const scrubsanity = useSettings("scrubsanity");
  const cowsanity = useSettings("cowsanity");
  const shuffleCarpetSalesman = useSettings(
    "shuffle carpet salesman & medigoron"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (shopsanity === "true") {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "shopsanity")
          .map((check) => {
            return dispatch(makeVisible(area.id, check.id));
          })
      );
    } else {
      areas.map((area) =>
        area.checks
          .filter((check) => check.setting === "shopsanity")
          .map((check) => {
            return dispatch(makeInvisible(area.id, check.id));
          })
      );
    }
  }, [areas, shopsanity, dispatch]);

  useEffect(() => {
    if (skullsanity === "true") {
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
  }, [areas, skullsanity, dispatch]);

  useEffect(() => {
    if (scrubsanity === "true") {
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
  }, [areas, scrubsanity, dispatch]);

  useEffect(() => {
    if (cowsanity === "true") {
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
  }, [areas, cowsanity, dispatch]);

  useEffect(() => {
    if (shuffleCarpetSalesman === "true") {
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
  }, [areas, shuffleCarpetSalesman, dispatch]);
}

export default useChecksVisibility;
