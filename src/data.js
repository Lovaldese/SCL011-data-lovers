/* Manejo de data */
//Para recorrer la data
//  let= RICKANDMORTY.results 
//for(let i=0;i< RICKANDMORTY.results.length; i++){
//console.log(RICKANDMORTY.results[i]); //toda la data
//console.log(RICKANDMORTY.results[i].id); //de id
//console.log(RICKANDMORTY.results[i].name); //del nombre
//console.log(RICKANDMORTY.results[i].status); // del estado
//console.log(RICKANDMORTY.results[i].gender); // del genero
//console.log(RICKANDMORTY.results[i].species); //de la especie
//console.log(RICKANDMORTY.results[i].type); //del tipo


 window.filter = {
species: (data) =>{
  
   let speciesResult = [""];
  for(let i=0; i < data.length; i++){
    speciesResult += `<img src="${data[i].image}" alt="">
     ${data[i].name}`
     document.getElementById("root").innerHTML = speciesResult;
    
   };
   return speciesResult;
 }
  };
  