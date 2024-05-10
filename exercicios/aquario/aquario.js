function calcularVolume() {
    const comprimento = Number(document.getElementById("comprimento").value);
    const largura = Number(document.getElementById("largura").value);
    const altura = Number(document.getElementById("altura").value);

    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura)) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para todos os campos.";
        return;
    }

    const volumeCmCubicos = comprimento * largura * altura;
    const volumeLitros = volumeCmCubicos / 1000;

    document.getElementById("resultado").textContent = `O volume do aquário é de ${volumeLitros.toFixed(2)} litros.`;
}
