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

//Récupération du bouton "défi 1" et création du chemin jusqu'au défi 1
let Ddefi1 = document.getElementById('button1')
Ddefi1.addEventListener('click',newGame)
Ddefi1.addEventListener('click',continue1)


//Récupération du bouton "défi 2" et création du chemin jusqu'au défi 2
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

// fonction qui crée les réponses dans un ordre aléatoire 
function RandomAnswer(){
    
    Dgetques()

    // on récupère les paragraphes dans lesquels sont écrit les réponses et la question
    let Dquepos = document.getElementById('Dque')
    let Drep1pos = document.getElementById('Drep1')
    let Drep2pos = document.getElementById('Drep2')
    let Drep3pos = document.getElementById('Drep3')
    let Drep4pos = document.getElementById('Drep4')
    let i =0
    let random
    
    //attribution des paragraphes dans un tableau 
    DreponseTab[0] = Drep1pos
    DreponseTab[1] = Drep2pos
    DreponseTab[2] = Drep3pos
    DreponseTab[3] = Drep4pos

    //attribution des réponses dans les paragraphes
    Dquepos.innerHTML = Question
    Drep1pos.innerHTML = jrep1
    Drep2pos.innerHTML = jrep2
    Drep3pos.innerHTML = jrep3
    Drep4pos.innerHTML = jrep4

    //boucle permettant d'afficher les réponses dans un ordre aléatoire
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
    // permet de dire au bouton pause que c'est le jeu 1
    gameMode = 1

    //fonction permettant de récuperer réponse et question 
    Dgetques()

    //récupération des information dans le localstorage
    let localtemps = localStorage.getItem(Dtimerep1)
    console.log(localtemps)
    let localbon = localStorage.getItem(DresulkeyB1)
    let localmauv = localStorage.getItem(DresultkeyM1)

    //Vérication des valeurs dans le localstorage et attribution des valeurs adéquat
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
    })
    //création de la page
    Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question :</b>
    <b id=Dque></b>
    <p id=Drep1></p>
    <p id=Drep2></p>
    <p id=Drep3></p>
    <p id=Drep4></p>`

    //fonction qui affiche la question et ses réponses
    RandomAnswer()

    //création du bouton permettant de clicker sur la première réponse
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        
        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep1pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse et du temps
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            //augmentation du compteur de mauvaise réponse et diminution du temps
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        //stockage des variables dans le localstorage
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    //création du bouton permettant de clicker sur la deuxième réponse
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){
        
        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep2pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse et du temps
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            //augmentation du compteur de mauvaise réponse et diminution du temps
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        //stockage des variables dans le localstorage
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    //création du bouton permettant de clicker sur la premieère réponse
    let Drep3pos = document.getElementById('Drep3')
    if (Drep3pos != null){
    Drep3pos.addEventListener('click',function(){
        
        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep3pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse et du temps
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            //augmentation du compteur de mauvaise réponse et diminution du temps
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        //stockage des variables dans le localstorage
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    }
    //création du bouton permettant de clicker sur la premieère réponse
    let Drep4pos = document.getElementById('Drep4')
    if (Drep4pos != null){
    Drep4pos.addEventListener('click',function(){
        
        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep4pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse et du temps
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps += 4
            jtemps = jtemps >= 180 ? 180 : jtemps
        }
        else{
            //augmentation du compteur de mauvaise réponse et diminution du temps
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            jtemps -= 2
        }
        //stockage des variables dans le localstorage
        localStorage[Dtimerep1] = jtemps
        localStorage[DresulkeyB1]= Dbon
        localStorage[DresultkeyM1]= Dmau
        RandomAnswer()
    })
    }
    //appel de la fonction qui permet de surligner la réponses en dessous de notre souris 
    LHihglight()
    //appel de la fonction qui permet de faire apparaitre un pop up quand on perd
    Lpop()
}

//Création de la function s'occupant du défi 2
function DFunDefi2(){
    //permet de dire au bouton pause que c'est le défi 2
    gameMode = 2

    //fonction permettant de récuperer réponse et question
    Dgetques()

    //récupération des informations dans le localstorage
    let localtemps = localStorage.getItem(Dtimerep2)
    console.log(localtemps)
    let localbon = localStorage.getItem(DresulkeyB2)
    let localmauv = localStorage.getItem(DresultkeyM2)

    //Vérication des valeurs dans le localstorage et attribution des valeurs adéquat
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

    //Modification de la page pour cacher le choix du défi et afficher les informations du défi
    Ddiv1.innerHTML = `<b>Défi Incollable</b>`
    let Dgivup = document.createElement('button')
    Dgivup.setAttribute('id','Dgiveup')
    Ddiv2.appendChild(Dgivup)
    Dgivup.innerHTML = 'abandonner'
    createPauseButton();
    let Dgiveuppos = document.getElementById('Dgiveup')
    Dgiveuppos.addEventListener('click',function(){
       localStorage.clear()
    })

    //création de la page
    Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
    Ddivreg.innerHTML = `<b id=Dquen>Question n°`+Dquesactu+`:</b>
    <b id=Dque></b>
    <p id=Drep1></p>
    <p id=Drep2></p>
    <p id=Drep3></p>
    <p id=Drep4></p>`
    //fonction qui affiche la question et ses réponses
    RandomAnswer()
    
    //création du bouton permettant de clicker sur la première réponse
    let Drep1pos = document.getElementById('Drep1')
    Drep1pos.addEventListener('click',function(){
        
        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep1pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
        }
        else{
            //augmentation du compteur de mauvaise réponse
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
        }
        //stockage des variables dans le localstorage
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        //appel de la fonction qui stop le jeu à 5 mauvaises réponse
        Lstop5Error()
    })
    let Drep2pos = document.getElementById('Drep2')
    Drep2pos.addEventListener('click',function(){

        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep2pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        else{
            //augmentation du compteur de mauvaise réponse
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
        }
        //stockage des variables dans le localstorage
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        //appel de la fonction qui stop le jeu à 5 mauvaises réponse
        Lstop5Error()
    })
    let Drep3pos = document.getElementById('Drep3')
    Drep3pos.addEventListener('click',function(){
        
        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep3pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
        }
        else{
            //augmentation du compteur de mauvaise réponse
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse / `+Dbon+` -Mauvaise réponse / `+Dmau+`</b>`
            
        }
        //stockage des variables dans le localstorage
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        //appel de la fonction qui stop le jeu à 5 mauvaises réponse
        Lstop5Error()

    })
    let Drep4pos = document.getElementById('Drep4')
    Drep4pos.addEventListener('click',function(){
        
        //comparaison pour voir si c'est la bonne réponse
        let Attribute = Drep3pos.getAttribute('id')
        let rep = Attribute.charAt(4)
        if(rep == Dbonrep){
            //augmentation du compteur de bonne réponse
            Dbon++
            Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
        }
        else{
            //augmentation du compteur de mauvaise réponse
            Dmau++
            Ddiv3.innerHTML = `<b>Bonne réponse/`+Dbon+`-Mauvaise réponse/`+Dmau+`</b>`
            
        }
        //stockage des variables dans le localstorage
        jtemps = 20
        localStorage[Dtimerep2] = jtemps
        localStorage[DresulkeyB2]= Dbon
        localStorage[DresultkeyM2]= Dmau
        RandomAnswer()
        //appel de la fonction qui stop le jeu à 5 mauvaises réponse
        Lstop5Error()
        
    })
    //appel de la fonction qui permet de faire apparaitre un pop up quand on perd
    Lpop()
    //appel de la fonction qui permet de surligner la réponses en dessous de notre souris 
    LHihglight()
    
}


