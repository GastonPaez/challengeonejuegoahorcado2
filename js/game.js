
let palabras = ['programacion','diseño','javascript','python','hipervinculo','alura','oracle','frontend','backend']
let acertadas = []
let incorrectas =[]

/*
let editWord = ""
    for (let i in seleccion){
        editWord = editWord.concat(seleccion[i] + " ")         
    }
*/

function newGame(){
    
    let randomNum = Math.floor(Math.random()*(palabras.length-0+1)+0);
    
    seleccion = palabras[randomNum]
    
    guiones = document.getElementById('input_count')
    textWord = document.getElementById('input_word')
    select = "_".repeat(seleccion.length)
    guiones.value = select    

    textWord.value= seleccion
    let incorrect = ""
    document.addEventListener("keydown", e =>{    
        console.log(e.key)
        // Si la tecla presionada es incorrecta    
        if (seleccion.includes(e.key) && !acertadas.includes(e.key)){
            acertadas.push(e.key)

            incorrect = incorrect.concat(e.key)
            console.log(incorrect)
            
        }
        
    });
    

    
}

// Tecla pulsada