
/* Manejo del DOM *///--->todos loe ventos en donde el usuario interactua, llamando a las funciones de data.js
//1.guardamos elementos para poder trabajar( guardar data)
//2.Nuestra primera historia de usuario es mostrar todos los personajes desde un inicio(nombre e imagen)AL HACER CLICK EN PERSONAJES

const data = window.RICKANDMORTY.results;

//Crear un contenedor padre para root donde se va imprimir lo que yo quiera
const contenedorpadre = document.getElementById("root");

//FUNCION MOSTRAR
//1. guardamos el botòn mostrar de html, lo guardamos en una variable
//const personajes = document.getElementById("personajes");
//2.hacemos que el boton escuche el click
document.getElementById("personaje").addEventListener("click", ()=>{
  let resultadoPersonaje = window.filter.species(data);
  console.log(resultadoPersonaje);

  
})

//rrecorro la data para luego imprimir imagen y name de los personajes
//for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name);
    // console.log(data[i].gender);
    // console.log(data[i].image);
// dandole funcionalidad al boton de inicio (aun no terminado )
   /* const Inicio = document.getElementById("Inicio");
    Inicio.addEventListener("click",()=>{
        Inicio.innerHTML = "Inicio";
    })*/

// creando el evento click
// const personajes = document.getElementById("personajes");
// personajes.addEventListener("click", () => {
//   console.log("si escucha el click");
// window.filter.species(data, condition);
    //elemento que contenga lo que quiero crear en html
     
    //  let card= document.createElement("div");
    //  let image= document.createElement("img");
    //  let texto= document.createElement("h5");
    //  let textos= document.createElement("h5")
     //  buscar el contenido de la etiqueta creada
    
    //  let conttextos= (data[i].species); 
    //   let contimage= (data[i].image);
    //   let contname = (data[i].name);
      // asignar el padre al hijo
      // image.setAttribute("src",contimage);
      // texto= document.createTextNode(contname);
      // textos=document.createTextNode(conttextos);
      //asigno un atributo para darle estilos a las tarjetas
      //card.setAttribute("class", "card");
      //insertarlo en html mediante el contenedor "root"
      //  contenedorpadre.appendChild(image);
      //  contenedorpadre.appendChild(texto);
      //  card.appendChild(texto);
      //  contenedorpadre.appendChild(textos);
      //  card.appendChild(textos);
      // contenedorpadre.appendChild(card);

    //   let condition = personajes.value;
    //   let  personajesSpeciesResult = window.filter.species(data,condition); 
    
//}

//};

//  filtrar

// const filterSelector = document.getElementById("filterSelector");
// filterSelector.addEventListener('change', () => {
//   let condition = filterSelector.value; /* Variable de la condición, esta nos dará el valor que usuario elija para filtrar */
/*document.getElementById("filterSelector").innerHTML 

  console.log(condition);

});
 // filtrar

 //let personajesRick= ["gender", "name"];
 //const result = personajesRick.filter(personajesRick => personajesRick.length >493);
 //console.log(result);

/* document.getElementById(selector).innerHTML*/

//});