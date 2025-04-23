import React, { useState } from "react";
import './ReminderForm.css';

export default function ReminderForm() {
    const [formState, setFormState] = useState({
        showWhatsApp: false,
        showEmail: false,
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

    return (
        <div className="reminder-form">
            <h2>Set a Reminder</h2>
            <form>
                <div className="form-group">
                    <label>Reminder Details</label>
                    <input type="text" required />
                </div>

                <div className="form-group">
                    <label>Reminder Date</label>
                    <input type="date" required min={new Date().toISOString().split('T')[0]}/>
                </div>

                <div className="form-group checkbox-group">
                    <label>Select Notification Methods:</label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="showEmail" 
                            onChange={handleCheckboxChange} 
                        /> Email
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="showWhatsApp" 
                            onChange={handleCheckboxChange} 
                        /> WhatsApp
                    </label>
                </div>

                {formState.showEmail && (
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" required />
                    </div>
                )}

                {formState.showWhatsApp && (
                    <div className="form-group">
                        <label>WhatsApp Number</label>
                        <input type="tel" required />
                    </div>
                )}

                <button type="submit" disabled={isButtonDisabled()}>Save Reminder</button>
            </form>
        </div>
    );
}

