//création de la div pour le timer
const jTimer = document.getElementById('tmp')
//création de la variable pour le timer 
let jtemps = 0

// fonction pour diminuer le temps 
function diminuerLeTemps (){
   setInterval(()=>{
    let minutes = parseInt(jtemps / 60,10)
    let secondes = parseInt(jtemps % 60,10)
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    jTimer.innerText = `${minutes}:${secondes}`
    jtemps = jtemps <= 0 ? 0 : jtemps - 1
}, 1000)
}  
