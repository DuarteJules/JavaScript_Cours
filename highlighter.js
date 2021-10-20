
//Création d'un fonction LHihglight
function LHihglight(){
<<<<<<< HEAD
    let Lp = document.querySelectorAll('p');
=======
    let Lli = document.querySelectorAll('.reponse');
    console.log(Lli); 
>>>>>>> Jules
    //création d'une boucle que selectionne chacuns de mes éléments(et mes indexs mais pas important)
    
    Lp.forEach(function(p, index){
        // j'ajoute deux événement à mes éléments
        p.addEventListener('mouseover',colorgreen)
        p.addEventListener('mouseleave',colorNothing)
    });


}

// Je définis les événements de mes éléments 
function colorgreen(){
<<<<<<< HEAD
    let Lcases = this
    Lcases.style.color = 'red'
=======
let cases = this
cases.style.color= 'red'
>>>>>>> Jules
}

function colorNothing(){
    let Lcases = this
    Lcases.style.color = 'black'
}




