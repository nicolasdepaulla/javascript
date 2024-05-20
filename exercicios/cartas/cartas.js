/**
 * sortear uma carta
 * @author Nicolas de Paula
 */
 
function sortearCarta(){
    //            [0] [1] [2] [3]
    let nipes = ["♠ ","♥","♦","♣"]
    //           [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11][12]
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","k"]
 
    // SORTEIO DO INDICE DOS VETORES
    let nipe = nipes[Math.floor (Math.random() * 4)] // (0-3)
    let face = faces[Math.floor (Math.random() * 13)]// (0-12)
 
 
    // console.log(`${face} ${nipe}`)
    

    // determinar a cor com base no nipe sorteado antes de exibir a carta
    let cor

    if(nipe === '♥' || nipe === '♦') {
        cor = '#ff0000' // vermelho
    }else {
        cor = '#000000' // preto
    }

    // renderizar (desenhar, exibir, "dar vida") a carta
    document.getElementById('supEsq').innerHTML = `<div> ${face}</div> <div> ${nipe} </div>`

    document.getElementById('centro').innerHTML = `<div> ${nipe} </div>`

    document.getElementById('infDir').innerHTML = `<div> ${face} </div> <div>${nipe}</div>`

    //aplicar a cor
    document.getElementById('supEsq').style.color = cor // adiciona css
    document.getElementById('centro').style.color = cor // adiciona css
    document.getElementById('infDir').style.color = cor // adiciona css
}
