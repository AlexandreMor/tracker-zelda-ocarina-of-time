import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectChecks, selectMedallionsStones } from "../utils/selectors";
import useItems from "./useItems";
import useRandomSpawns from "./useRandomSpawns";
import useSettings from "./useSettings";
import useSongs from "./useSongs";

function useAccess(name) {
  const areas = useSelector(selectChecks);
  const explosive = useItems("explosive");
  const rutosLetter = useItems("ruto's letter");
  const scale = useItems("silver scale");
  const goldenScale = useItems("golden scale");
  const hookshot = useItems("hookshot");
  const longshot = useItems("longshot");
  const bow = useItems("bow");
  const strength1 = useItems("strength 1");
  const prescription = useItems("prescription");
  const claimCheck = useItems("claim check");
  const hammer = useItems("hammer");
  const hoverBoots = useItems("hover boots");
  const ironBoots = useItems("iron boots");
  const dins = useItems("fire child");
  const slingshot = useItems("slingshot");
  const kokiriSword = useItems("kokiri sword");
  const lens = useItems("lens");
  const magic = useItems("magic");
  const gerudoCard = useItems("gerudo card");
  const zeldasLullaby = useSongs("zelda");
  const saria = useSongs("saria");
  const minuet = useSongs("minuet");
  const epona = useSongs("epona");
  const sos = useSongs("sos");
  const nocturne = useSongs("nocturne");
  const requiem = useSongs("requiem");
  const bolero = useSongs("bolero");
  const deku = useSettings("deku");
  const bridge = useSettings("bridge");
  const medallions = useSelector(selectMedallionsStones);
  const childSpawn = useRandomSpawns("child spawn");
  const adultSpawn = useRandomSpawns("adult spawn");
  const dungeonsShuffle = useSettings("dungeons shuffle");
  const openFortress = useSettings("open fortress");

  const minuetAccess = useCallback(() => {
    if (saria || minuet || adultSpawn === "min") {
      return true;
    } else {
      return false;
    }
  }, [saria, minuet, adultSpawn]);

  const dmcLowerDCAccess = useCallback(() => {
    if (explosive || bow || strength1 || adultSpawn === "cl") {
      return true;
    } else {
      return false;
    }
  }, [explosive, bow, strength1, adultSpawn]);

  const zoraRiverAccess = useCallback(() => {
    if (explosive || scale || childSpawn === "zr" || childSpawn === "zd") {
      return true;
    } else {
      return false;
    }
  }, [explosive, scale, childSpawn]);

  const zoraDomainAccess = useCallback(() => {
    if (
      ((explosive || childSpawn === "zr") && zeldasLullaby) ||
      scale ||
      childSpawn === "zd"
    ) {
      return true;
    } else {
      return false;
    }
  }, [explosive, zeldasLullaby, scale, childSpawn]);

  const zoraFountainAccess = useCallback(() => {
    if ((zoraDomainAccess() && rutosLetter) || childSpawn === "zf") {
      return true;
    } else {
      return false;
    }
  }, [rutosLetter, zoraDomainAccess, childSpawn]);

  const zoraFountainAccessInAdult = useCallback(() => {
    if (
      (zoraDomainAccess() &&
        rutosLetter &&
        (zeldasLullaby || adultSpawn === "zd")) ||
      adultSpawn === "zf"
    ) {
      return true;
    } else {
      return false;
    }
  }, [rutosLetter, zoraDomainAccess, zeldasLullaby, adultSpawn]);

  const gerudoValleyBridgeAccess = useCallback(() => {
    if (
      epona ||
      longshot ||
      adultSpawn === "gv" ||
      adultSpawn === "gf" ||
      openFortress === "opened"
    ) {
      return true;
    } else {
      return false;
    }
  }, [epona, longshot, adultSpawn, openFortress]);

  const wastelandMausoleumAccess = useCallback(() => {
    if (gerudoValleyBridgeAccess() && (longshot || hoverBoots)) {
      return true;
    } else {
      return false;
    }
  }, [gerudoValleyBridgeAccess, longshot, hoverBoots]);

  const desertColossusAccess = useCallback(() => {
    if (
      (wastelandMausoleumAccess() && lens && magic) ||
      requiem ||
      adultSpawn === "col"
    ) {
      return true;
    } else {
      return false;
    }
  }, [lens, magic, requiem, wastelandMausoleumAccess, adultSpawn]);

  const morphaDefeated = useCallback(() => {
    if (areas[8].checks[15].reachable) {
      return true;
    } else {
      return false;
    }
  }, [areas]);

  const medallionsObtained = useCallback(() => {
    const initialValue = 0;
    const number = medallions
      .filter((medallion) => medallion.id >= 3)
      .reduce((accumulator, medallion) => {
        return accumulator + medallion.number;
      }, initialValue);
    return number;
  }, [medallions]);

  switch (name) {
    case "lw grotto & sfm grotto":
      if (explosive || (hammer && minuetAccess())) {
        return true;
      } else {
        return false;
      }
    case "minuet":
      return minuetAccess();
    case "deku":
      if (deku === "opened" || kokiriSword) {
        return true;
      } else {
        return false;
      }
    case "gohma":
      if (slingshot) {
        return true;
      } else {
        return false;
      }
    case "forest":
      if (minuetAccess() && hookshot) {
        return true;
      } else {
        return false;
      }
    case "water":
      if ((ironBoots && hookshot) || (goldenScale && longshot)) {
        return true;
      } else {
        return false;
      }
    case "well":
      if (sos) {
        return true;
      } else {
        return false;
      }
    case "shadow":
      if (
        (nocturne ||
          adultSpawn === "noc" ||
          (childSpawn === "noc" && dungeonsShuffle === "true")) &&
        dins
      ) {
        return true;
      } else {
        return false;
      }
    case "gtg":
      if (gerudoValleyBridgeAccess() && gerudoCard) {
        return true;
      } else {
        return false;
      }
    case "spirit":
      if (desertColossusAccess()) {
        return true;
      } else {
        return false;
      }
    case "dmc lower":
      return dmcLowerDCAccess();
    case "dmc upper":
      if (hammer || explosive || dmcLowerDCAccess() || adultSpawn === "cu") {
        return true;
      } else {
        return false;
      }
    case "dodongo's cav.":
      return true;
    case "fire":
      if ((dmcLowerDCAccess() && (hookshot || hoverBoots)) || bolero) {
        return true;
      } else {
        return false;
      }
    case "zora river":
      if (zoraRiverAccess()) {
        return true;
      } else {
        return false;
      }
    case "can deliver ruto's letter":
      if (((explosive && zeldasLullaby) || scale) && rutosLetter) {
        return true;
      } else {
        return false;
      }
    case "can finish Biggoron quest":
      if (
        ((explosive || scale) &&
          zeldasLullaby &&
          rutosLetter &&
          prescription &&
          (dmcLowerDCAccess() || explosive || hammer)) ||
        ((explosive || hammer || dmcLowerDCAccess()) && claimCheck)
      ) {
        return true;
      } else {
        return false;
      }
    case "zora domain":
      if (zoraDomainAccess()) {
        return true;
      } else {
        return false;
      }
    case "zora fountain":
      if (zoraFountainAccess()) {
        return true;
      } else {
        return false;
      }
    case "zora fountain in adult":
      if (zoraFountainAccessInAdult()) {
        return true;
      } else {
        return false;
      }
    case "ice cavern":
      if (zoraFountainAccessInAdult()) {
        return true;
      } else {
        return false;
      }
    case "jabu":
      if (zoraFountainAccess()) {
        return true;
      } else {
        return false;
      }
    case "gerudo valley after bridge":
      if (gerudoValleyBridgeAccess()) {
        return true;
      } else {
        return false;
      }
    case "wasteland after moving sand":
      if (wastelandMausoleumAccess()) {
        return true;
      } else {
        return false;
      }
    case "desert colossus":
      if (desertColossusAccess() || adultSpawn === "col") {
        return true;
      } else {
        return false;
      }
    case "Morpha defeated":
      if (morphaDefeated()) {
        return true;
      } else {
        return false;
      }
    case "ganon":
      if (bridge === medallionsObtained().toString()) {
        return true;
      } else {
        return false;
      }
    case "inaccessible":
      return false;
    default:
      return false;
  }
}

export default useAccess;
