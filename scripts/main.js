/*let nombre = "Sonny";
let apellido = "López";
let edad = 34;
let tieneMascota = "Sí tiene";

console.log("El nombre es " + nombre);
console.log("El apellido es "+ apellido);
console.log("La edad es "+ edad);
console.log("Tiene mascota? "+ tieneMascota);

let miNombre = prompt("Ingrese un nombre:");

console.log("Tu nombre es " + miNombre);

alert("Hola " + miNombre);*/

let oscuro = document.querySelector('.oscuro');
let claro = document.querySelector('.claro');
let body = document.querySelector('body');
let header = document.querySelector('header');

oscuro.addEventListener("click",()=>{
    body.style.backgroundColor = "black"
    body.style.color = "white"
    header.style.backgroundColor = "black"
    header.style.color = "white"
})