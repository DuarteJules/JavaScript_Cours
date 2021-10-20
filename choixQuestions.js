function getRandomInt (max){
    return Math.floor(Math.random()*max)
}
let jRandom
let Question 
let jrep1 
let jrep2 
let jrep3
let jrep4 
function Dgetques(){
jRandom = getRandomInt(allQuestions.length)
Question = allQuestions[jRandom].quizz
jrep1 = allQuestions[jRandom].rep1
jrep2 = allQuestions[jRandom].rep2
jrep3= allQuestions[jRandom].rep3
jrep4 = allQuestions[jRandom].rep4
}