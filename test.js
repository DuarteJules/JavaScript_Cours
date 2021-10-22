const useDivForReset = document.querySelector('#div2');
let Dpause1 = document.createElement('button')

function createPauseButton() {
    Dpause1.textContent = 'pause'
    Dpause1.addEventListener('click', pauseButtonAction);
    useDivForReset.appendChild(Dpause1); 
}

function pauseInterval() {
    boolTimer = true;
    Dpause1.textContent = 'reprendre'
}

function resumeInterval() {
    boolTimer = false;
    Dpause1.textContent= 'pause'
    if     (gameMode == 1) RandomAnswer();
    else if(gameMode == 2) RandomAnswer();
}

function pauseButtonAction() {
    if      (boolTimer == false) return pauseInterval();
    else if (boolTimer == true ) return resumeInterval();
}
