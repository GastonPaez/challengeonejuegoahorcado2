container1 = document.getElementById('container-1')
container2 = document.getElementById('container-2')
container3 = document.getElementById('container-3')

btAddWord = document.getElementById('add-word')
addWord = btAddWord.addEventListener('click', function(){
    
    container1.classList.remove('container-1')
    container1.classList.add('remove')

   
    container2.classList.remove('remove')
    container2.classList.add('container-2')
} )

btCancel = document.getElementById('cancel')
function cancelar() {           
        container2.classList.remove('container-2')
        container2.classList.add('remove')
            
        container1.classList.remove('remove')
        container1.classList.add('container-1')
}

btPlay = document.getElementById('play')
function play(){
    container1.classList.remove('container-1');
    container1.classList.add('remove');
   
    container3.classList.remove('remove');
    container3.classList.add('container-3');
    newGame();
}
