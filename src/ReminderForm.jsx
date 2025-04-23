import React, { useState } from "react";
import './ReminderForm.css';

export default function ReminderForm() {
    const [formState, setFormState] = useState({
        reminderDetails: "",
        reminderDate: "",
        showWhatsApp: false,
        showEmail: false,
        email: "",
        whatsappNumber: "",
    });

    const isButtonDisabled = () => {
        return !formState.showWhatsApp && !formState.showEmail;
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate storing data or sending it
        console.log("Form Submitted:", formState);

        // Save data to local storage
        localStorage.setItem("reminderData", JSON.stringify(formState));

        // Reset the form
        setFormState({
            reminderDetails: "",
            reminderDate: "",
            showWhatsApp: false,
            showEmail: false,
            email: "",
            whatsappNumber: "",
        });
    };

    return (
        <div className="reminder-form">
            <h2>Set a Reminder</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Reminder Details</label>
                    <input
                        type="text"
                        name="reminderDetails"
                        value={formState.reminderDetails}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Reminder Date</label>
                    <input
                        type="date"
                        name="reminderDate"
                        value={formState.reminderDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label>Select Notification Methods:</label>
                    <label>
                        <input
                            type="checkbox"
                            name="showEmail"
                            checked={formState.showEmail}
                            onChange={handleCheckboxChange}
                        /> Email
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="showWhatsApp"
                            checked={formState.showWhatsApp}
                            onChange={handleCheckboxChange}
                        /> WhatsApp
                    </label>
                </div>

                {formState.showEmail && (
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                )}

                {formState.showWhatsApp && (
                    <div className="form-group">
                        <label>WhatsApp Number</label>
                        <input
                            type="tel"
                            name="whatsappNumber"
                            value={formState.whatsappNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                )}

                <button type="submit" disabled={isButtonDisabled()}>
                    Save Reminder
                </button>
            </form>
        </div>
    );
}