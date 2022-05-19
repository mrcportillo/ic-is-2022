import { TURN_WAITING_TIME_BOUNDARIES } from "../../constants/turn";
import { getTurnBorderColorByWaitingTime } from "../../libs/turn";

// const { getTurnBorderColorByWaitingTime } = turnLib;

describe("getTurnBorderColorByWaitingTime", () => {
  describe("waiting time is below good waiting time boundary", () => {
    test("color should be green", () => {
      const color = getTurnBorderColorByWaitingTime(
        TURN_WAITING_TIME_BOUNDARIES.GOOD - 1
      );
      expect(color).toBe("green");
    });
  });
  describe("waiting time is above good waiting time boundary and below medium waiting time boundary", () => {
    test("color should be gold", () => {
      const color = getTurnBorderColorByWaitingTime(
        TURN_WAITING_TIME_BOUNDARIES.MEDIUM - 1
      );
      expect(color).toBe("gold");
    });
  });
  describe("waiting time is above medium waiting time boundary", () => {
    test("color should be firebrick", () => {
      const color = getTurnBorderColorByWaitingTime(
        TURN_WAITING_TIME_BOUNDARIES.MEDIUM + 1
      );
      expect(color).toBe("firebrick");
    });
  });
});
