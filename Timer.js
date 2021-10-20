//création de la div pour le timer
const jTimer = document.getElementById('tmp')
//création de la variable pour le timer 
let jtemps = 0


function timer (bool){
    if (bool == true){

        //Création du timer pour le jeu 1
    
    jtemps = 120
    //Création de la fonction pour diminuer le temps
    setInterval(diminuerLeTemps, 1000)
    }
    else{
        jtemps = 20
    setInterval(diminuerLeTemps,1000)
    }
    
    function diminuerLeTemps (){
        let minutes = parseInt(jtemps / 60,10)
        let secondes = parseInt(jtemps % 60,10)
        
        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes
        jTimer.innerText = `${minutes}:${secondes}`
        jtemps = jtemps <= 0 ? 0 : jtemps - 1
        
    }  
}

