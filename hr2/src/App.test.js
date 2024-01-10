import App  from "./App";
import {render, screen, fireEvent} from "@testing-library/react";

it('Add new person and show him in list', () => {
	let { getByTestId, queryByTestId, getAllByText } = render(<App />);
	let personNameInput = getByTestId("person-name-input");
	let personNumberInput = getByTestId("phone-number-input");
	let personEmailInput = getByTestId("person-email-input");

	fireEvent.change(personNameInput, { target: { value: "John" } });
	fireEvent.change(personNumberInput, { target: { value: "1234567890" } });
	fireEvent.change(personEmailInput, { target: { value: "john@example.com)" } });

	let submitButton = getByTestId("add-person-button");
	fireEvent.click(submitButton);

	expect(getAllByText("John")).toHaveLength(1);
	
})