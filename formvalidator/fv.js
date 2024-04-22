const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
    // Evita que o formulário seja enviado
    event.preventDefault();
    let hasError = false;

    if (username.value === "") {
        username.classList.add("error");
        hasError = true;
    } else {
        username.classList.remove("error");
    }

    if (password.value === "") {
        password.classList.add("error");
        hasError = true;
    } else {
        password.classList.remove("error");
    }

    if (hasError) {
        alert("Insere valores válidos nos campos do formulário!");
    } else {
        alert("Formulário enviado com sucesso!");
    }
});