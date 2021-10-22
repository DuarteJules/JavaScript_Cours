function getRandomInt (max){
    return Math.floor(Math.random()*max)
}
//creation des variables pour les questions randoms
let jRandom
let Question 
let jrep1 
let jrep2 
let jrep3
let jrep4 
jRandom = getRandomInt(allQuestions.length)
//attribution des variables pour recup les questions et les réponses
function Dgetques() {
    while (allQuestions[jRandom].quizz == 'pris'){
    jRandom = getRandomInt(allQuestions.length)
    }
    if (allQuestions[jRandom].quizz != 'pris'){

    Question = allQuestions[jRandom].quizz
    jrep1 = allQuestions[jRandom].rep1
    jrep2 = allQuestions[jRandom].rep2
    jrep3 = allQuestions[jRandom].rep3
    jrep4 = allQuestions[jRandom].rep4
    
    if (typeof(jrep3) == 'undefined'){
        console.log('jrep3')
        jrep3 = ''
    }
    if (typeof(jrep4) == 'undefined'){
        console.log('jrep4')
        jrep4 = ''
    }
    allQuestions[jRandom].quizz='pris'
    }
    Dbonrep = allQuestions[jRandom].goodrep
}



