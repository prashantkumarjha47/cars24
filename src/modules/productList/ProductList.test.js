import renderer from "react-test-renderer";
import ProductList from "./ProductList";
import { ContextProvider } from "../../store/Context";

test("Filter component loaded", () => {
  const component = renderer.create(
    <ContextProvider>
      <ProductList />
    </ContextProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
