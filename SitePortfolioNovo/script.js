// Validação e mensagem de confirmação no envio do formulário
document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio automático

    // Exibe a mensagem de confirmação
    document.getElementById('mensagem-confirmacao').style.display = 'block';

    // Limpa o formulário após o envio
    this.reset();
});
