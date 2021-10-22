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
function localStorageClear1(){
    localStorage.clear()
    DFunDefi1()
}
function continue1 () {
    let button = document.createElement('button')
    button.innerHTML = 'continuer ?'
    Ddiv1.appendChild(button)
    button.addEventListener('click',DFunDefi1)
    button.addEventListener('click',diminuerLeTemps1)
}

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
function localStorageClear2(){
    localStorage.clear()
    DFunDefi2()
}
function continue2 () {
    let button = document.createElement('button')
    button.innerHTML = 'continuer ?'
    Ddiv1.appendChild(button)
    button.addEventListener('click',DFunDefi2)
    button.addEventListener('click',diminuerLeTemps2)
}