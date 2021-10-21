//création de la div pour le timer
let jTimer = document.getElementById('tmp')
//création de la variable pour le timer 
let jtemps = 0
let Lnewsec = true;

// fonction pour diminuer le temps 
function diminuerLeTemps1 (){
   setInterval(()=>{
    let minutes = parseInt(jtemps / 60,10)
    let secondes = parseInt(jtemps % 60,10)
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
    jTimer.innerText = `${minutes}:${secondes}`
    jtemps = jtemps <= 0 ? 0 : jtemps - 1
    if ( (minutes  == 0 && secondes == 0) && Lnewsec && (Dbooldef1==1)){
        Lnewsec = false;
        let Ltpop = alert("Dommage ! ne te décourage pas")
        window.location.reload()
    }
}, 1000)
}  

function diminuerLeTemps2 (){
    setInterval(()=>{
     let minutes = parseInt(jtemps / 60,10)
     let secondes = parseInt(jtemps % 60,10)
     
     minutes = minutes < 10 ? "0" + minutes : minutes
     secondes = secondes < 10 ? "0" + secondes : secondes
     jTimer.innerText = `${minutes}:${secondes}`
     jtemps = jtemps <= 0 ? 0 : jtemps - 1
     jtemps = jtemps >= 180 ? 180 : jtemps
 }, 1000)
 }  
 
