// Function to handle form submission
function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Perform form validation
    if (!validateForm()) {
      return;
    }
  
    // If validation passes, collect form data
    const formData = {
      name: document.getElementById('name').value,
      dob: document.getElementById('dob').value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
      dietaryRestrictions: document.getElementById('dietary-restrictions').value,
      tshirtSize: document.getElementById('tshirt-size').value
    };
  
    // Submit the form data (you can handle this part based on your requirements)
    console.log('Form data:', formData);
  
    // Display a success message or navigate to another page
    alert('Form submitted successfully!');
    // Reset the form after successful submission
    document.getElementById('registration-form').reset();
  }
  
  // Function to validate the form
  function validateForm() {
    // Perform validation for each field
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
  
    // Check if any required field is empty
    if (!name || !dob || !gender || !email || !phone || !state) {
      alert('Please fill in all required fields.');
      return false;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate phone number format (assuming a 10-digit number)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number (10 digits).');
      return false;
    }
  
    // Form validation passed
    return true;
  }
  
  // Event listener for form submission
  document.getElementById('registration-form').addEventListener('submit', handleSubmit);

  // Disable autofill for each input field
  const inputFields = document.querySelectorAll('input');
  inputFields.forEach((input) => {
    input.setAttribute('autocomplete', 'off');
  });
