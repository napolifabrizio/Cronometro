//Cada 0 do cronometro, elementos antes do evento click
let seg2 = document.getElementsByTagName('p')[7]
let seg1 = document.getElementsByTagName('p')[6]
let min1 = document.getElementsByTagName('p')[3]
let min2 = document.getElementsByTagName('p')[4]
let hour1 = document.getElementsByTagName('p')[0]
let hour2 = document.getElementsByTagName('p')[1]

//button for start
let button = document.getElementsByTagName('button')[0]

//valor que cada elemento vai receber para mudar o tempo

let segundo1 = 1
let segundo2 = 0
let minuto1 = 1
let minuto2 = 1
let hours1 = 1
let hours2 = 1

button.addEventListener('click', intervalo)

function intervalo() {
    setInterval(iniciar, 0.5)
}

function iniciar() {
    if (segundo2 >= 10) {
        segundo2 = 0
        seg1.innerHTML = segundo1
        segundo1++
    } else {
        seg2.innerHTML = segundo2
        segundo2++
    }

    if(segundo1>=6){
        segundo1 = 0
        min2.innerHTML = minuto2
        minuto2++
    }
    if(minuto2>=10){
        minuto2=0
        min1.innerHTML = minuto1
        minuto1++ 
    }
    if(minuto1>=6){
        minuto1 = 0
        hour2.innerHTML = hours2
        hours2++
    }
    if(hours2>=10){
        hours2 = 0
        hour1.innerHTML = hours1
        hours1++
    }
}



