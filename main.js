console.log("Connected the JS file!!");

// El querySelector usa los mismos selectores que se usan en CSS
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const p1 = document.querySelector('.parrafito');
const p2 = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    p1,
    p2,
    input
})

console.log(h1);
console.log(`Valor del input: ${input.value}`);