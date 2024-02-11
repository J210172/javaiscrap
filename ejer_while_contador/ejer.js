$(function() {
    let button = document.querySelectorAll("#activar_contador");
    button.forEach(n => n.onclick = activar_contador);
});

function activar_contador() {
    let i = 0
    while (i<11)
        add_alert('#result', `Contador: ${ i++ }`, 'success')
}

function obtenerImporteConImpuestos(importe, iva) {

}