document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('mensagem-confirmacao').style.display = 'block';

    this.reset();
});
