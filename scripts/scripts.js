function exponenciacao() {
    const base = document.getElementById('base').value;
    const expoente = document.getElementById('expoente').value;
    const resultado = Math.pow(base, expoente);
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validação adicional pode ser adicionada aqui
    alert('Formulário enviado com sucesso!');
});