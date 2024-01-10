import React, {useState} from "react";
import "./AddPerson.css";

export default function AddPerson({onButtonClick}) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    let [error, setError] = React.useState("");
    const handleAddPerson = (event) => {
        // Validate inputs
        if (!name || !phoneNumber || !email) {
            setError('Please fill in all fields');
            return;
        }

        // Validate phone number length
        if (phoneNumber.toString().length !== 10) {
            setError('Phone number should be 10 digits');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email address');
            return;
        }

        // Create a new person object
        const newPerson = {
            name,
            "number": parseInt(phoneNumber),
            email,
        };

        // Call the parent component's function to add the person
        onButtonClick(newPerson);

        // Reset the form fields
        setName('');
        setPhoneNumber('');
        setEmail('');
        setError("")
    };
    return (
        <section>
            <div className="card pa-30 mr-30">
                <label className="pt-10">{error}</label>
                <div data-testid="add-person-form">
                    <div className="layout-column mb-15">
                        <label htmlFor="name" className="mb-3">
                            Person Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Person Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            data-testid="person-name-input"
                        />
                    </div>
                    <div className="layout-column mb-15">
                        <label htmlFor="number" className="mb-3">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Phone Number"
                            name="number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            data-testid="phone-number-input"
                        />
                    </div>
                    <div className="layout-column mb-30">
                        <label htmlFor="email" className="mb-3">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            data-testid="person-email-input"
                        />
                    </div>
                    <div className="layout-row justify-content-end">
                        <button type="submit"
                                onClick={handleAddPerson}
                                className="mx-0" data-testid="add-person-button">
                            Add Person
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
