let croSeg = document.getElementById('segundos')
let croMin = document.getElementById('minutos')
let croHour = document.getElementById('horas')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let numero = 0
let min = 1
let hour = 1

let seg
let minu
let hh

start.addEventListener('click', init)

function init() {
    seg = setInterval(segundos, 1000)
    minu = setInterval(minutos, (60*1000)+1)
    hh = setInterval(horas, (60*60*1000)+2)

}

function segundos() {
    if (numero >= 60) {
        numero = 1
        
    } else {
        croSeg.innerHTML = numero
        numero++
    }
}

function minutos(){
    if(min>=60){
        min = 1
    }else{
        croMin.innerHTML = min
        min++
    }
}

function horas(){
    croHour.innerHTML = hour
    hour++
}

stop.addEventListener('click', stoper)

function stoper(){

    clearInterval(seg)
    clearInterval(minu)
    clearInterval(hh)
}




