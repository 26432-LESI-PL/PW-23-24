const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", (event) => {
    // Evita que o formulário seja enviado
    event.preventDefault();
    let hasError = false;

    if (username.value === "") {
        username.classList.add("error");
        usernameError.textContent = "O campo de utilizador não pode estar vazio!";
        usernameError.style.display = "block";
        hasError = true;
    } else {
        username.classList.remove("error");
        usernameError.textContent = "";
    }

    if (password.value === "") {
        password.classList.add("error");
        passwordError.textContent = "O campo de palavra-passe não pode estar vazio!";
        passwordError.style.display = "block";
        hasError = true;
    } else {
        password.classList.remove("error");
        passwordError.textContent = "";
    }

    if (!hasError) {
        alert("Formulário enviado com sucesso!");
    }
});
 

username.addEventListener("blur", () => {
    if (username.value === "") {
        username.classList.add("error");
        usernameError.textContent = "O campo de utilizador não pode estar vazio!";
        usernameError.style.display = "block";
    } else {
        username.classList.remove("error");
        usernameError.textContent = "";
    }
});

password.addEventListener("blur", () => {
    if (password.value === "") {
        password.classList.add("error");
        passwordError.textContent = "O campo de palavra-passe não pode estar vazio!";
        passwordError.style.display = "block";
    } else {
        password.classList.remove("error");
        passwordError.textContent = "";
    }
});