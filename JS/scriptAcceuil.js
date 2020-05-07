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

  let usr =  document.getElementById("pseudo").value;
 // localStorage.setItem('pseudo', usr)
  let xhr = new XMLHttpRequest();
  //verifePseudo(this)
  xhr.open('GET','enregistrer_nom?usr=' + usr,true);
  xhr.send();

  alert("vous avez bien été enregistrer vous pouvez passé a la page suivante");
  return false;
}



/*function verifePseudo(this){
  let pseudo =  document.getElementById("pseudo").value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET','check_pseudo?usr=' + pseudo,true);
  onload = function(this){
    if(pseudo == this.response){
      alert("ce pseudo est deja prit vous etes bien " + pseudo );
    }

  }
  xhr.send();
  return false

}

*/

