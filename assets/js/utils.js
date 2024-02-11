const add_alert = (container_selector, message, type, closable = false, prepend = true) => {
    const container = document.querySelector(container_selector);
    const alert_element = document.createElement('div');
    
    let button = '';
   
    if (closable)
        button = '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

    let temp_element = [
    `<div class="alert alert-${type} ${ closable ? "" : "p-2" } alert-dismissible" role="alert">${button}`,
    `   <div>${message}</div>`,
    '</div>'
    ];

    
    alert_element.innerHTML = temp_element.join('');
    
    if (prepend)
        container.prepend(alert_element);
    else 
        container.append(alert_element);
};

const add_message = function(container_selector, message, closable = false, prepend = true) {
    const container = document.querySelector(container_selector);
    const message_element = document.createElement('div');
    
    let button = closable ? '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>' : '';
    
    message_element.innerHTML = [
        '<div class="toast show mt-3" role="alert" aria-live="assertive" aria-atomic="true">',
        '    <div class="toast-header">',
        `       <strong class="me-auto">Resultado</strong>`,
        `       ${button}`,
        '    </div>',
        `    <div class="toast-body">${message}</div>`,
        '</div>'
    ].join('')

    if (prepend)
        container.prepend(message_element);
    else
        container.append(message_element);
}