function getRandomInt (max){
    return Math.floor(Math.random()*max)
}
//creation des variables pour les questions randoms
let Dnumques = 0;
let jRandom
let Question 
let jrep1 
let jrep2 
let jrep3
let jrep4 
jRandom = getRandomInt(allQuestions.length)
//attribution des variables
function Dgetques() {
    Dnumques++
    // jRandom = getRandomInt(allQuestions.length)
    // console.log(allQuestions[jRandom].quizz)
    while (allQuestions[jRandom].quizz == 'pris'){
    jRandom = getRandomInt(allQuestions.length)
    }
    if (allQuestions[jRandom].quizz != 'pris'){
    Question = allQuestions[jRandom].quizz
    jrep1 = allQuestions[jRandom].rep1
    jrep2 = allQuestions[jRandom].rep2
    jrep3= allQuestions[jRandom].rep3
    jrep4 = allQuestions[jRandom].rep4
    Dbonrep = allQuestions[jRandom].goodrep
    localStorage[Dnumques] = Question
    allQuestions[jRandom].quizz='pris'
    }

}
Dbonrep = allQuestions[jRandom].goodrep
