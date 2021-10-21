
//Création d'un fonction LHihglight
function LHihglight(){
    let Lp = document.querySelectorAll('p');
    //création d'une boucle que selectionne chacuns de mes éléments(et mes indexs mais pas important)
    
    Lp.forEach(function(p, index){
        // j'ajoute deux événement à mes éléments
        p.addEventListener('mouseover',colorgreen)
        p.addEventListener('mouseleave',colorNothing)
    });


}

// Je définis les événements de mes éléments 
function colorgreen(){
    
let cases = this
cases.style.color= 'red'

}

function colorNothing(){
    let Lcases = this
    Lcases.style.color = 'black'
}




