//Création de la variable pour le timer 
let count = 20;

//Création de la fonction pour le temps
let interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
//Reset time en 0
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
  }
}, 1000);