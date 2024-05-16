/**
 * Desconto para PDV
 * @author Nicolas de Paula Pacheco
 */

let totalC, desc, Pago, end

function total() {
    totalC = Number(frmPdv.txtTotal.value)
    desc = Number(frmPdv.txtPorcentagem.value)

    let totalDesconto = (totalC * desc) / 100
    end = totalC - totalDesconto

    frmPdv.txtDesconto.value = `${totalDesconto}`
    frmPdv.txtTotalDesconto.value = `${end}`
}

function calcularTroco() {
    Pago = Number(frmPdv.txtValorPago.value)
    end = Number(frmPdv.txtTotalDesconto.value)
    let trocoFinal = Pago - end

    frmPdv.txtTroco.value = `${trocoFinal}`
}