//création de la div pour le timer
const jTimer = document.getElementById('tmp')

if (Dbooldef1 == true){

    //Création du timer pour le jeu 1

let temps = 120
//Création de la fonction pour diminuer le temps
setInterval(()=> {
    let minutes = parseInt(temps / 60,10)
    let secondes = parseInt(temps % 60,10)
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    jTimer.innerText = `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
    console.log('test')
}, 1000)
}

