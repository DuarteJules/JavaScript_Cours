let Ddefi1 = document.getElementById('button1')
Ddefi1.addEventListener('click',DFunDefi1)
let Ddefi2 = document.getElementById('button2')
Ddefi2.addEventListener('click',DFunDefi2)
let Ddivreg = document.getElementById('regles')
let Ddiv1 = document.getElementById('div1')
let Ddiv2 = document.getElementById('div2')
let Ddiv3 = document.getElementById('div3')
function DFunDefi1(){
    let Dbooldef1 = true;
    console.log(Dbooldef1)
    Ddiv1.innerHTML = `<b>Défi Chrono</b>`
    Ddiv3.innerHTML = `<p>Bonne réponse/Dbon-Mauvaise réponse/Dmau</p>`
    Ddivreg.innerHTML = ``
}
function DFunDefi2(){
    let Dbooldef1 = false;
    console.log(Dbooldef1)
    Ddiv1.innerHTML = `<b>Défi Incollable</b>`
    Ddiv3.innerHTML = `<p>Bonne réponse/Dbon-Mauvaise réponse/Dmau</p>`
    Ddivreg.innerHTML =``
}