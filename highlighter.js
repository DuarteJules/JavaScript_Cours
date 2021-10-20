let Lbool = false; 

function LHihglight(){
    let Lli = document.querySelectorAll('li');
    console.log(Lli); 
    Lli.forEach(function(li, index){
        console.log(li,index)
        li.addEventListener('mouseover',colorgreen)
        li.addEventListener('mouseleave',colorNothing)
    });


}


function colorgreen(){
let cases = this
cases.style.color= 'red'
}

function colorNothing(){
let cases = this
cases.style.color = 'black'
}




