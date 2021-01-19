import renderer from "react-test-renderer";
import Filter from "./Filter";
import { ContextProvider } from "../../store/Context";

test("Filter component loaded", () => {
  const component = renderer.create(
    <ContextProvider>
      <Filter onCloseClick={() => {}} />
    </ContextProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
