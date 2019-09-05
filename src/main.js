/* Manejo del DOM */
const data = RICKANDMORTY.results;
console.log(data);

//mostrar nombre, genero e imagen de los personajes.recorre data
for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name);
    // console.log(data[i].gender);
    // console.log(data[i].image);

//Para mostrar los datos seleccionados:


//1.-Crear un contenedor padre para root
const contenedorpadre = document.getElementById("root");
//añadir atributos


// probando 

const personajes = document.getElementById("personajes");
personajes.addEventListener("click", () => {

    //elemento que contenga mi imagen
     let img= document.createElement("img");
     
     
     // contenido de la etiqueta img
      let contimage= (data[i].image);

      // asignar el padre al hijo
      img.setAttribute("src",contimage);

      //insertarlo en html mediante el contenedor "root"

      contenedorpadre.appendChild(img);
    
 


    // const image1 = document.createElement("image");
    // let imagen = document.createTextNode(image1);
    // image.appendChild(imagen);
    // container.appendChild(image);
}

)};




