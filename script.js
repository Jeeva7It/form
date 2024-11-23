function validateForm(event) {
    let isValid = true;

    // Reset error messages initially
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate name
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
        isValid = false;
    }

    // If form is invalid, prevent submission
    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    } else {
        // Show success message if validation passes
        alert('Form submitted successfully!');
    }
}

// Add event listener for form submission
document.getElementById("myForm").addEventListener("submit", validateForm);
