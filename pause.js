
Dpause1.setAttribute('value','pause')
Dpause1.addEventListener('click', pause)

function falseTimer (){
    boolTimer = false
    Dpause1.setAttribute('value','reprendre ? ')
}

function trueTimer(){
    boolTimer = true 
    Dpause1.setAttribute('value','pause')
}

function pause (){
    if(boolTimer == true){falseTimer();}
    else if (boolTimer == false){trueTimer();}
}
