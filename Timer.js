//création de la div pour le timer
let jTimer = document.getElementById('tmp')

//Création de la fonction pour diminuer le temps
function dimininuerLeTemps(){
jZoneTimer.innerHTML = temps1
temps1--
}

if (Dbooldef1 == true){

    //Création du timer pour le jeu 1

let jZoneTimer = document.createElement('span')
let temps1 = 120
setInterval(dimininuerLeTemps, 1000)
jTimer.appendChild(jZoneTimer)
}



