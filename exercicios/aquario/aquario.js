function calcularVolume() {
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const largura = parseFloat(document.getElementById("largura").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura)) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para todos os campos.";
        return;
    }

    const volumeCmCubicos = comprimento * largura * altura;
    const volumeLitros = volumeCmCubicos / 1000;

    document.getElementById("resultado").textContent = `O volume do aquário é de ${volumeLitros.toFixed(2)} litros.`;
}