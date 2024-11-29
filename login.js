document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Function to log the field data
    function logFieldData() {
        console.log("Username: ", usernameInput.value);
        console.log("Email: ", emailInput.value);
        console.log("Password: ", passwordInput.value);
    }

    // Add event listeners to each input to log data on change
    usernameInput.addEventListener('input', logFieldData);
    emailInput.addEventListener('input', logFieldData);
    passwordInput.addEventListener('input', logFieldData);

    // Add event listener for form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission until validation is done

        let valid = true;

        // Get input values
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate Username (required)
        if (username === "") {
            alert("Username is required.");
            valid = false;
        }

        if (email === "") {
            alert("Email is required.");
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        if (password === "") {
            alert("Password is required.");
            valid = false;
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            valid = false;
        }

        if (valid) {
            console.log("Login successful!");
            console.log("Form Data: ");
            console.log("Username: ", username);
            console.log("Email: ", email);
            console.log("Password: ", password);
        }
    });
});
