const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.getElementById('resultado');

// Diferentes tipos de EventListeners
form.addEventListener('submit', sumarInputValues);
h1.addEventListener('copy', alertaDeCopia);

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = 'Resultado: ' + sumaInputs;
}

function alertaDeCopia(){
    alert('Copiaste el texto crack!!');
}