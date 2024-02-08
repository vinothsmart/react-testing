// write test cases for the User component

// Path: src/User.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import User from "./User";

test("it shows the user's name and email", () => {
  const users = [
    { name: "Jane", email: "" },
    { name: "John", email: "" },
  ];
  render(
    <table>
      <tbody>
        <User users={users} />
      </tbody>
    </table>
  );

  const name = screen.getAllByRole("cell", { name: /jane/i });
  const email = screen.getAllByRole("cell", { name: /john/i });

  expect(name).toHaveLength(1);
  expect(email).toHaveLength(1);
});
