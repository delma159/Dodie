"user strict";

let idLoginBlock = document.getElementById("loginPage");
let idSigninBlock = document.getElementById("signinPage");

function switchToSignin() {
  idLoginBlock.style.display = "none";
  idSigninBlock.style.display = "flex";
}

function switchToLognin() {
  idLoginBlock.style.display = "flex";
  idSigninBlock.style.display = "none";
}

function enregistrePseudo(formulaire) {

  let usr =  document.getElementById("pseudo").value
 // localStorage.setItem('pseudo', usr)
  let xhr = new XMLHttpRequest()
  xhr.open('GET','enregistrer_nom?usr=' + usr,true)
  xhr.onload = traiter()
  xhr.send()

}


function traiter() {

  let reponse = JSON.parse(this.reponseText);
  console.log(localStorage.getItem('pseudo'))

}

