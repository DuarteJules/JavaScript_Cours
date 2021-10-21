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
Ddefi1.addEventListener('click',diminuerLeTemps1)

//Récupération du bouton "défi 2" et création de l'évènement "cliquer sur le bouton"
let Ddefi2 = document.getElementById('button2')
Ddefi2.addEventListener('click',DFunDefi2)
Ddefi2.addEventListener('click',diminuerLeTemps2)

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
DreponseTab = []
Dgetques()
DreponseTab.push(jrep1,jrep2)
if (jrep3 != undefined){
    DreponseTab.push(jrep3)
}
if (jrep4 != undefined){
    DreponseTab.push(jrep4)
}
//console.log(DreponseTab)
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

    //Dnewgame()
    Dnewrep()

    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;
    jtemps = 120

    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Chrono</b>`
    Ddiv2.innerHTML = `<button id=Dgiveup>Abandonner</button>
    <button id=Dpause>Pause</button>`
    let Dgiveuppos = document.getElementById('Dgiveup')
    Dgiveuppos.addEventListener('click',function(){
        window.location.reload()
    })
    // let Dpause = true
    let Dpausepos = document.getElementById('Dpause')
    Dpausepos.addEventListener('click',function(){
        let Dtempsav = jtemps
        if (Dpause){
        Dpausepos.innerHTML='Reprendre'
        Dpause = false
        }else{
        Dpausepos.innerHTML='Pause'
        Dpause = true
        }
        if (Dtempsav!=jtemps){
            jtemps=Dpause
        }
    })

    Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque>`+Question+`</b>`
    for(i=1;i<5;i++){
        let repi = document.createElement('p')
        repi.setAttribute('id','Drep'+i)
        repi.innerHTML=Drandomrep()
        Ddivreg.appendChild(repi)
    }
    let Dquenpos = document.getElementById('Dquen')
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        console.log('Réponse 1')
        let rep = 1
        // augmentation du timer en cas de bonne réponse
        //augmentation du compteur de bonne réponse
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps >= 180 ? 180 : jtemps + 4
        }
        // décrementation du timer en cas de mauvaise réponse
        // décrementation du compteur de mauvaise réponse 
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps - 2
        }
        Dnewrep()
            Dquesactu++
            Dquenpos.innerHTML = `Question n°`+Dquesactu+`:`
            Dquepos.innerHTML = `<b id=Dque>`+Question+`</b>`
            let newrepi = Drandomrep()
            Drep1pos.innerHTML = newrepi
            newrepi = Drandomrep()
            Drep2pos.innerHTML = newrepi
            newrepi = Drandomrep()
            Drep3pos.innerHTML = newrepi
            newrepi = Drandomrep()
            Drep4pos.innerHTML = newrepi
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        console.log('Réponse 2')
        let rep = 2
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps >= 180 ? 180 : jtemps + 4
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps - 2
        }
    })
    let Drep3pos = document.getElementById('Drep3')
    if (Drep3pos != null){
    Drep3pos.addEventListener('click',function(){
        console.log('Réponse 3')
        let rep = 3
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps >= 180 ? 180 : jtemps + 4
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps - 2
        }
    })
    }
    let Drep4pos = document.getElementById('Drep4')
    if (Drep4pos != null){
    Drep4pos.addEventListener('click',function(){
        console.log('Réponse 4')
        let rep = 4
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps >= 180 ? 180 : jtemps + 4
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps = jtemps - 2
        }
    })
    }
    
    LHihglight()
    Lpop()
}

//Création de la function s'occupant du défi 2
function DFunDefi2(){
    //Dnewgame()
    Dnewrep()
    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;
    Dbooldef1 = 2;
    jtemps = 20
    // timer(Dbooldef1);
    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Incollable</b>`
    Ddiv2.innerHTML = `<button id=Dgiveup>Abandonner</button>
    <button id=Dpause>Pause</button>`
    let Dgiveuppos = document.getElementById('Dgiveup')
    Dgiveuppos.addEventListener('click',function(){
       window.location.reload()  
    })
    let Dpausepos = document.getElementById('Dpause')
    Dpausepos.addEventListener('click',function(){
        let Dtempsav = jtemps
        if (Dpause){
        Dpausepos.innerHTML='Reprendre'
        Dpause = false
            while (Dpause == false){
                if (Dtempsav!=jtemps){
                    jtemps=Dpause
                }
            }
        }else{
        Dpausepos.innerHTML='Pause'
        Dpause = true
        }
    })
    Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque>${Question}</b>`
    for(i=1;i<DreponseTab.length+1;i++){
        let repi = document.createElement('p')
        repi.setAttribute('id','Drep'+i)
        repi.innerHTML=Drandomrep()
        Ddivreg.appendChild(repi)
    }
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        console.log('Réponse 1')
        let rep = 1
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        DFunDefi2()
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        console.log('Réponse 2')
        let rep = 2
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        DFunDefi2()
    })
    let Drep3pos = document.getElementById('Drep3')
    Drep3pos.addEventListener('click',function(){
        console.log('Réponse 3')
        let rep = 3
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        DFunDefi2()
    })
    if (Drep3pos.innerHTML == 'undefined'){
        Drep3pos.innerHTML = ''
    }
    let Drep4pos = document.getElementById('Drep4')
    Drep4pos.addEventListener('click',function(){
        console.log('Réponse 4')
        let rep = 4
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
        }
        DFunDefi2()
    })
    if (Drep4pos.innerHTML == 'undefined'){
        Drep4pos.innerHTML = ''
    }
    Lpop()
    LHihglight()
}


