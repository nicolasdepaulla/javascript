/*
@author nicolas de paula pacheco
*/

let num1, num2, num3, num4
function calcular() {
    num1 = Number(frmflex.textn1.value)
    num2 = Number(frmflex.textn2.value)
    num3 = Number(frmflex.textn3.value)
    num4 = Number(frmflex.textn4.value)

    const resultado =(num1 + num2 + num3 + num4) / 4

    //validação de campos obrigatorio
    if (frmflex.textn1.value === "") {
        alert("prencha o valor de num1")
        frmflex.textn1.value.focus()
    } else if (frmflex.textn2.value === "") {
        alert("prencha o valor de num2")
        frmflex.textn2.value.focus()
    } else if (frmflex.textn3.value === "") {
        alert("prencha o valor de num3")
        frmflex.textn3.value.focus()
    } else if (frmflex.textn4.value === "") {
        alert("prencha o valor de num4")
        frmflex.textn4.value.focus()
    } else {
        if(resultado < 4 ) {
            document.getElementById('status').src = "./img/reprovado.png"
            alert(`A média do aluno é ${resultado}, ele está reprovado!`)
        }else if (resultado >= 7){
            document.getElementById('status').src = "./img/aprovado.png"
            alert(`A média do aluno é ${resultado}, ele está aprovado!`)
        }else {
            document.getElementById('status').src = "./img/recuperacao.png"
            alert(`A média do aluno é ${resultado}, ele está de recuperação!`)
    }
}
}