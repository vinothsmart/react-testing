import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);
  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component do
  // what we except it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  const mock = jest.fn();
  // Try to render my component
  render(<UserForm addUser={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  await user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
