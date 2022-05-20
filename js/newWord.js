// Nueva Palabra
textArea = document.getElementById('input_text')

btSave = document.getElementById('save-start')
btSave.addEventListener('click', function() {
    let nuevaPalabra = textArea.value;         
    palabras.push(nuevaPalabra);
    console.log(palabras);
    cancelar();    
    play();
    
})