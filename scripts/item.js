const simulationContainer = document.querySelector('#simulationContainer');
const codeContainer = document.querySelector('#codeContainer');

const flexContainerStyles = {'flex-direction': 'row'};
const flexItemsStyles = [
    { 'id': 'item1', 'align-self': 'stretch', 'order': '0', 'flex-grow': '0', 'flex-shrink': '0', 'flex-basis': 'auto' },
    { 'id': 'item2', 'align-self': 'stretch', 'order': '0', 'flex-grow': '0', 'flex-shrink': '0', 'flex-basis': 'auto' },
    { 'id': 'item3', 'align-self': 'stretch', 'order': '0', 'flex-grow': '0', 'flex-shrink': '0', 'flex-basis': 'auto' },
]

const itemChanged = (stylesForm) => {

    const itemsSelectElement = stylesForm['items'];
    flexItemsStyles.forEach(item => {
        if (item.id == itemsSelectElement.value) {
           stylesForm['align-self'].value = item['align-self'];
           stylesForm['order'].value = item['order'];
           stylesForm['flex-grow'].value = item['flex-grow'];
           stylesForm['flex-shrink'].value = item['flex-shrink'];
           stylesForm['flex-basis'].value = item['flex-basis'];
        }
    });
    itemsSelectElement.style['background-color'] = findBgColor(itemsSelectElement.value);  
}

const directionChanged = (selectElement) => {
    simulationContainer.style[selectElement.id] = selectElement.value;
    flexContainerStyles[selectElement.id] = selectElement.value;
    showCode();
}

const styleChanged = (selectElement, itemId) => {

    const item = document.querySelector(`#${itemId}`);
    item.style[selectElement.id] = selectElement.value;
    flexItemsStyles.forEach(item => {
        if (item.id == itemId) {
            item[selectElement.id] = selectElement.value;
        }
    });
    showCode();
}

const findBgColor = (itemId) => {

    switch(itemId) {

        case 'item1':
            return 'khaki';
        case 'item2':
            return 'lightsalmon';
        case 'item3':
            return 'paleturquoise';   

    }
}

const showCode = () => {
    const template = `
        <pre>.container {</pre>
        <pre class="idented">display: flex;</pre>
        <pre class="idented">flex-direction: ${flexContainerStyles['flex-direction']};</pre> 
        <pre>}</pre>
        ${
            flexItemsStyles.map(
                item => `
                    <pre>.${item['id']} {</pre>
                    <pre class="idented">align-self: ${item['align-self']};</pre>
                    <pre class="idented">order: ${item['order']};</pre>
                    <pre class="idented">flex-grow: ${item['flex-grow']};</pre>
                    <pre class="idented">flex-shrink: ${item['flex-shrink']};</pre>
                    <pre class="idented">flex-basis: ${item['flex-basis']};</pre>
                    <pre>}</pre>
                `
            ).join('')
        } 
    `;
    codeContainer.innerHTML = template;
  }