/**
 * Fundamentos da POO
 * abstração - herança - pólimorfismo
 * @author Nicolas de Paula Pacheco
 */

// abstração (classe Modelo)
class Bloco {
    // atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações
    criarBloco() {
        console.log("------------------")
        console.log("┎┑")
        console.log("└┘")
        console.log(`bloco de ${this.textura}`)
        console.log(`resistencia: ${this.resistencia}`)
    }

    construir() {
        console.log(`bloco de ${this.textura} colocado.`)
    }

    minerar() {
        console.log("▄ ▄ ▄ ▄ Recursos obtidos!")
    }
}

// Herança (subclasse da classe modelo)
class Enxada extends Bloco {
    // Atributos
    constructor(textura, resistencia, conquista) {
        super(textura, resistencia)
        this.conquista = conquista
    }
    // Ações
    criarEnxada() {        
        console.log("----------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`resistência: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._. terra arada!")
        if(this.conquista === true) {
            console.log("* Conquista obtida!")
        }
    }

    //pólimorfismo (sobrescrever o método existente da classe pai)
    minerar() {
        console.log("♰ Dano atribuído")
    }

}

//******* MUNDO ********/
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")

// Instaciando um objeto
const bloco1 = new Bloco("Terra", 1)
bloco1.criarBloco()
bloco1.construir()


const bloco2 = new Bloco("Madeira", 2)
bloco2.criarBloco()
bloco2.construir()


const bloco3 = new Bloco("Pedra", 5)
bloco3.criarBloco()
bloco3.minerar()


const enxada1 = new Enxada("madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()