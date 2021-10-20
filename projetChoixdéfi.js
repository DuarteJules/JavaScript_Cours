//Variable de test
let Dnomrep = 4;
let Dbooldef1;

//Variable utilisé dans les défi
let Dbon = 0;
let Dmau = 0;
let Dquesactu = 1;
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
<<<<<<< HEAD
=======

>>>>>>> Jules
    Dgetques()
    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;

    Dbooldef1 = 1;
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
        Dbooldef1 = 3;
        timer(Dbooldef1)
        let Ddefi1 = document.getElementById('button1')
        Ddefi1.addEventListener('click',DFunDefi1)
        let Ddefi2 = document.getElementById('button2')
        Ddefi2.addEventListener('click',DFunDefi2)
    })
    let Dpausepos = document.getElementById('Dpause')
<<<<<<< HEAD
    Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque>`+Question+`</b>
    <p id=Drep1>`+jrep1+`</p>
    <p id=Drep2>`+jrep2+`</p>
    <p id=Drep3>`+jrep3+`</p>
    <p id=Drep4>`+jrep4+`</p>`
    let Dquenpos = document.getElementById('Dquen')
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
=======
    Ddiv3.innerHTML = `<p>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</p>`
    Ddivreg.innerHTML = `<b>Question n°`+Dquesactu+`:</b>
    <p>`+Question+`</p>
    <p id=Drep1 class = reponse>`+jrep1+`</p>
    <p id=Drep2 class = reponse>`+jrep2+`</p>
    <p id=Drep3 class = reponse>`+jrep3+`</p>
    <p id=Drep4 class = reponse>`+jrep4+`</p>`
>>>>>>> Jules
    let Drep3pos = document.getElementById('Drep3')
    Drep3pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
    if (Drep3pos.innerHTML == 'undefined'){
        Drep3pos.innerHTML = ''
    }
    let Drep4pos = document.getElementById('Drep4')
    Drep4pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
    if (Drep4pos.innerHTML == 'undefined'){
        Drep4pos.innerHTML = ''
    }
<<<<<<< HEAD
    LHihglight()
=======
LHihglight()
>>>>>>> Jules
}

//Création de la function s'occupant du défi 2
function DFunDefi2(){
    Dgetques()
    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;
    Dbooldef1 = 2;
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
        Dbooldef1 = 3;
        timer(Dbooldef1)
        let Ddefi1 = document.getElementById('button1')
        Ddefi1.addEventListener('click',DFunDefi1)
        let Ddefi2 = document.getElementById('button2')
        Ddefi2.addEventListener('click',DFunDefi2)
    })
    let Dpausepos = document.getElementById('Dpause')
<<<<<<< HEAD
    Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque>${Question}</b>
    <p id=Drep1>`+jrep1+`</p>
    <p id=Drep2>`+jrep2+`</p>
    <p id=Drep3>`+jrep3+`</p>
    <p id=Drep4>`+jrep4+`</p>`
    let Dquenpos = document.getElementById('Dquen')
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
=======
    Ddiv3.innerHTML = `<p>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</p>`
    Ddivreg.innerHTML = `<b>Question n°`+Dquesactu+`:</b>
    <p>${Question}</p>
    <p id=Drep1 class = reponse>`+jrep1+`</p>
    <p id=Drep2 class = reponse>`+jrep2+`</p>
    <p id=Drep3 class = reponse>`+jrep3+`</p>
    <p id=Drep4 class = reponse>`+jrep4+`</p>`
>>>>>>> Jules
    let Drep3pos = document.getElementById('Drep3')
    Drep3pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
    if (Drep3pos.innerHTML == 'undefined'){
        Drep3pos.innerHTML = ''
    }
    let Drep4pos = document.getElementById('Drep4')
    Drep4pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        Drep1pos.innerHTML=jrep1
        Drep2pos.innerHTML=jrep2
        Drep3pos.innerHTML=jrep3
        Drep4pos.innerHTML=jrep4
        if (Drep3pos.innerHTML == 'undefined'){
            Drep3pos.innerHTML = ''
        }
        if (Drep4pos.innerHTML == 'undefined'){
            Drep4pos.innerHTML = ''
        }
    })
    if (Drep4pos.innerHTML == 'undefined'){
        Drep4pos.innerHTML = ''
    }
    LHihglight()
<<<<<<< HEAD
=======

>>>>>>> Jules
}
