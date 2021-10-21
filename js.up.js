/*

Story #01
EN TANT QUE utilisateur JE VEUX pouvoir 
choisir un défi AFIN DE diversifier le jeu
Definition of Done
Lorsque je clique sur un des bouton défi, 
le jeu commence.

*/
const button1 = document.getElementById('button1');


const button2 = document.getElementById('button2');

    
    let questions = JSON.stringify(allQuestions);
    for (let value in questions){
        localStorage.setItem(value, questions[value]);

        let questions = JSON.stringify(allQuestions);
        let def1 = document.querySelector('td');
        }

/*
Il est augmenté/diminué 
en fonction de la réponse donnée pour le défi1
*/

/*
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
*/