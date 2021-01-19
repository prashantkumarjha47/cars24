import renderer from "react-test-renderer";
import App from "./App";
import { ContextProvider } from "./store/Context";

test("App component loaded", () => {
  const component = renderer.create(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
