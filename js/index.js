//Hecho por: Martín Pereira.
const fullList = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;//Rojo Fuego, Azul Marino, Verde Hoja.
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(fullList)
    .then(response=> response.json())
    .then(data=>{
        //console.log(data);
        displayList(data.results);
    })
    .catch(error=>{
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Hubo un error al cargar los datos.";
        document.body.appendChild(errorMessage);
        console.log(error);
    })
})
function searchPo(url){
    fetch(url)
    .then(response=> response.json())
    .then(data=>{
        //console.log(data.sprites.front_default);
        showPo(data)
    })
}
//Guardo el pokémon por si lo quiero agregar al equipo.
let addToTeam;
//Muestro imagen del pokémon.
function showPo(data){
    showPi(data);
    let screen = document.getElementById('show');
    addToTeam= data;
    //console.log(data);
    screen.innerHTML = `<img id="imgS" src='${data.sprites.front_default}'>`;
}
//Muestro lista de pokémons.
function displayList(data){
    let listDiv = document.getElementById('poke-list');
    for(let one of data){
        listDiv.innerHTML+= `<div class="poke" onclick="searchPo('${one.url}')"><p>`+one.name.toUpperCase()+'</p></div>';
    }
}
//Muestro datos del pokémon seleccionado.
function showPi(data){
    let infoS = document.getElementById('infoT');
    infoS.innerHTML = "";
    for(let one of data.stats){
        infoS.innerHTML += `<tr><th>${one.stat.name.toUpperCase()}</th></tr><tr><td>${one.base_stat}</td></tr>`
    }
}
//Escucho el click en el boton para agregar al equipo.

let counterT = 0;
document.getElementById('add').addEventListener('click', ()=>{
    let teamS = document.getElementById('teamS');
    if(counterT < 6){
        teamS.innerHTML += `<div class='team' id='${addToTeam.name}'><img src='${addToTeam.sprites.front_default}'><button type='button' class='delB' onclick="removeP('${addToTeam.name}')">X</></div>`
        counterT+=1;
    }
})
//Remueve un pokémon de la lista.
function removeP(id){
    let item = document.getElementById(id);
    item.remove();
    counterT-=1;
}
//Hecho por: Martín Pereira.