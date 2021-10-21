//Création de la variable pour le timer 
let total_seconds = 30*1;
    //let c_minutes = parseInt(total_seconds/60);

//Création de la  pour diminuer le temps
let seconds = parseInt(total_seconds%60);

//Création de la div temps restant
let idleft = document.createElement("id");
idleft.innerHTML = `<div id="time left"></div>` 

//Création de la fonction qui vérifie le temps
function CheckTime(){
document.getElementById("time left").innerHTML
= 'Time Left: ' + seconds + ' seconds ' ;

//Création de la fonction pour qui stop le temps
    if(total_seconds <=0){
        setTimeout('document.allQuestions.quizz()',1);
    } 
    else {
        total_seconds = total_seconds -1;
    //c_minutes = parseInt(total_seconds/60);
    seconds = parseInt(total_seconds%60);

//Vérifie si on doit stopper le temps
setTimeout("CheckTime()",1000);
    }
}
//Vérifie si on doit stopper le temps
//setTimeout("CheckTime()",1000);
