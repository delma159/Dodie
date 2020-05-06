"user strict";


let usr = document.getElementById("pseudo")

document.getElementById("form").onsubmit = enregistrePseudo()


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

function enregistrePseudo() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET','http://localhost:90/enregistrer_nom?usr='+ usr ,true)
  xhr.onload = traiter()
  xhr.send()
  return false;

}




function traiter() {

  let reponse = JSON.parse(this.reponseText);
  console.log(reponse)

}

