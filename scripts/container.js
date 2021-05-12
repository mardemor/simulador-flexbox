const simulacao = document.querySelector('.simulacao');

    function quantidadeChanged(campo) {
      simulacao.innerHTML = '';
      const quantidade = parseInt(campo.value);
      for (let i = 1; i <= quantidade; i++) {
        const elemento = document.createElement('div');
        elemento.classList.add('cor1');
        elemento.textContent = `elemento ${i}`;
        simulacao.appendChild(elemento);
      }
    }

    function atributoChanged(campo) {
      simulacao.style[campo.id] = campo.value;
    }
  

    /*
    function widthChanged(campo) {
      simulacao.style.width = campo.value;
    }

    function heightChanged(campo) {
      simulacao.style.height = campo.value;
    }

    function directionChanged(campo) {
      simulacao.style.flexDirection = campo.value;
    }

    function justifyChanged(campo) {
      simulacao.style.justifyContent = campo.value;
    }

    function alignChanged(campo) {
      simulacao.style.alignItems = campo.value;
    }

    function wrapChanged(campo) {
      simulacao.style.flexWrap = campo.value;
    }

    function alignContentChanged(campo) {
      simulacao.style.alignContent = campo.value;
    }
    */