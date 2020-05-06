"use strict";


function chargement(){
    appelProc()

    let reponse = JSON.parse(this.responseText);
    let procNom=""
    let procPrix=""


    for(let i of reponse){

        procNom += "<div id=\""+i+"\">" + i.ProcesseurName + "</div><br>"
        procPrix += "<div id=\""+i+"\">" + i.ProcesseurPrix + "</div><br>"


    }

    document.getElementById("productsProc").innerHTML = procNom
    document.getElementById("priceProc").innerHTML = procPrix
}


function appelProc(){

    let xhr = new XMLHttpRequest();
    xhr.open('get', "processeurs" , true);
    xhr.onload = chargement ;
    xhr.send();
}


function remplire(){
    var procDonnees = document.getElementById("processeur").value
    procDonnees.innerHTML

}