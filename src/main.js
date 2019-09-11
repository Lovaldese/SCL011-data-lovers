
/* Manejo del DOM *///--->todos loe ventos en donde el usuario interactua, llamando a las funciones de data.js
//1.guardamos elementos para poder trabajar( guardar data)
//2.Nuestra primera historia de usuario es mostrar todos los personajes desde un inicio(nombre e imagen)AL HACER CLICK EN PERSONAJES

const data = window.RICKANDMORTY.results;

//Crear un contenedor padre para root donde se va imprimir lo que yo quiera
const contenedor_padre = document.getElementById("root");

//Creando funcionalidad del boton de inico 
// document.getElementById("Inicio").addEventListener("click", () =>{
//   document.getElementById("Personajes").style.display="none";
//   document.getElementById("temporadas").style.display="none"
//   document.getElementById("Inicio").style.display="block";
  
  
//   })

//FUNCION MOSTRAR
//1. guardamos el botòn mostrar de html, lo guardamos en una variable
//const personajes = document.getElementById("personajes");
//2.hacemos que el boton escuche el click
// imprimi el listado ordenado

// document.getElementById("personaje").addEventListener("click", ()=>{
// let persoResult = window.filter.personajes(data);
 
//  console.log(persoResult);

  
//  })




document.getElementById("filterSelector").addEventListener("change",() =>{
  document.getElementById("root").innerHTML = " "  
    
  let species=document.getElementById("filterSelector").value
  for(let i = 0; i < data.length; i++){
    
  document.getElementById("root").innerHTML += ` 
  <div class="col s12 m4">
  <h4 class="header"><b># ${data[i].name}</b></h4>
  <div class="card horizontal">
   <div class="card-image">
   <img src="${data[i].image}" alt="">
    </div>
      <div class="card-stacked">
        <div class="card-content">
          <h5>${data[i].species}</h5>
        </div> 
     </div>
   </div>
  </div>

      `;

  }
  
});

