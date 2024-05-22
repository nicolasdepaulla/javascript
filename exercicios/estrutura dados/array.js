/**
 *  Estrutura de dados
 * array (vetor e matriz)
 * @author Nicolas de Paula Pacheco
 */

let alunosEM1 = ["vitor", "maria", "agatha", "mateus", "taina", "nicolas"]
console.log(typeof alunosEM1)
// determinando o tamanho de um array
console.log(alunosEM1.length)
// exibindo os dados de uma array (CRUD create)
console.log(alunosEM1[1])
console.log(alunosEM1)
console.table(alunosEM1)
// adicionando dados ao array (CRUD Read)
alunosEM1.push("jorge")
console.table(alunosEM1)
// alterando um dado do array (CRUD update)
alunosEM1[0] = "victor"
console.table(alunosEM1)
// axcluindo um dado do array 
alunosEM1.pop() // exclui o ultimo registro
console.table(alunosEM1)
delete alunosEM1[1]// exclui o registro com o indice
console.table(alunosEM1)
// percorrendio um array
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)
//laço for 
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
// forEach -laço for que foi criado para percorrer array
notas.forEach((n) => {
    console.log(n)
})

//  map ()
// exemplo 1: adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)
// exemplo 2: conversão do ssistema de pontos para letras
// NA  (não atendeu(nota < 5))
// PA  (parcialmente atendido(nota entre 5 e 7 ))
// A   (atendeu(nota > 7))
let notasConveridas = notas.map((nc) => {
    if (nc < 5) {
        return ("NA")
    } else if (nc > 5) {
        return ("A")
    } else {
        return ("PA")
    }
})
console.log(notas)
console.log(notasConveridas)

// iniciando um array como um objeto
console.clear()
let alunosEM2 = new Array("tony", "peter", "thor", "natasha")
console.log(alunosEM2)
console.table(alunosEM2)

// estrutura de dados
let alunosEM3 = [
    {
        nome: "bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "barry",
        idade: 23,
        bolsista: true
    },
    {
        nome: "necklace",
        idade: 20,
        bolsista: true
    }
]

console.log(alunosEM3)
console.table(alunosEM3)

//filtros
// ordenar de A - Z
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)
// filtro
// ordenar por idade do menor para o maior


alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})
console.table(alunosEM3)

// criando uma cópia para exibição
let alunosOrdenados = [...alunosEM3]


alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

// buscas personalizadas em um array
//exemplo 1:alunos bolsistas
console.log(alunosEM3.filter((b) => {

    return b.bolsista === true
}))
// exemplo 2: alunos com idade superior a 40 anos
console.log(alunosEM3.filter((i) => {

    return i.idade > 40
}))
