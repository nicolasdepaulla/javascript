function calculateBodyFat() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const triceps = parseFloat(document.getElementById('triceps').value);
    const biceps = parseFloat(document.getElementById('biceps').value);
    const subscapular = parseFloat(document.getElementById('subscapular').value);
    const suprailiac = parseFloat(document.getElementById('suprailiac').value);

    if (isNaN(age) || isNaN(triceps) || isNaN(biceps) || isNaN(subscapular) || isNaN(suprailiac)) {
        document.getElementById('result').innerText = 'Por favor, insira todos os valores corretamente.';
        return;
    }

    const sumOfFolds = triceps + biceps + subscapular + suprailiac
    let bodyDensity

    if (gender === 'male') {
        bodyDensity = 1.1620 - (0.0630 * Math.log10(sumOfFolds))
    } else {
        bodyDensity = 1.1599 - (0.0717 * Math.log10(sumOfFolds))
    }

    const bodyFatPercentage = (495 / bodyDensity) - 450

    document.getElementById('result').innerText = `Percentual de Gordura: ${bodyFatPercentage.toFixed(2)}%`
}

function clearFields() {
    document.getElementById('gender').value = 'male'
    document.getElementById('age').value
    document.getElementById('triceps').value
    document.getElementById('biceps').value 
    document.getElementById('subscapular').value
    document.getElementById('suprailiac').value 
    document.getElementById('result').innerText 
}
