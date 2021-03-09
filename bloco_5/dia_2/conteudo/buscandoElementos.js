let ondeEsta = document.getElementById('elementoOndeVoceEsta');

let pai = ondeEsta.parentElement;
pai.style.color = 'blue';

let primeiroFilhoDoFilho = ondeEsta.children[0];
primeiroFilhoDoFilho.innerHTML = 'Novo texto do primeiro filho';

let primeiroFilhoPeloPai = pai.children[0];
let primeiroFilhoPorOndeEsta = ondeEsta.previousElementSibling;

let atencaoText = ondeEsta.parentElement.innerText;

let terceiroFilhoPorOndeEsta = ondeEsta.nextElementSibling;
let terceiroFilhoPeloPai = pai.children[2];