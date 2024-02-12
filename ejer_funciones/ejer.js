$(function() {
    let button = document.querySelectorAll("#calcula_iva_button");
    button.forEach(n => n.onclick = calcula_iva_button);
});

function calcula_iva_button() {
    let importe = document.querySelector("#importe")?.value;
    let iva = document.querySelector("#iva")?.value;
    let importe_final = obtenerImporteConImpuestos(importe, iva);
    
    if (!iva || !importe) {
        add_alert('#result', 'Tienes que cumplimentar los campos importe e iva', 'danger');
    } else if (importe_final > 99) {
        let message = `No tienes dinero suficiente`;
        add_alert('#result', message, 'warning');
    } else { 
        let message = `El producto con impuestos cuesta: '${ importe_final }' euros`;
        add_alert('#result', message, 'info');
    }
}

function obtenerImporteConImpuestos(importe, iva) {
    return (( iva / 100 + 1 ) * importe).toFixed(2);
}