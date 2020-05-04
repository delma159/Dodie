"use strict";

console.log("oui")
// id = productContainer

appel()

function chargement(){

    let reponse = JSON.parse(this.responseText);
    console.log(reponse)

    document.getElementById("productContainer").innerHTML = reponse

}


function appel(){

    let xhr = new XMLHttpRequest();
    xhr.open('get', "http://localhost/processeurs" , true);
    xhr.onload = chargement ;
    xhr.send();

}
