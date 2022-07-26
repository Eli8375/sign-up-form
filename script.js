let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");
let passwordMessage = document.getElementById("message2");
let createAccountButton = document.getElementById("create-account");
let form = document.getElementById("my-form");

let confirmPassword = () => {
    if (confirmPasswordInput.value === "") {
        return;
    }
    else if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.borderColor = "#ff000080";
        confirmPasswordInput.title = "password did not match";
        passwordMessage.innerText = "passwords do not match";
        return false;
    }
    else if (passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordInput.style.borderColor = "#00800080";
        passwordMessage.innerText = "passwords match";
        return true;
    }
}

confirmPasswordInput.addEventListener("keyup", () => {
    createAccountButton.disabled = false;
    if (passwordInput.value !== confirmPasswordInput.value) {
        createAccountButton.disabled = true;
    }
})

confirmPassword();
