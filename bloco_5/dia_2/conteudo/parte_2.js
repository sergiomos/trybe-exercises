let ondeEsta = document.getElementById('elementoOndeVoceEsta');

function createDiv(id) {
  let div = document.createElement('div');
  div.id = id;
  return div;
}

ondeEsta.parentElement.appendChild(createDiv('irmaoOndeVoceEsta'));

ondeEsta.appendChild(createDiv('terceiroFilhoDoFilho'));

ondeEsta.children[0].appendChild(createDiv('filhoDoPrimeiroFilhoDoFilho'))

let filhoDoPrimeiroFilhoDoFilho = ondeEsta.children[0].children[0];

let terceiroFilhoDoFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.children[2];