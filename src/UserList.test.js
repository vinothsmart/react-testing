import { getByRole, render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { id: 1, name: "jane", email: "jane@jane.com" },
    { id: 2, name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  return { users };
}

// avoid the approach below above because it's not a good practice above is better
// beforeEach(() => {
//   render(<UserList users={users} />);
// });

test("render one row for each user", () => {
  // render the component
  renderComponent();
  // Find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // render the component
  const { users } = renderComponent();

  //   screen.logTestingPlaygroundURL();
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
