/**
 * Agrega una alerta en el selector aportado
 * 
 * @param {String} container_selector Selector donde se intdroducira el mensaje
 * @param {String} titulo El titulo del mensaje
 * @param {String} message Cuerpo del mensaje
 * @param {Boolean} closable Determina si tendra boton para cerrar el mensaje
 * @param {Boolean} prepend Determina si se introducira al inicio o al final
 * @param {Boolean} centered Determina si el mensaje aparecera centrado
 */
const add_alert = (container_selector, message, type, {closable = false, prepend = true} = {}) => {
    const container = document.querySelector(container_selector);
    const alert_element = document.createElement('div');
    
    if (!container)
        throw new Error(`No se encuentra ningun elemento con el selector ${container_selector}`)    
    
    alert_element.classList.add('alert', 'alert-'+type);
    
    if (!closable)
        alert_element.classList.add('p-2');

    alert_element.innerHTML = [
        `<div>${message}</div>`,
        closable ? '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' : ''
    ].join('');

    if (prepend)
        container.prepend(alert_element);
    else
        container.append(alert_element);
};

/**
 * Agrega una caja de mensaje en selector aportado
 * 
 * @param {String} container_selector Selector donde se intdroducira el mensaje
 * @param {String} titulo El titulo del mensaje
 * @param {String} message Cuerpo del mensaje
 * @param {Boolean} closable Determina si tendra boton para cerrar el mensaje
 * @param {Boolean} prepend Determina si se introducira al inicio o al final
 * @param {Boolean} centered Determina si el mensaje aparecera centrado
 */
const add_message = (container_selector, titulo, message, {closable = false, prepend = true, centered = false} = {}) => {
    const container = document.querySelector(container_selector);
    const message_element = document.createElement('div');
    
    if (!container)
        throw new Error(`No se encuentra ningun elemento con el selector ${container_selector}`)
    
    message_element.classList.add('toast', 'show', 'mt-3');
    
    if (centered)
        message_element.classList.add('mx-auto');

    message_element.innerHTML = [
        '<div class="toast-header">',
        `<strong class="me-auto">${titulo}</strong>`,
        closable ? '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>' : '',
        '</div>',
        `<div class="toast-body">${message}</div>`,
    ].join('')

    if (prepend)
        container.prepend(message_element);
    else
        container.append(message_element);
};