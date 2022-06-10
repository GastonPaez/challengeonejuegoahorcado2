
let palabras = ['programacion','diseño','javascript','python','hipervinculo','alura','oracle','frontend','backend'];
let acertadas = []
let incorrectas =[];
let letras = [];
// contador regresivo de errores
let errores = 9
/*
let editWord = ""
    for (let i in seleccion){
        editWord = editWord.concat(seleccion[i] + " ")         
    }
*/

function newGame(){

    // Selecciona una de las palabras de manera aleatoria
    let randomNum = Math.floor(Math.random()*(palabras.length-0+1)+0);
    // Guarda en la variable seleccion la palabra seleccionada
    seleccion = palabras[randomNum]
    
    guiones = document.getElementById('input_count')
    textWord = document.getElementById('input_word')
    textWrong = document.getElementById('input_incorrect')
    // crea un gion por cada letra que contiene la palabra
    select = "_".repeat(seleccion.length)
    guiones.value = select    
    var palabraCorrecta = seleccion.replace(/./g, " ");
    textWord.value= palabraCorrecta
    //textWord.value = palabraIncorrecta
    let incorrect = ""

    
    function verificarPulsacion(key){
        if (letras.length<1  || letras.indexOf(key)<0){
            letras.push(key)
            return false
        }
        else{
            letras.push(key)
            return true
        }
    } 
    
    function agregarLetraCorrecta(i){
        palabraCorrecta += seleccion[i]
    }
    
    function agregarLetraIncorrecta(letter){
        if (seleccion.indexOf(letter)<=0){
            // contador de letras incorrectas
            errores -= 1
            
        }
    }
    document.addEventListener("keydown", e =>{    
        let letra = e.key.toUpperCase()
        if(!verificarPulsacion(e.key)){
            if(seleccion.includes(letra)){
                console.log(letra)
                agregarLetraCorrecta(seleccion.indexOf(letra))
                for (let i = 0; i < seleccion.length; i++){
                    if(seleccion[i]===letra){
                        palabraCorrecta = palabraCorrecta.replaceAt(i,letra)                   
                    }
                }
            }   
            else {
                if (!verificarPulsacion(e.key)) return
                agregarLetraIncorrecta(letra)
                //escribirletraIncorrecta(letra,errores)
            }  
        }  
    });   

    textWrong.value = incorrectas //lista pero debe tomar una cadena
}

