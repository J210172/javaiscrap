$(function() {
    let button = document.querySelectorAll("#toping_price_button");
    button.forEach(n => n.onclick = toping_price_button);
});

function toping_price_button() {
    let toping_input = document.querySelector("#toping");
    let price = 1.9;
    let added_price = 0;
    let topping = toping_input.value.toLowerCase();
    let message = `<p>El helado cuesta “inicialmente” ${ price }.</p>`;

    if (!result || !toping) throw new Error("No hay input#toping o/y div#result")

    switch (topping) {
        case "oreo":
            added_price = 1.0;
            break;
        case "kitkat":
            added_price = 1.5;
            break;
        case "brownie":
            added_price = 0.75;
            break;
        case "lacasitos":
            added_price = 0.95;
            break;
        default:
            message += "<p>No tenemos este topping, lo sentimos</p>";
    }

    if (added_price != 0) {
        message += `<p>El toping '${topping}' cuesta '${ added_price }'</p>`;
        message += `<p>El helado con el toping elejido cuesta '${ price + added_price }'</p>`;
    }

    add_message('#result', 'Resultado', message, {centered: true});
}

