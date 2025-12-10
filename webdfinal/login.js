const emailField = document.getElementById("email");
const passField = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const invalidError = document.getElementById("invalidError");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = emailField.value.trim();
    let pass = passField.value.trim();

    let valid = true;

    // Hide all errors first
    emailError.style.display = "none";
    passError.style.display = "none";
    invalidError.style.display = "none";

    // Email validation
    if (!email.includes("@") || email.length < 5) {
        emailError.style.display = "block";
        valid = false;
    }

    // Password validation
    if (pass.length < 8) {
        passError.style.display = "block";
        valid = false;
    }

    // If fields are valid, check credentials
    if (valid) {
        
            alert("Login Successful!");
             emailField.value = "";
            passField.value = "";
        } else {
            invalidError.style.display = "block";
        }
    }
);
