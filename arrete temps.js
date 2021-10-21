//Création bouton reprendre
let reprendre = document.createElement("button");   
   reprendre.innerHTML = "Reprendre";                   
   //document.body.appendChild(reprendre); 

//Création bouton pause
let pause = document.createElement("button");   
   pause.innerHTML = "Pause";                   
   //document.body.appendChild(pause);

//Création bouton compteur
let compteur = document.createElement("div");   
   compteur.innerHTML = "Compteur";                   
   //document.body.appendChild(compteur); 

reprendre.addEventListener('click', repr);
//Création de la fonction reprendre
   function repr(){
      timerId = setInterval('compteur()', 2000);
   }
//Création de la fonction compteur
let i = 0;
   function compteur(){
      i = i + 1;
      document.getElementById('Compteur').innerHTML += i ;
}

pause.addEventListener('click', paus);
//Création de la fonction pause
   function paus(){
      clearInterval(timerId)
   }

