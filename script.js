let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");



let confirmPassword = () => {
    if (passwordInput.textContent !== confirmPasswordInput.textContent) {
        confirmPasswordInput.style.borderColor = "red";
        confirmPasswordInput.title = "password did not match";
    }
    else if (passwordInput.textContent !== confirmPasswordInput.textContent) {
        confirmPasswordInput.style.borderColor = "green";
    }
}


let main = () => {
    confirmPassword();
}

main();