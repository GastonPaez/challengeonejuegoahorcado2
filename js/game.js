
let palabras = ['programacion','diseño','javascript','python','hipervinculo','alura','oracle','frontend','backend']




function newGame(){
    
    let randomNum = Math.floor(Math.random()*(palabras.length-0+1)+0);
    
    seleccion = palabras[randomNum]
    
    guiones = document.getElementById('input_count')
    textWord = document.getElementById('input_word')
    select = "_ ".repeat(seleccion.length)
    guiones.value = select
    let editWord = ""
    for (let i in seleccion){
        editWord = editWord.concat(seleccion[i] + " ")         
    }

    textWord.value= editWord
    let incorrect = ""
    document.addEventListener("keydown", e =>{    
        console.log(e.key)
        // Si la tecla presionada es incorrecta    
        if (!seleccion.includes(e.key)){
            incorrect = incorrect.concat(e.key)
            console.log(incorrect)
            
        }
        
    });
    

    
}

// Tecla pulsada