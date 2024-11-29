document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const lastnameInput = document.getElementById('lastname');
    const passwordInput = document.getElementById('password');
    const dobInput = document.getElementById('dob');
    const phoneInput = document.getElementById('phone');
    const genderInputs = document.getElementsByName('gender');
    const agreeCheckbox = document.getElementById('agree');

    // Function to validate the form and log the input data to the console
    function validateForm(event) {
        event.preventDefault(); // Prevent the form from submitting

        let valid = true;
        let errorMessage = "";
        
        // Full Name validation
        const name = nameInput.value.trim();
        if (name === "") {
            errorMessage += "First Name is required.\n";
            valid = false;
        } else {
            console.log("First Name: " + name);
        }

        // Last Name validation
        const lastname = lastnameInput.value.trim();
        if (lastname === "") {
            errorMessage += "Last Name is required.\n";
            valid = false;
        } else {
            console.log("Last Name: " + lastname);
        }

        // Email validation (must be in valid email format)
        const email = emailInput.value.trim();
        if (email === "") {
            errorMessage += "Email is required.\n";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorMessage += "Please enter a valid email address.\n";
            valid = false;
        } else {
            console.log("Email: " + email);
        }

        // Password validation (required and at least 6 characters)
        const password = passwordInput.value.trim();
        if (password === "") {
            errorMessage += "Password is required.\n";
            valid = false;
        } else if (password.length < 6) {
            errorMessage += "Password must be at least 6 characters.\n";
            valid = false;
        } else {
            console.log("Password: " + password);
        }

        // Date of Birth validation (required)
        const dob = dobInput.value.trim();
        if (dob === "") {
            errorMessage += "Date of Birth is required.\n";
            valid = false;
        } else {
            console.log("Date of Birth: " + dob);
        }

        // Phone validation (must be a 10-digit number)
        const phone = phoneInput.value.trim();
        if (phone === "") {
            errorMessage += "Phone Number is required.\n";
            valid = false;
        } else if (!/^\d{11}$/.test(phone)) {
            errorMessage += "Phone Number must be a valid 10-digit number.\n";
            valid = false;
        } else {
            console.log("Phone Number: " + phone);
        }

        // Gender validation (at least one option selected)
        let genderSelected = false;
        for (let i = 0; i < genderInputs.length; i++) {
            if (genderInputs[i].checked) {
                genderSelected = true;
                console.log("Gender: " + genderInputs[i].value);
                break;
            }
        }
        if (!genderSelected) {
            errorMessage += "Gender is required.\n";
            valid = false;
        }

        // Agree to Terms validation (checkbox)
        if (!agreeCheckbox.checked) {
            errorMessage += "You must agree to the Terms and Conditions.\n";
            valid = false;
        } else {
            console.log("Agree to Terms: " + agreeCheckbox.checked);
        }

        // If there were any validation errors, show an alert
        if (!valid) {
            alert(errorMessage);
        } else {
            // If the form is valid, log all the data
            console.log("Form submitted successfully with the following data:");
            console.log("First Name: " + name);
            console.log("Last Name: " + lastname);
            console.log("Email: " + email);
            console.log("Password: " + password);
            console.log("Date of Birth: " + dob);
            console.log("Phone Number: " + phone);
            console.log("Gender: " + document.querySelector('input[name="gender"]:checked').value);
            console.log("Agree to Terms: " + agreeCheckbox.checked);
        }
    }

    // Event listener for form submission
    form.addEventListener('submit', validateForm);
});
