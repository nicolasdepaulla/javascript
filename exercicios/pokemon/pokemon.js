/**
 * Cartas pokemon
 * @author nicolas de Paula Pacheco
 */

function sortearCarta(){
     
    let pokemon = ["bulbasaur","arceuss","mewto","pikachuu"]
    
    let carta = pokemon[Math.floor(Math.random() * 4)]
    let meioCarta = document.getElementById('centro')
    
    meioCarta.innerHTML = `<img src="./img/${carta}.png">`
}