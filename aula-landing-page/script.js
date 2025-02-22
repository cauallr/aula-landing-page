document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Obter os valores dos campos e remover espaços em branco
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("mail").value.trim();
    var message = document.getElementById("message").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (name !== "" && email !== "" && message !== "") {
        document.getElementById("successMessage").style.display = "block";
        // Limpar os campos do formulário
        this.reset();
    } else {
        document.getElementById("successMessage").style.display = "none";
        alert("Por favor, preencha todos os campos.");
    }
});