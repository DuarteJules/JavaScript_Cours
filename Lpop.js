// Je créer la fonction Lpop
function Lpop(){
    // je relis nouvelle variable Lopopu à l'id de mon bouton abandonner
    let Lopopu = document.getElementById('Dgiveup')
    // je rajoute l'événement click sur une fonction appelé ouvre
    Lopopu.addEventListener('click',ouvre)

    // Je dis à ma fonction click de faire une alerte(Popup) avec un message
    function ouvre(){
        
       let Lopen = alert('Dommage ! ne te décourage pas !')
    }
}