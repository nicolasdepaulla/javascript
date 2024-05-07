/*
@author nicolas de paula pacheco
*/

let num1, num2, num3, num4 
function calcular() {
    num1 = Number(frmflex.textn1.value)   
    num2 = Number(frmflex.textn2.value) 
    num3 = Number(frmflex.textn3.value)
    num4 = Number(frmflex.textn4.value)

    //validação de campos obrigatorio
    if (frmflex.textn1.value === "") {
        alert("prencha o valor da n1")
        frmflex.textn1.value.focus()
    } else if (frmflex.textn2.value === "") {
        alert("prencha o valor da n2")
        frmflex.textn2.value.focus()
    } else if (frmflex.textn3.value === "") {
        alert("prencha o valor da n3")
        frmflex.textn3.value.focus()
    } else if (frmflex.textn4.value === "") {
        alert("prencha o valor da n4")
        frmflex.textn4.value.focus() }
    
    }