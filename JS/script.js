"use strict";


function rafraichir() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

    xhr.open('get', window.location.protocol + "//" + window.location.host + "/processeurs ", true);    // définit le type (get), l'url et l'asynchrone de la requête
    xhr.responseType = "json";
    xhr.onload = function rafraichir() {

        let reponse = JSON.parse(xhr.responseText);
        console.log(reponse)


        xhr.send(reponse);
    }

}