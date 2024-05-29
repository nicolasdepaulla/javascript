/**
 * Assincronismo
 * promisses
 * @author Nicolas de Paula Pacheco
 */
// importar blibiotecas
const read = require('readline-sync')

// Simulação do banco de dados, usando uma estrutura de dados
const database = {
    admin: {
        usuario: "administrador",
        senha: "password",
    },
    prof: {
        usuario: "nicolas de paula",
        senha: "123456"
    }
}

// Autenticação do usuário
console.clear()
console.log("--------------------------------")
console.log(" USUÁRIO")
console.log("--------------------------------")
// Entrada de dados (captura do login e senha)
let login = read.question("Login: ")
let senha = read.question("senha: ")
console.log("--------------------------------")
// executando uma função assincrona com uso de promise
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`erro de autenticação. ${error}`)
    })



// Função logar ( autenticação do usuário)
function logar(login, senha) {
    // uso de promisse para trabalhar 
    //a requisição ao banco de dados de forma assincrona
    return new Promise((resolve, reject) => {
        // Uso do set timeout para simular um atraso na requisição
        setTimeout(() => {
            // lógica para autenticar um usuário
            // o primeiro if verifica se existe o login
            if (database.hasOwnProperty(login)) {
                // o segundo if verifica se a senha está correta
                if (database[login].senha === senha) {
                    resolve(`autenticação bem sucedida. olá ${database[login].usuario}`)
                } else {
                    reject("senha incorreta. por favor tente novamente")
                }

            } else {
                reject("usuário não encontrado. Por favor, verifique o login")
            }
        })
    }, 2000)
}
