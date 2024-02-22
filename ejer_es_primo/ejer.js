$(function() {
    let button = document.querySelectorAll("#comprueba_si_es_primo");
    button.forEach(n => n.onclick = comprueba_si_es_primo_button);
});

function comprueba_si_es_primo_button() {    
    let numero_primo = document.querySelector("#numero_primo")?.value;
    
    if (!numero_primo) {
        let message = 'Tienes que cumplimentar el campo de numero entero'
        add_alert('#result',message, 'danger');
        throw new Error(message);
    }
    
    let point = Date.now()
    let primo = es_primo(numero_primo);
    let interval = (Date.now() - point) / 1000;

    if (primo)
        add_alert('#result', `El numero ${numero_primo} es primo (${interval}s)`, 'success');
    else
        add_alert('#result', `El numero ${numero_primo} no es primo  (${interval}s)`, 'warning');
}

/**
 * Devuelve true si el numero `num` es primo, devuelve false en caso contrario
 * @param {*} num 
 * @returns 
 */
function es_primo(num) {
    let max = Math.ceil(num/2);
    if (num < 1) return false;
    if (num == 2) return false;
    for (let i = 2; i < max; i++) {
        if (num % i == 0) return false; 
    }
    return true;
}