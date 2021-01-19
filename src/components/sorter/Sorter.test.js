import renderer from "react-test-renderer";
import Sorter from "./Sorter";
import { ContextProvider } from "../../store/Context";

test("Filter component loaded", () => {
  const component = renderer.create(
    <ContextProvider>
      <Sorter onFilterClick={() => {}} />
    </ContextProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
