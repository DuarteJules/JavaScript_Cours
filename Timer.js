
//création de la div pour le timer
const jTimer = document.getElementById('tmp')
//création de la variable pour le timer 
let jtemps = 0
let Lnewsec = true;
let boolTimer = false;

// fonction pour diminuer le temps pour le jeu 1
function diminuerLeTemps1 (){
    //utilisation de setInterval pour appeler une fonction toute les secondes
    setInterval(()=>{
   if (boolTimer == false ){
        let minutes = parseInt(jtemps / 60,10)
        let secondes = parseInt(jtemps % 60,10)
        
        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes
        jTimer.innerText = `${minutes}:${secondes}`
        jtemps = jtemps <= 0 ? 0 : jtemps - 1
        //fonction permettant de stoper le jeu sur le timer arrive a 0
        if ( (minutes  == 0 && secondes == 0) && Lnewsec ){
            Lnewsec = false;
            let Ltpop = alert("Dommage ! ne te décourage pas")
            window.location.reload()
            localStorage.clear()
        }
   }else{
    return;
   }
}, 1000)
}  
// fonction poiur diminuer le temps pour le jeu 2
function diminuerLeTemps2 (){
    //utilisation de setInterval pour appeler une fonction toute les secondes
    setInterval(()=>{
    if (boolTimer == false ){
     let minutes = parseInt(jtemps / 60,10)
     let secondes = parseInt(jtemps % 60,10)
     
     minutes = minutes < 10 ? "0" + minutes : minutes
     secondes = secondes < 10 ? "0" + secondes : secondes
     jTimer.innerText = `${minutes}:${secondes}`
     jtemps = jtemps <= 0 ? 0 : jtemps - 1
    //fonction permettant de lancer une autre question et ajouter une mauvaise réponse quand le timer arrive a 0
     if ( minutes  == 0 && secondes == 0){
        Dmau == Dmau++;
        Ddiv3.innerHTML = '<b>Bonne réponse /'+Dbon+ '-Mauvaise réponse / '+Dmau+'</b>'
        Lstop5Error()
        jtemps = 20;
        RandomAnswer()
    }
    }
    else{
        return
    }
 }, 1000)
 }  
 //fonction qui permet de stoper le jeu avc un pop up quand il y a plus de 5 erreur sur le jeu 2
 function Lstop5Error(){
    // Je définis que si ma variable est mauvaise réponse est égal à 5
    if ( Dmau == 5 ){
        localStorage.clear()
        // Je lance mon alerte avec mon message
        alert('Mince ! tu as trop de mauvaise réponse. Tu es nul :)')
        // et je reload la page
        window.location.reload()
    
    }
}
