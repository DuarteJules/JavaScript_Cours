function getRandomInt (max){
    return Math.floor(Math.random()*max)
}
let jRandom = getRandomInt(allQuestions.length)
let Question = allQuestions[jRandom].quizz
let jrep1 = allQuestions[jRandom].rep1
let jrep2 = allQuestions[jRandom].rep2
let jrep3= allQuestions[jRandom].rep3
let jrep4 = allQuestions[jRandom].rep4

console.log(jRandom)
console.log(Question)
console.log(jrep1)
console.log(jrep2)
if (jrep3 != undefined){
    console.log(jrep3)
}
if (jrep4 != undefined){
    console.log(jrep4)
}