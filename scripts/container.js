const simulationContainer = document.querySelector('#simulationContainer');
const codeContainer = document.querySelector('#codeContainer');

const flexContainerStyles = {
  'width': 'auto', 
  'height': '200px', 
  'flex-direction': 'row', 
  'justify-content': 'flex-start', 
  'align-items': 'stretch', 
  'flex-wrap': 'nowrap', 
  'align-content': 'stretch'
}

const itemsCountChanged = (selectElement) => {
  simulationContainer.innerHTML = '';
  const itemsCount = parseInt(selectElement.value);
  for (let i = 1; i <= itemsCount; i++) {
    const newItemElement = document.createElement('div');
    newItemElement.classList.add('bgColor1');
    newItemElement.textContent = `item ${i}`;
    simulationContainer.appendChild(newItemElement);
  }
}

const styleChanged = (selectElement) => {
  simulationContainer.style[selectElement.id] = selectElement.value;
  flexContainerStyles[selectElement.id] = selectElement.value;
  showCode();
}

const showCode = () => {
  const template = `
  <pre>.flex-container {</pre>
  <pre class="idented">display: flex;</pre>
  <pre class="idented">width: ${flexContainerStyles['width']};</pre>
  <pre class="idented">height: ${flexContainerStyles['height']};</pre>
  <pre class="idented">flex-direction: ${flexContainerStyles['flex-direction']};</pre> 
  <pre class="idented">justify-content: ${flexContainerStyles['justify-content']};</pre> 
  <pre class="idented">align-items: ${flexContainerStyles['align-items']};</pre>
  <pre class="idented">flex-wrap: ${flexContainerStyles['flex-wrap']};</pre>
  <pre class="idented">align-content: ${flexContainerStyles['align-content']};</pre>
  <pre>}</pre>      
  `;
  codeContainer.innerHTML = template;
}
