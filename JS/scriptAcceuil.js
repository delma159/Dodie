"user strict";


function enregistrePseudo(formulaire) {

  let usr =  document.getElementById("pseudo").value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET','enregistrer_nom?usr=' + usr,true);
  xhr.send();
  return false;

}


function traiterPseudo(){

  let pseudo =  document.getElementById("pseudo").value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET','check_pseudo?usr=' + pseudo ,true);
  xhr.onload = verifePseudo;
  xhr.send();

  return false;

}

function verifePseudo(){

  let reponse = this.response;

  console.log(reponse)
    if( reponse == 1 ){
      alert("Ce pseudo existe deja , vous etes bien ? : " + document.getElementById("pseudo").value + " Si non trouvé un autre pseudo")
    }

    if( reponse == 0 ){
      enregistrePseudo()
      alert("vous avez bien été enregistré vous pouvez passer à la page suivante");
    }
}





