# Reminder Form Component

This React component is a feature-rich reminder creation form that supports conditional notification preferences and additional enhancements for improved functionality.

Features Implemented

1. **State Management**:
   - Tracks values for the reminder text, date, email, and WhatsApp number.
   - Manages the selection state for notification methods (checkboxes).

2. **Conditional Rendering**:
   - Dynamically displays input fields for email and WhatsApp number based on checkbox selection.

3. **Form Submission**:
   - Captures form data and simulates storing it or sending it by logging to the console.
   - Saves the submitted data to local storage.

4. **Additional Enhancements**:
   - Added validation to ensure required fields are filled.
   - Supported resetting the form after submission.

## How It Works

- The user can:
  - Enter reminder details and a reminder date.
  - Choose their preferred notification methods (Email or WhatsApp) using checkboxes.
  - Provide additional details (email or WhatsApp number) if the respective checkbox is selected.
- On form submission:
  - The data is logged to the console.
  - The form data is stored in local storage.
  - The form is reset to its default state.

## Skills Practiced

- React controlled components
- Conditional rendering
- Event handling in forms
- Local storage implementation
- Clean, readable styling with plain CSS

## Usage

To use this component, simply include it in your React project and ensure the `ReminderForm.css` file is present for styling. Modify as needed to suit your application's requirements.

Happy coding!