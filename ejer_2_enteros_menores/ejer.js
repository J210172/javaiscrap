$(function() {
    let button = document.querySelectorAll("#dame_2_enteros_menores");
    button.forEach(n => n.onclick = dame_2_enteros_menores_button);
});

function dame_2_enteros_menores_button() {    
    let numero_entero = document.querySelector("#numero_entero")?.value;
    let pos_validas = 100;
    let numeros = []
    
    if (!numero_entero) {
        let message = 'Tienes que cumplimentar el campo de numero entero'
        add_alert('#result',message, 'danger');
        throw new Error(message);
    }


    let num;
    while (numeros.length < 2) {
        num = Math.ceil(Math.random()*pos_validas+(numero_entero-pos_validas-1));
        if (!numeros.includes(num)) numeros.push(num);
    }
    
    
    add_alert('#result', `2 enteros menores a ${ numero_entero }: '${ numeros.join(', ') }'`, 'success')
}
