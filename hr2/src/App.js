import React from "react";
import "./App.css";
import "h8k-components";
import AddPerson from "./components/AddPerson/AddPerson";
import ListPeople from "./components/ListPeople/ListPeople";
const title = "Telephone Directory";



const App = () => {
	let [contactList, setContacts] = React.useState([]);
	const handleFormSubmit = (childData) => {
		setContacts([...contactList, childData]);
	}
	return (
		<div>
			<h8k-navbar header={title}></h8k-navbar>
			<div className="flex align-items-center justify-content-center container">
				<AddPerson onButtonClick={handleFormSubmit} />
				<ListPeople contacts={contactList} />
			</div>
		</div>
	);
};

export default App;
