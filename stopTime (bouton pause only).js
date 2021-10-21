let Dpausepos = document.getElementById('Dpause')
//A chaque clique, on fait pause
Dpausepos.addEventListener('click', function(){
if(jTimer <= 0){
    setTimeout('timer()',1);
} 
else {
    jTimer = jTimer -1;
setTimeout('timer()',1000);
    }
})