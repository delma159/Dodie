"use strict";

var test = document.getElementById("intBlockOnOf")
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log(this);
    if(this.readyState == 4 && this.status == 200){
        test.innerHTML = JSON.stringify(this.response)
        console.log(this.response)
    } else if(this.readyState == 4 && this.status == 404 ){
        alert('erreur 404');
    }
};

xhr.open('get', "http://localhost:90/processeurs", true);    // définit le type (get), l'url et l'asynchrone de la requête
xhr.responseType = "json";
xhr.send(test);
