/**
 * Simples slide show(exemplo de uso do array)
 * @author nicolas de paula Pacheco
 */

let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 //3000 milisegundos
// 3000 é um ajuste para 3 slides a cada 1 segundo
let indice = 0
show()

function show() {
    document.getElementById('slide').className += 'FadeOut'
    setTimeout(() => {
        document.getElementById('slide').src = (`img/${slides[indice]}`)
        document.getElementById('slide').className ="" 
    }, 1000) // ajuste 1: trocar slide a cada 1 segundo
    indice++
    if (indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo) // repetir o processo infinitamente
    // ajustar o intervalo de acordo com o número de slides e tempo
    // de troca entre eles
    // (ajuste 2)
}