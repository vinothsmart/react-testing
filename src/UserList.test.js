import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one row for each user", () => {
  const users = [
    { id: 1, name: "jane", email: "jane@jane.com" },
    { id: 2, name: "sam", email: "sam@sam.com" },
  ];
  // render the component
  render(<UserList users={users} />);

  // Find all the rows in the table
  //   screen.logTestingPlaygroundURL();
  const rows = screen.getAllByRole("row");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});
