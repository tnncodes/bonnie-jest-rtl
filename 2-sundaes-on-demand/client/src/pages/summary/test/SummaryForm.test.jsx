import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm"

test('Initial conditions', () => {
  render(<SummaryForm />);

  // checkbox
  const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  expect(checkbox).not.toBeChecked();

  // button
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  // first click in checkbox
  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  // second click in checkbox
  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});