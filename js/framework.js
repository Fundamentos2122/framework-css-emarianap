const attr_toggle = "data-toggle";
const attr_target = "data-target";
const attr_dismiss = "data-dismiss";
const class_modal = "modal";
const class_show = "show";

document.addEventListener("DOMContentLoaded", function() {
    //Botones que abren un modal    //todos lo elementos que tengan la sintáxis "[data-toggle='modal']"
    let modal_open_buttons = document.querySelectorAll(`[${attr_toggle}='${class_modal}']`) 

    modal_open_buttons.forEach(element => {
        element.addEventListener("click", OpenModal);
    });

    //Botones que cierran un modal    //todos lo elementos que tengan el atributo "[data-dismiss]"
    let modal_close_buttons = document.querySelectorAll(`[${attr_dismiss}]`) 

    modal_close_buttons.forEach(element => {
        element.addEventListener("click", CloseModal);
    });
});

/**
 * Muestra un modal
 * @param {PointerEvent} e 
 */
function OpenModal(e){
    //Obtener el selector del elemento a mostrar
    let modal_selector = e.target.getAttribute(attr_target);

    //Obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //agregar la clase para mostrar el modal
    modal.classList.add(class_show);
}

/**
 * Cerra un modal
 * @param {PointerEvent} e 
 */
 function CloseModal(e){
    //Obtener el selector del elemento a ocultar
    let modal_selector = e.target.getAttribute(attr_dismiss);

    //Obtener el elemento del DOM
    let modal = document.querySelector(modal_selector);

    //Quitar la clase para mostrar el modal
    modal.classList.remove(class_show);
}