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

    const desconto =(total % desconto)

    
    
}