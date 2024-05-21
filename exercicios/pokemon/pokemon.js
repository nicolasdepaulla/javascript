/**
 * sortear uma carta
 * @author Nicolas de Paula
 */

function sortearCarta() {
    //            [0] [1] [2] [3]

    let nipes = ["✷", "❋", "✿", "❁"]
    //           [0] [1] [2] [3] [4] 
    let faces = ["arceus", "bulbasaur", "pikachu", "mewtwo",]

    // SORTEIO DO INDICE DOS VETORES
    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 4)]


    // console.log(`${face} ${nipe}`)


    // determinar a cor com base no nipe sorteado antes de exibir a carta
    let cor

    if (nipe === 'pikachu') {
        document.getElementById("simbolo").innerText = "✷"



    }

    else {
        cor = '#000000' // preto
    }


    // renderizar (desenhar, exibir, "dar vida") a carta
    document.getElementById('supEsq').innerHTML = `<div> ${face}</div> <div> ${nipe} </div>`



    document.getElementById('infDir').innerHTML = `<div> ${face} </div> <div>${nipe}</div>`

    //aplicar a cor
    document.getElementById('supEsq').style.
        color = cor // adiciona css


    document.getElementById('centro').style.backgroundColor = ''; // ou a cor que quiser

    document.getElementById('infDir').style.
        color = cor // adiciona css

    //atualizar centro da carta 

    if (face === 'arceus') {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/arceus.png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>Arceus ❋</p>`
        document.getElementById
            ('infDir').innerHTML = `<p>ShadowClaw 100 PTS</p>`
            document.getElementById('centro').style.backgroundColor = 'gray';
   
        } else if (face === 'bulbasaur') {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/bulba.png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>bulbasaur ✿</p>`
        document.getElementById
            ('infDir').innerHTML = `<p>SeedBomb 10 PTS</p>`
        document.getElementById('centro').style.backgroundColor = 'green';

    } else if (face === 'mewtwo') {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/mewtwo.png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>mewtwo ❁</p>`
        document.getElementById
            ('infDir').innerHTML = `<p>Thunderbolt 110 PTS</p>`
        document.getElementById('centro').style.backgroundColor = 'purple';
        

    } else {
        document.getElementById
            ('centro').innerHTML = `<img src="./img/pikachu.png"> </img>`
        document.getElementById
            ('supEsq').innerHTML = `<p>pikachu ✷</p>`
        document.getElementById
            ('infDir').innerHTML = `<p>TailWhip 50 PTS</p>`
            document.getElementById('centro').style.backgroundColor = 'yellow';

    }
}
