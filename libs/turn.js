import { TURN_WAITING_TIME_BOUNDARIES } from "../constants/turn";

export const getTurnBorderColorByWaitingTime = (waitingTime) => {
  if (waitingTime < TURN_WAITING_TIME_BOUNDARIES.GOOD) {
    return "green";
  }
  if (waitingTime < TURN_WAITING_TIME_BOUNDARIES.MEDIUM) {
    return "gold";
  }
  return "red";
};

// export default { getTurnBorderColorByWaitingTime };
