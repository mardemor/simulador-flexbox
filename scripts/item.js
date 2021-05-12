const simulacao = document.querySelector('.simulacao');


const buffer = [
    { id: 'elemento1', alignSelf: 'stretch', order: '0', flexGrow: '0', flexShrink: '0', flexBasis: '120px' },
    { id: 'elemento2', alignSelf: 'stretch', order: '0', flexGrow: '0', flexShrink: '0', flexBasis: '120px' },
    { id: 'elemento3', alignSelf: 'stretch', order: '0', flexGrow: '0', flexShrink: '0', flexBasis: '120px' },
]

function elementoChanged(idElemento, formulario) {
    buffer.forEach(elemento => {
        if (elemento.id == idElemento) {
           formulario.alignSelf.value = elemento.alignSelf;
           formulario.order.value = elemento.order;
           formulario.flexGrow.value = elemento.flexGrow;
           formulario.flexShrink.value = elemento.flexShrink;
           formulario.flexBasis.value = elemento.flexBasis;
        }
    }); 
}

function atributoChanged(campo, idElemento) {

    const elemento = document.querySelector(`#${idElemento}`);
    elemento.style[campo.id] = campo.value;
    guardarStatus(campo, idElemento);
}

function guardarStatus(campo, idElemento) {

    buffer.forEach(elemento => {
        if (elemento.id == idElemento) {
            elemento[campo.id] = campo.value;
            console.log(buffer);
        }
    });    
}