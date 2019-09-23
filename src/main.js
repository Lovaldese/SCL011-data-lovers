// Manejo del DOM 
///--->todos loe ventos en donde el usuario interactua, llamando a las funciones de data.js
// //1.guardamos elementos para poder trabajar( guardar data)
// //2.Nuestra primera historia de usuario es mostrar todos los personajes desde un inicio(nombre e imagen)AL HACER CLICK EN PERSONAJES
//data completa 
const data = window.RICKANDMORTY.results;
//data filtrada
// const species= window.filter.species(data,filterSelector);

//Crear variables para los contenedores 
  const contenedorPadre = document.getElementById("root");
  const contenedorPersonajes = document.getElementById("printScreenCharacters")

// asignar variables a mis botones y select
 const myStart = document.getElementById("start")
const myCharacters = document.getElementById("characters");
// const myChapters = document.getElementById("chapters");
// const myFunFacts = document.getElementById("fun facts");
const filterSpecies = document.getElementById("filterSelector");


// crear las tarjetas 
function cards(data){
  data.forEach(show=>{
  contenedorPersonajes.innerHTML += 
     `<div class= "showcharacters">
       <img src="${show.image}" alt="">
       <h3>${show.name}</h3
             <p>${show.species}</p>
        </div>`
    });  //cierre forEach
  
  } //cierre funcion cards

// Crear una funcion que me contenga las tarjetas con la propiedad que esta en mi data
// //  MOSTRAR LA DATA COMPLETA AL HACER CLICK EN PERSONAJES
// hacemos que el boton escuche el click
myCharacters.addEventListener("click", ()=>{
  contenedorPersonajes.innerHTML = " ";

cards(data); // llamo la fincion de mi tarjeta y le indico el parametro

});  

myStart.addEventListener("click", ()=>{
  // contenedorPadre.innerHTML =" ";
contenedorPersonajes.style.display= "none";

});

 //FUNCION FILTRAR
// 1 Le asigno un evento al select
// 2 defino mi condicion,que sera el valor que seleccione el usuario en el select 

 filterSpecies.addEventListener('change', () => {
 let condition = filterSpecies.options[filterSpecies.selectedIndex].value;
  let speciesResult = window.filter.species(data,condition);
//  console.log(speciesResult)
 contenedorPersonajes.innerHTML = " ";
cards(speciesResult);
 });


   










