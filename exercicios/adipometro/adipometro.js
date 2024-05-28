function calcularGordura() {
    const genero = document.getElementById('gender').value;
    const idade = parseInt(document.getElementById('age').value);
    const triceps = parseFloat(document.getElementById('triceps').value);
    const biceps = parseFloat(document.getElementById('biceps').value);
    const subscapular = parseFloat(document.getElementById('subscapular').value);
    const suprailiaca = parseFloat(document.getElementById('suprailiac').value);

    if (isNaN(idade) || isNaN(triceps) || isNaN(biceps) || isNaN(subscapular) || isNaN(suprailiaca)) {
        document.getElementById('result').innerText = 'Por favor, insira todos os valores corretamente.';
        return;
    }

    const soma = triceps + biceps + subscapular + suprailiaca
    let densidade

    if (genero === 'feminino') {
        densidade = 1.1620 - (0.0630 * Math.log10(soma))
    } else {
        densidade = 1.1599 - (0.0717 * Math.log10(soma))
    }

    const bodyFatPercentage = (495 / densidade) - 450

    document.getElementById('result').innerText = `Percentual de Gordura: ${bodyFatPercentage.toFixed(2)}%`
}

function limpar() {
    document.getElementById('result').innerText = ''; 
}