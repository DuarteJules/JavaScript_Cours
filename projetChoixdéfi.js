//Variable de test
let Dbooldef1;
let Dnomrep;
//Variable utilisé dans les défi
let Dbon = 0;
let Dmau = 0;
let Dquesactu = 1;
let Dvalque = 'Qui va réussir le projet ?'
let gameMode
let Dtimerep1 = 'Temps_de_réponse1'
let Dtimerep2 = 'Temps_de_réponse2'
let DresulkeyB1 = "Bon1"
let DresultkeyM1 = "Mauvais1"
let DresulkeyB2 = "Bon2"
let DresultkeyM2 = "Mauvais2"

//Récupération du bouton "défi 1" et création de l'évènement "cliquer sur le bouton"
let Ddefi1 = document.getElementById('button1')
Ddefi1.addEventListener('click',newGame)
Ddefi1.addEventListener('click',continue1)


//Récupération du bouton "défi 2" et création de l'évènement "cliquer sur le bouton"
let Ddefi2 = document.getElementById('button2')
Ddefi2.addEventListener('click',newGame2)
Ddefi2.addEventListener('click',continue2)

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

// fonction qui crée les réponse dans un ordre aléatoire 
function RandomAnswer(){
    Dgetques()
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    let Drep2pos = document.getElementById('Drep2')
    let Drep3pos = document.getElementById('Drep3')
    let Drep4pos = document.getElementById('Drep4')
    let i =0
    let random
    DreponseTab[0] = Drep1pos
    DreponseTab[1] = Drep2pos
    DreponseTab[2] = Drep3pos
    DreponseTab[3] = Drep4pos

    Dquepos.innerHTML = Question
    Drep1pos.innerHTML = jrep1
    Drep2pos.innerHTML = jrep2
    Drep3pos.innerHTML = jrep3
    Drep4pos.innerHTML = jrep4

    console.log('je suis la bonne réponse' + Dbonrep)

    while(i<DreponseTab.length){
        random = Math.floor(Math.random()*DreponseTab.length)
        if(DreponseTab[random] != 'selected'){
            console.log(DreponseTab[random])
            console.log(DreponseTab[random].innerHTML)
                console.log('test')
                Ddivreg.appendChild(DreponseTab[random])
                DreponseTab[random]='selected'
                i++
        }
    }
}

//Création de la function s'occupant du défi 1
function DFunDefi1(){
    gameMode = 1

    //Dnewgame()
    Dgetques()

    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;
    let localtemps = localStorage.getItem(Dtimerep1)
    console.log(localtemps)
    let localbon = localStorage.getItem(DresulkeyB1)
    let localmauv = localStorage.getItem(DresultkeyM1)
    if (localtemps != null){
        jtemps = localtemps
    }
    else{
        console.log('test temps')
        jtemps = 120
    }
    if (localbon != null){
        Dbon = localbon
    }
    else{
        Dbon = 0
    }
    if(localmauv != null){
        Dmau = localmauv
    }
    else {
        Dmau = 0
    }


    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Chrono</b>`
    let Dgivup = document.createElement('button')
    Dgivup.setAttribute('id','Dgiveup')
    Ddiv2.appendChild(Dgivup)
    Dgivup.innerHTML = 'abandonner'
    createPauseButton();
    let Dgiveuppos = document.getElementById('Dgiveup')
    Dgiveuppos.addEventListener('click',function(){
        localStorage.clear()
        window.location.reload()
    })
    Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question :</b>
    <b id=Dque></b>
    <p id=Drep1></p>
    <p id=Drep2></p>
    <p id=Drep3></p>
    <p id=Drep4></p>`
    RandomAnswer()
    let Dquenpos = document.getElementById('Dquen')
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        console.log('Réponse 1')
        let Attribute = Drep1pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        console.log('Réponse 2')
        let Attribute = Drep2pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    let Drep3pos = document.getElementById('Drep3')
    if (Drep3pos != null){
    Drep3pos.addEventListener('click',function(){
        console.log('Réponse 3')
        let Attribute = Drep3pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    }
    let Drep4pos = document.getElementById('Drep4')
    if (Drep4pos != null){
    Drep4pos.addEventListener('click',function(){
        console.log('Réponse 4')
        let Attribute = Drep4pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    }
    
    LHihglight()
    Lpop()
}

//Création de la function s'occupant du défi 2
function DFunDefi2(){
    gameMode = 2
    let localtemps = localStorage.getItem(Dtimerep2)
    console.log(localtemps)
    let localbon = localStorage.getItem(DresulkeyB2)
    let localmauv = localStorage.getItem(DresultkeyM2)
    if (localtemps != null){
        jtemps = localtemps
    }
    else{
        console.log('test temps')
        jtemps = 20
    }
    if (localbon != null){
        Dbon = localbon
    }
    else{
        Dbon = 0
    }
    if(localmauv != null){
        Dmau = localmauv
    }
    else {
        Dmau = 0
    }

    Dgetques()

    //Sauvegarde du texte présent dans le Ddivreg
    let Dreg = Ddivreg.innerHTML;

    jtemps = 20
    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Incollable</b>`
    let Dgivup = document.createElement('button')
    Dgivup.setAttribute('id','Dgiveup')
    Ddiv2.appendChild(Dgivup)
    Dgivup.innerHTML = 'abandonner'
    createPauseButton();
    let Dgiveuppos = document.getElementById('Dgiveup')
    Dgiveuppos.addEventListener('click',function(){
       window.location.reload()
       localStorage.clear()
    })
    Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque></b>
    <p id=Drep1></p>
    <p id=Drep2></p>
    <p id=Drep3></p>
    <p id=Drep4></p>`
    RandomAnswer()
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        console.log('Réponse 1')
        let Attribute = Drep1pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
    
        }
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        Lstop5Error()
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        console.log('Réponse 2')
        let Attribute = Drep2pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
        }
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        Lstop5Error()
    })
    let Drep3pos = document.getElementById('Drep3')
    Drep3pos.addEventListener('click',function(){
        console.log('Réponse 3')
        let Attribute = Drep3pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
        }
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        Lstop5Error()

    })
    let Drep4pos = document.getElementById('Drep4')
    Drep4pos.addEventListener('click',function(){
        console.log('Réponse 4')
        let Attribute = Drep3pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
        }
        else{
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
            
        }
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        Lstop5Error()
        
    })
    Lpop()
    LHihglight()
    
}


