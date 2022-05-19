import { TURN_WAITING_TIME_BOUNDARIES } from "../constants";

const getTurnBorderColorByWaitingTime = (waitingTime) => {
  if (waitingTime < TURN_WAITING_TIME_BOUNDARIES.GOOD) {
    return "green";
  }
  if (waitingTime < TURN_WAITING_TIME_BOUNDARIES.MEDIUM) {
    return "gold";
  }
  return "firebrick";
};

export { getTurnBorderColorByWaitingTime };
