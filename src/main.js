
/* Manejo del DOM *///--->todos loe ventos en donde el usuario interactua, llamando a las funciones de data.js
//1.guardamos elementos para poder trabajar( guardar data)
//2.Nuestra primera historia de usuario es mostrar todos los personajes desde un inicio(nombre e imagen)AL HACER CLICK EN PERSONAJES

const data = window.RICKANDMORTY.results;





 

//Crear un contenedor padre para root donde se va imprimir lo que yo quiera
const contenedor_padre = document.getElementById("root");

// //Creando funcionalidad del boton de inico
//  document.getElementById("Inicio").addEventListener("click", () =>{
//  document.getElementById("Personajes").style.display="none";
//  document.getElementById("temporadas").style.display="none";
//  document.getElementById("Inicio").style.display="block";

// })

//FUNCION MOSTRAR
//1. guardamos el botòn mostrar de html, lo guardamos en una variable
//const personajes = document.getElementById("personajes");
//2.hacemos que el boton escuche el click
// imprimi el listado ordenado

 document.getElementById("personaje").addEventListener("click", ()=>{
 let persoResult = window.filter.personajes(data);

 console.log(persoResult);


  })

//FUNCION FILTRAR
//  asigno a una variable el id del select
//le asigno un evento al select
const filterSpecies = document.getElementById("filterSelector");
console.log(filterSpecies)
filterSpecies.addEventListener("change",() =>{
  // document.getElementById("root").innerHTML = " ";

 
condition = document.getElementById(filterSpecies);//asigno la condicion y me imprime el valor que escoja el usuario
let filterSelector= document.getElementById("filterSelector").value
  speciesResult = window.filter.species(data,filterSelector);


   for(let i = 0; i < data.length; i++){
      document.getElementById("root").innerHTML += `
   <div>
  <h4><b> ${data[i].name}</b></h4>
   <img src="${data[i].image}" alt="image">
   <h5>${data[i].species}</h5>
   </div>


      `;

   }

 });




