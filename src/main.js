

/* Manejo del DOM */
//declaro la data data  con la que voy a trabahjar
const data = RICKANDMORTY.results;
console.log(data);

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

const personajes = document.getElementById("personajes");
personajes.addEventListener("click", () => {

    //elemento que contenga lo que quiero crear en html
     let img= document.createElement("img");
     let texto= document.createElement("h3");
     // contenido de la etiqueta creada
      let contimage= (data[i].image);
      let contname = (data[i].name);
      // asignar el padre al hijo
      img.setAttribute("src",contimage);
      texto= document.createTextNode(contname);
      //insertarlo en html mediante el contenedor "root"
       contenedorpadre.appendChild(img);
       contenedorpadre.appendChild(texto);
}

)};
