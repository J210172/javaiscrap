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
    
    if (es_primo(numero_primo))
        add_alert('#result', `El numero ${numero_primo} es primo`, 'success');
    else
        add_alert('#result', `El numero ${numero_primo} no es primo`, 'warning');
}

/**
 * TODO: fix this shit;
 * @param {*} num 
 * @returns 
 */
function es_primo(num) {
    for (let i = 1; i < num; i++) {
        if (num % i == 0)
            return false; 
    }
    return true;
}