

/* Manejo del DOM */
//declaro la data data  con la que voy a trabahjar
const data = RICKANDMORTY.results;
window.filter = {
    species: (data,condition) =>{
      
       let speciesResult = [""];
      for(let i=0; i < data.length; i++){
       if (data[i].species == condition){
         console.log(data[i].species);
             };
       };
       return speciesResult;
     }
      }

//rrecorro la data para luego imprimir imagen y name de los personajes
for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name);
    // console.log(data[i].gender);
    // console.log(data[i].image);
// dandole funcionalidad al boton de inicio (aun no terminado )
    const Inicio = document.getElementById("Inicio");
    Inicio.addEventListener("click",()=>{
        Inicio.innerHTML = "Inicio";
    })
//Crear un contenedor padre para root donde se va imprimir lo que yo quiera
const contenedorpadre = document.getElementById("root");

// creando el evento click
const personajes = document.getElementById("personajes");
personajes.addEventListener("click", () => {

    //elemento que contenga lo que quiero crear en html
     
     let card= document.createElement("div");
     let img= document.createElement("img");
     let texto= document.createElement("h5");
     let textos= document.createElement("h5")
     //  buscar el contenido de la etiqueta creada
    
     let conttextos= (data[i].species); 
      let contimage= (data[i].image);
      let contname = (data[i].name)
      // asignar el padre al hijo
      img.setAttribute("src",contimage);
      texto= document.createTextNode(contname);
      textos=document.createTextNode(conttextos);
      //asigno un atributo para darle estilos a las tarjetas
      card.setAttribute("class", "card");
      //insertarlo en html mediante el contenedor "root"
       contenedorpadre.appendChild(img);
       contenedorpadre.appendChild(texto);
       card.appendChild(texto);
       contenedorpadre.appendChild(textos);
       card.appendChild(textos);
      contenedorpadre.appendChild(card);

    //   let condition = personajes.value;
    //   let  personajesSpeciesResult = window.filter.species(data,condition); 
    
}

)};

//  filtrar

const filterSelector = document.getElementById("filterSelector");
filterSelector.addEventListener('change', () => {
  let condition = filterSelector.value; /* Variable de la condición, esta nos dará el valor que usuario elija para filtrar */
document.getElementById("filterSelector").innerHTML 
<label>Elije una categoria:
<select name="selector" id="filterSelector">
    <option value="">Seleccione</option>
    <option value="Human">Humanos</option>
    <option value="Alien">Aliens</option>
    <option value="Humanoid">Humanoides</option>
  </select>
</label>
  console.log(condition);

  speciesResult= window.innerHTML.filter.species(data,condition);  
});


// document.getElementById(selector).innerHTML=