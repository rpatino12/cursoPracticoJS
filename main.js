const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.getElementById('resultado');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const number1 = parseInt(input1.value);
    const number2 = parseInt(input2.value);
    const numbersSum = number1 + number2;
    pResult.innerText = 'Resultado: ' + numbersSum;
}