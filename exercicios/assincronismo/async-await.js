/**}
 * Assincronismo
 * async - await 
 * @author nicolas de Paula Pacheco
 */

// importar blibioteca nativa(javascript) para trabalhar
// com manipulação de arquivos

const fs = require('fs')

// função para criar um arquivo 
async function criarArquivo() {
    let conteudo = "Nicolas de Paula\nexemplo de uso dos recursos async - await"
    await gravarArquivos('teste.txt', conteudo)
}

// função para gravar um arquivo
async function gravarArquivos(local, conteudo) {
    try {
        await fs.promises.writeFile(local, conteudo)
        console.log("Arquivo criado com sucesso!")
    } catch (error) {
        console.log(error)
    }
}

criarArquivo()