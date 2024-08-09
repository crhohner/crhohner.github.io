import Footer from "../components/footer";
import { render } from "@testing-library/react";

describe("footer", () => {
  test("should render emails with mailto links", () => {
    render(<Footer />);
  });
});
