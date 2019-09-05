/* Manejo del DOM */
const data=RICKANDMORTY.results;
console.log(data);

//mostrar nombre, genero e imagen de los personajes
for(let i=0;i<data.length; i++){
    console.log(data[i].name);
    console.log(data[i].gender);
    console.log(data[i].image);
}
//Para mostrar los datos seleccionados:


//1.-Crear un contenedor padre para root
let contenedorpadre = document.getElementById("root");
//añadir atributos

// para filtrar





