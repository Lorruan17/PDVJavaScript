document.addEventListener("DOMContentLoaded", () => {
    // Verifica se o usuário já está logado
    if (localStorage.getItem("isLoggedIn")) {
        window.location.href = "pages/home.html";
    }

    const loginButton = document.querySelector(".btn-login");
    loginButton.addEventListener("click", () => {
        // Aqui você pode validar os campos se necessário
        // Simula o login e salva no localStorage
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "pages/home.html";
    });
});