"use strict";


function chargementProc(){
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
    xhr.onload = chargementProc ;
    xhr.send();
}

function chargementCM() {
    appelCM()
    console.log(this)
    let reponse = JSON.parse(this.responseText);
    let Nom = ""
    let Prix = ""


    for (let i of reponse) {

        Nom += "<div id=\"" + i + "\">" + i.CarteMereName + "</div><br>"
        Prix += "<div id=\"" + i + "\">" + i.CarteMerePrix + "</div><br>"
    }

    document.getElementById("productsCm").innerHTML = Nom
    document.getElementById("priceCm").innerHTML = Prix

}

function appelCM(){

    let xhr = new XMLHttpRequest();
    xhr.open('get', "carteMere" , true);
    xhr.onload = chargementCM ;
    xhr.send();
}



/*function remplire(){
    var procDonnees = document.getElementById("processeur").value
    procDonnees.innerHTML

}*/




