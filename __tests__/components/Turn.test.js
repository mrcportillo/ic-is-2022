import renderer from "react-test-renderer";
import Turn from "../../components/Turn";
import { TURN_TYPES } from "../../constants";

describe("Turn component", () => {
  const MOCKED_TURN = {
    type: TURN_TYPES.GENERAL,
    position: 1,
    date: "Tue, 31 May 2022 17:21:34 GMT",
    positions_before: 0,
    estimated_minutes: 2,
  };
  test("Loading turn", () => {
    const component = renderer.create(<Turn loading />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test("Showing turn", () => {
    const component = renderer.create(<Turn turn={MOCKED_TURN} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
