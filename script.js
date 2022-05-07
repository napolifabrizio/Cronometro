//números do cronômetro
let segundo = document.getElementsByTagName('p')[4]
let minuto = document.getElementsByTagName('p')[2]
let hora = document.getElementsByTagName('p')[0]

//botões do cronômetro
let init = document.getElementById('começar')
let stop = document.getElementById('parar')

//valores do cronômetro 
let segundos = 1
let minutos = 1
let horas = 1

//let para o intervalo
let time

//ação para iniciar o cronômetro
init.addEventListener('click', cronos)

function cronos() {
   time = setInterval(cronometro, 1)
}

function cronometro() {

    if (segundos == 60) {
        minuto.innerHTML = minutos
        segundos = 0
        minutos++
    } 
    else if(minutos ==60){
        hora.innerHTML = horas
        minutos = 0
        horas++
    }else {
        segundo.innerHTML = segundos
        segundos++
    }


}

//ação para parar o cronômetro
stop.addEventListener('click', function(){
    clearInterval(time)
})


