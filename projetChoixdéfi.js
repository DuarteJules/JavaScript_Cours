//Variable de test
let Dbooldef1;
let Dnomrep;
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

//Creation du tableau de réponse
let DreponseTab = []
function Dnewrep(){
Dgetques()
DreponseTab.push(jrep1,jrep2)
if (jrep3 != undefined){
    DreponseTab.push(jrep3)
}
if (jrep4 != undefined){
    DreponseTab.push(jrep4)
}
console.log(DreponseTab)
}
function Drandomrep(){
    let Drepran = (DreponseTab[getRandomInt(DreponseTab.length)])
    while (Drepran == ''){
        Drepran = (DreponseTab[getRandomInt(DreponseTab.length)])
    }
    let Drepranpos = DreponseTab.indexOf(Drepran)
    console.log(Drepranpos)
    DreponseTab[Drepranpos]=''
    console.log(Drepran)
    return Drepran
}

//Création de la function s'occupant du défi 1
function DFunDefi1(){
<<<<<<< HEAD
    Dnewrep()
=======

>>>>>>> Jules
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
<<<<<<< HEAD
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
=======
        window.location.reload()
>>>>>>> Jules
    })
    let Dpausepos = document.getElementById('Dpause')
    Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque>`+Question+`</b>`
    for(i=0;i<DreponseTab.length;i++){
        let repi = document.createElement('p')
        repi.setAttribute('id','Drep'+i)
        repi.innerHTML=Drandomrep()
        Ddivreg.appendChild(repi)
    }
    let Dquenpos = document.getElementById('Dquen')
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        Dnewrep()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        Dnewrep()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    let Drep3pos = document.getElementById('Drep3')
    if (Drep3pos != null){
    Drep3pos.addEventListener('click',function(){
        Dnewrep
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    }
    let Drep4pos = document.getElementById('Drep4')
    if (Drep4pos != null){
    Drep4pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    }
    LHihglight()
}

//Création de la function s'occupant du défi 2
function DFunDefi2(){
    
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
       window.location.reload()  
    })
    let Dpausepos = document.getElementById('Dpause')

    Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque>${Question}</b>`
    for(i=0;i<DreponseTab.length;i++){
        let repi = document.createElement('p')
        repi.setAttribute('id','Drep'+i)
        repi.innerHTML=Drandomrep()
        Ddivreg.appendChild(repi)
    }
    let Dquenpos = document.getElementById('Dquen')
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        Dnewrep()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        Dnewrep()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    let Drep3pos = document.getElementById('Drep3')
    if (Drep3pos != null){
    Drep3pos.addEventListener('click',function(){
        Dnewrep
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    }
    let Drep4pos = document.getElementById('Drep4')
    if (Drep4pos != null){
    Drep4pos.addEventListener('click',function(){
        Dgetques()
        Dquesactu++
        Dquen.innerHTML='Question n°'+Dquesactu
        Dquepos.innerHTML=Question
        for(i=0;i<DreponseTab.length;i++){
            let repi = document.createElement('p')
            repi.setAttribute('id','Drep'+i)
            repi.innerHTML=Drandomrep()
            Ddivreg.appendChild(repi)
        }
    })
    }
    LHihglight()
}