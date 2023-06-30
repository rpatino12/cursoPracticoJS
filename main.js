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

// Escribiendo HTML desde JS
// innerHTML traduce las etiquetas dentro del string
// Mientras que innerText, no traduce nada
h1.innerHTML = 'Nuevo título <br/> desde JS'; 
p.innerText = 'Párrafo editado <br/> desde JS';

// Tambien podemos manipular los atributos de alguna etiqueta HTML
console.log(h1.getAttribute('someAttribute')); // get
h1.setAttribute('someAttribute', 'valorNuevo'); // set

// Hay una serie de funciones que estan diseñadas especificamente para las clases
// Se encuentran dentro del atributo de classList
h1.classList.add('verde');
h1.classList.remove('rojo')
h1.classList.replace('verde', 'azul');
console.log(h1.classList.contains('rojo'));

// Tambien podemos modificar el valor por defecto del input
input.value = 123456;

// Tambien se pueden crear elementos HTML desde cero
const img = document.createElement('img');
img.setAttribute('src', 'https://img.freepik.com/vector-gratis/fondo-cohete-estilo-flat_23-2147904992.jpg?w=740&t=st=1688156920~exp=1688157520~hmac=6d642b7131c28bc7c22cc5b242eb503e2239ef17c5175a0542d4e34560e6f773');
console.log(img); // The tag created with createElement

// Ahora podemos insertar la etiqueta img dentro de algun elemento del DOM
p2.innerHTML = "";
p2.append(img);