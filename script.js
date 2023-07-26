
setInterval(function tempo(){
   
    let hora = new Date()
    let h = hora.getHours()
    let m = hora.getMinutes()
    let s = hora.getSeconds()

    let horario = document.getElementById('hora')
    let minuto = document.getElementById('minuto')
    let segundo = document.getElementById('segundo')

    if(h < 10){h = '0' + h}
    if(m < 10){m = '0' + m}
    if(s < 10){s = '0' + s}


    horario.innerHTML = h 
    minuto.innerHTML = m
    segundo.innerHTML = s
   
})


