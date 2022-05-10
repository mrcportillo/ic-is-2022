import { TURN_WAITING_TIME_BOUNDARIES } from "../constants/turn";

export const getTurnBorderColorByWaitingTime = (waitingTime) => {
  if (waitingTime < TURN_WAITING_TIME_BOUNDARIES.GOOD) {
    return "green";
  } else if (waitingTime < TURN_WAITING_TIME_BOUNDARIES.MEDIUM) {
    return "gold";
  }
  return "firebrick";
};
