const firstName = document.querySelector("input#first-name");
const firstNameError = document.querySelector("input#first-name + span");

const email = document.querySelector("input#email");
const emailError = document.querySelector("input#email + span");

const pwd = document.querySelector("input#pwd");
const pwdError = document.querySelector("input#pwd + span");

const confirmPwd = document.querySelector("input#confirm-pwd");
const confirmPwdError = document.querySelector("input#confirm-pwd + span");

let [firstNameEL, emailEL, pwdEL, confirmPwdEL] = [false, false, false, false];

const form = document.querySelector("form#signup");

form.addEventListener("submit", (event) => {
    handleNameError(event);
    handleEmailError(event);
    handlePwdError(event);
    handleConfirmPwdError(event);
}, false);

// First Name
firstName.addEventListener("blur", (event) => handleNameError(event), {once: true}); 
    // blur event activates when element loses focus

function handleNameError(event) {
    if (firstName.validity.valid) {
        firstNameError.className = "error";
        firstNameError.textContent = "";
    }
    else {
        firstNameError.className = "error active";
        event.preventDefault();
        if (firstName.validity.tooShort) {
            firstNameError.textContent = `Name must be at least ${firstName.getAttribute("minlength")} letters long`;   
        }
        else if (firstName.validity.valueMissing) {
            firstNameError.textContent = "First name is required";
        }
        else {
            firstNameError.textContent = "Value invalid";
        }
    }
    if (!firstNameEL) {
        firstName.addEventListener("input", (event) => handleNameError(event));
        firstNameEL = true;
    }
}

// Email
email.addEventListener("blur", (event) => handleEmailError(event), {once: true});

function handleEmailError(event) {
    if (email.validity.valid) {
        emailError.className = "error";
        emailError.textContent = "";
    }
    else {
        emailError.className = "error active";
        event.preventDefault();
        if (email.validity.typeMismatch) {
            emailError.textContent = "Email required e.g. name@example.com";   
        }
        else if (email.validity.valueMissing) {
            emailError.textContent = "Email is required";
        }
        else {
            emailError.textContent = "Value invalid";
        }
    }
    if (!emailEL) {
        email.addEventListener("input", (event) => handleEmailError(event));
        emailEL = true;
    }
}

// First password field should be valid
pwd.addEventListener("blur", (event) => handlePwdError(event), {once: true});

function handlePwdError(event) {
    if (pwd.validity.valid) {
        pwdError.className = "error";
        pwdError.textContent = "";
    }
    else {
        pwdError.className = "error active";
        event.preventDefault();
        if (pwd.validity.tooShort) {
            pwdError.textContent = `Password should be at least ${pwd.getAttribute("minlength")} characteres long`;
        }
        else if (pwd.validity.valueMissing) {
            pwdError.textContent = "A password is required";
        }
        else {
            pwdError.textContent = "Password invalid";
        }
    }
    if (!pwdEL) {
        pwd.addEventListener("input", (event) => handlePwdError(event));
        pwdEL = true;
    }
}

// Passwords should match
confirmPwd.addEventListener("input", (event) => handleConfirmPwdError(event));

function handleConfirmPwdError(event) {
    if (pwd.value !== confirmPwd.value) {
        confirmPwdError.textContent = "Passwords do not match";
        confirmPwdError.className = "error active";
        event.preventDefault();
        console.log('hit!');
    }
    else {
        confirmPwdError.textContent = "";
        confirmPwdError.className = "error";
    }
    if (!confirmPwdEL) {
        pwd.addEventListener("input", (event) => handleConfirmPwdError(event));
        confirmPwdEL = true;
    }
}

