//Variable de test
let Dnomrep = 4;
let Dbooldef1;

//Variable utilisé dans les défi
let Dbon = 0;
let Dmau = 0;
let Dquesactu = 0;
let Dvalque = 'Qui va réussir le projet ?'

//Récupération du bouton "défi 1" et création de l'évènement "cliquer sur le bouton"
let Ddefi1 = document.getElementById('button1')
Ddefi1.addEventListener('click',DFunDefi1)

//Récupération du bouton "défi 2" et création de l'évènement "cliquer sur le bouton"
let Ddefi2 = document.getElementById('button2')
Ddefi2.addEventListener('click',DFunDefi2)

//Récupération de l'emplacement du choix du défi
let Ddivreg = document.getElementById('regles')

//Récupération de l'emplacement des trois "div" au dessus du timer et du choix du défi
let Ddiv1 = document.getElementById('div1')
let Ddiv2 = document.getElementById('div2')
let Ddiv3 = document.getElementById('div3')

//Masquage du timer
let DTime = document.getElementById('tmp')
DTime.innerHTML = ''

//Création de la function s'occupant du défi 1
function DFunDefi1(){

    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;

    Dbooldef1 = true;
    console.log(Dbooldef1)
    timer(Dbooldef1);
    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Chrono</b>`
    Ddiv2.innerHTML = `<button id=Dgiveup>Abandonner</button>
    <button id=Dpause>Pause</button>`
    let Dgiveuppos = document.getElementById('Dgiveup')
    Dgiveuppos.addEventListener('click',function(){
        Ddiv1.innerHTML = ``
        Ddiv2.innerHTML = ``
        Ddiv3.innerHTML = ``
        Ddivreg.innerHTML = Dreg
        DTime.innerHTML = ''
        let Ddefi1 = document.getElementById('button1')
        Ddefi1.addEventListener('click',DFunDefi1)
        let Ddefi2 = document.getElementById('button2')
        Ddefi2.addEventListener('click',DFunDefi2)
    })
    let Dpausepos = document.getElementById('Dpause')
    Ddiv3.innerHTML = `<p>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</p>`
    Ddivreg.innerHTML = `<b>Question n°`+Dquesactu+`:</b>
    <p>`+Dvalque+`</p>`
    for(i=0;i<Dnomrep;i++){
    let Drep = document.createElement('li')
    Drep.setAttribute('id','Drep'+i)
    Drep.innerHTML=`repDale`
    Ddivreg.appendChild(Drep)
    /*<li id=Drepi>repDale</li>*/
    }
}

//Création de la function s'occupant du défi 2
function DFunDefi2(){

    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;

    Dbooldef1 = false;
    console.log(Dbooldef1)
    timer(Dbooldef1);
    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Incollable</b>`
    Ddiv2.innerHTML = `<button id=Dgiveup>Abandonner</button>
    <button id=Dpause>Pause</button>`
    let Dgiveuppos = document.getElementById('Dgiveup')
    Dgiveuppos.addEventListener('click',function(){
        Ddiv1.innerHTML = ``
        Ddiv2.innerHTML = ``
        Ddiv3.innerHTML = ``
        Ddivreg.innerHTML = Dreg
        DTime.innerHTML = ''
        let Ddefi1 = document.getElementById('button1')
        Ddefi1.addEventListener('click',DFunDefi1)
        let Ddefi2 = document.getElementById('button2')
        Ddefi2.addEventListener('click',DFunDefi2)
    })
    let Dpausepos = document.getElementById('Dpause')
    Ddiv3.innerHTML = `<p>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</p>`
    Ddivreg.innerHTML = `<b>Question n°`+Dquesactu+`:</b>
    <p>`+Dvalque+`</p>`
    for(i=0;i<Dnomrep;i++){
        let Drep = document.createElement('li')
        Drep.setAttribute('id','Drep'+i)
        Drep.innerHTML=`repjuhduhf`
        Ddivreg.appendChild(Drep)
        /*<li id=Drepi>repDale</li>*/
    }
}
