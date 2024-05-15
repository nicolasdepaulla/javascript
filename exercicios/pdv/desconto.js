/**
 * Desconto para PDV
 * @author Nicolas de Paula Pacheco
 */

let total, desconto, pago, troco
function calcular() {
    total = Number(frmflex.txtTotal.value)
    desconto = Number(frmflex.txtPorcentagem.value)
    pago = Number(frmflex.txtvalorPago.value)
    troco = Number(frmflex.txtTroco.value)

    const total = (total)
    const desconto = (desconto)

    //validação de campos obrigatorio
    if (frmflex.txtTotal.value === "") {
        frmflex.txtTotal.value.focus()
    } else if (frmflex.txtPorcentagem.value === "") {
        frmflex.txtPorcentagem.value.focus()
    } else if (frmflex.txtvalorPago.value === "") {
        frmflex.txtvalorPago.value.focus()
    } else if (frmflex.txtTroco.value === "") {
        frmflex.txtTroco.value.focus()
    }
    
}
function limpar() {
    document.getElementById('status').src = "imgg/flex.png"
}