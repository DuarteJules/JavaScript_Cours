
//Création d'un fonction LHihglight
function LHihglight(){
    let Lli = document.querySelectorAll('li');
    console.log(Lli); 
    //création d'une boucle que selectionne chacuns de mes éléments(et mes indexs mais pas important)
    
    Lli.forEach(function(li, index){
        console.log(li,index)
        // j'ajoute deux événement à mes éléments
        li.addEventListener('mouseover',colorgreen)
        li.addEventListener('mouseleave',colorNothing)
    });


}

// Je définis les événements de mes éléments 
function colorgreen(){
    let Lcases = this
    Lcases.style.color = 'red'
}

function colorNothing(){
    let Lcases = this
    Lcases.style.color = 'black'
}




