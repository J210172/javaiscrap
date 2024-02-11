$(function() {
    let button = document.querySelectorAll("#dame_2_enteros_menores");
    button.forEach(n => n.onclick = dame_2_enteros_menores_button);
});

function dame_2_enteros_menores_button() {    
    let numero_entero = document.querySelector("#numero_entero")?.value;
    let numeros = []
    
    if (!numero_entero)
        add_alert('#result', 'Tienes que cumplimentar el campo de numero entero', 'danger');

    let num;
    while (!numeros.includes(num) && numeros.length < 3)
        num = Math.round(numero_entero-100, numero_entero);
    
    
    add_alert('#result', `2 enteros menores a ${ numero_entero }: '${ numeros.join(', ') }'`, 'success')
}

function obtenerImporteConImpuestos(importe, iva) {

}