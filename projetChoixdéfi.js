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

//Création de la function s'occupant du défi 1
function DFunDefi1(){
    let Dbooldef1 = true;
    console.log(Dbooldef1)
    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Chrono</b>`
    Ddiv3.innerHTML = `<p>Bonne réponse/Dbon-Mauvaise réponse/Dmau</p>`
    Ddivreg.innerHTML = `<b>Question n°Dquesactu:</b>
    <p>Dvalque</p>
    <li id=Drep1>repDale</li>
    <li id=Drep2>repDale</li>
    <li id=Drep3>repDale</li>
    <li id=Drep4>repDale</li>`

}

//Création de la function s'occupant du défi 2
function DFunDefi2(){
    let Dbooldef1 = false;
    console.log(Dbooldef1)
    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Incollable</b>`
    Ddiv3.innerHTML = `<p>Bonne réponse/Dbon-Mauvaise réponse/Dmau</p>`
    Ddivreg.innerHTML =`<b>Question n°Dquesactu:</b>
    <p>Dvalque</p>
    <li id=Drep1>repDale</li>
    <li id=Drep2>repDale</li>
    <li id=Drep3>repDale</li>
    <li id=Drep4>repDale</li>`

}
