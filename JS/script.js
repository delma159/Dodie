"use strict";

console.log("oui")
// id = productContainer


    appel()



function chargement(){

    let reponse = JSON.parse(this.responseText);
    let procName="<table>";

    for(let i of reponse){

        procName += "<tr><td>"+ i.ProcesseurName +"</td></tr><tr><td>"+ i.ProcesseurPrix +" </td></tr> "

    }
    procName += "</table>";


    document.getElementById("productContainer").innerHTML = procName
}


function appel(){

    let xhr = new XMLHttpRequest();
    xhr.open('get', "processeurs" , true);
    xhr.onload = chargement ;
    xhr.send();
}



function checkPseudo(){
    let pseudo = document.getElementById("pseudo")
    let xhr = new XMLHttpRequest();
    xhr.open('get' , "check_pseudo" , true)
    xhr.onload = function(){
        let check = 0 ;

        if(check = value.name)
            alert("pseudo deja prit vous etes bien...")
    }


}
