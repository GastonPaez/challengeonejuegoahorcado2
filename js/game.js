
let palabras = ['programacion','diseño','javascript','python','hipervinculo','alura','oracle','frontend','backend']



randomNum = Math.floor(Math.random()*(palabras.length-0+1)+0);

seleccion = palabras[randomNum]

guiones = document.getElementById('input_game')
select = seleccion.length *"_ "
guiones.value = select
