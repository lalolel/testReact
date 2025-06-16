import React, { useState } from 'react';

function Contact() {
  // Password that users need to enter to access contact info
  const password = 'swordfish';
  
  // Task 1: useState hook to track authorization status
  // Initially set to false so contact info is hidden by default
  const [authorized, setAuthorized] = useState(false);

  // Function to handle form submission and check password
  function handleSubmit(e) {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Get the password entered by the user
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    
    // Check if entered password matches the correct password
    const auth = enteredPassword === password;
    
    // Update authorization status based on password check
    setAuthorized(auth);
  }

  // Task 4: Create login form JSX element
  // This form will be shown when user is not authorized
  const login = (
    <form action="#" onSubmit={handleSubmit}>
      {/* Task 5: Password input field */}
      <input 
        type="password" 
        placeholder="Password" 
      />
      {/* Task 5: Submit button */}
      <input 
        type="submit" 
        value="Submit"
      />
    </form>
  );

  // Task 6: Create contact info JSX element
  // This contains the sensitive contact information
  const contactInfo = (
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
  );

  return (
    <div id="authorization">
      {/* Task 2: Conditional rendering for header text */}
      {/* Show "Contact" if authorized, "Enter the Password" if not */}
      <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
      
      {/* Task 7: Conditional rendering using ternary operator */}
      {/* Show contact info if authorized, login form if not */}
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;
