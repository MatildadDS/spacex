import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from './App';

test("loading", () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(screen.queryByText(/Loading/i)).toBeInTheDocument();
});
