//création du bouton new game pour le jeu 1
function newGame(){
    let button = document.createElement('button')
    button.innerHTML = 'Nouvelle partie ?'
    Ddiv1.appendChild(button)
    Ddiv2.innerHTML =''
    Ddiv3.innerHTML =''
    Ddivreg.innerHTML = ''
    button.addEventListener('click',localStorageClear1)
    button.addEventListener('click',diminuerLeTemps1)
}
// fonction permettant de clear le localstorage et de lancer le jeu 1
function localStorageClear1(){
    localStorage.clear()
    DFunDefi1()
}
//création du bouton continuer et permet de lancer le jeu 1 avec les infos du localstorage
function continue1 () {
    let button = document.createElement('button')
    button.innerHTML = 'continuer ?'
    Ddiv1.appendChild(button)
    button.addEventListener('click',DFunDefi1)
    button.addEventListener('click',diminuerLeTemps1)
}
//création du bouton new game pour le jeu 1
function newGame2(){
    let button = document.createElement('button')
    button.innerHTML = 'Nouvelle partie ?'
    Ddiv1.appendChild(button)
    Ddiv2.innerHTML =''
    Ddiv3.innerHTML =''
    Ddivreg.innerHTML = ''
    button.addEventListener('click',localStorageClear2)
    button.addEventListener('click',diminuerLeTemps2)
    
}
// fonction permettant de clear le localstorage et de lancer le jeu 1
function localStorageClear2(){
    localStorage.clear()
    DFunDefi2()
}
//création du bouton continuer et permet de lancer le jeu 1 avec les infos du localstorage
function continue2 () {
    let button = document.createElement('button')
    button.innerHTML = 'continuer ?'
    Ddiv1.appendChild(button)
    button.addEventListener('click',DFunDefi2)
    button.addEventListener('click',diminuerLeTemps2)
}