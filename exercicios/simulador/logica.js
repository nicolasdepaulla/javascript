/**
 * JS- Simulador de operadores lógicos
 * @author Nicolas de paula Pacheco
 */

//valor recebido
//1  acender lampada
//2 apagar lampada
//3 quebrar a lampada
let valor

//Estado da lâmpada
let quebrada = false

function simular(valor) {

    // quebrar a Lâmpada
    if (valor === 3) {
        let beep = new Audio()
        beep.src ="./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
        quebrada = true
    }

}