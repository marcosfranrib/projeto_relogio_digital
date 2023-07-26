
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

function mudar(){
    let check = document.getElementById('chk')
    let body = document.body.style
    let containerR = document.getElementById('container-relogio')
    let div = document.getElementsByClassName('padrao-div')

  

    if(check.checked == false){
        body.backgroundColor = 'black'
        containerR.style.backgroundColor = '#042b42'

        for(let c=0; c <= div.length; c++){
           
            div[c].style.backgroundColor = '#fff2f2'
            div[c].style.color ='#021d2e'
    
        }
        
    }else if(check.checked == true){
        body.backgroundColor = '#fff2f2'
        containerR.style.backgroundColor = ''
        for(let c=0; c <= div.length; c++){
           
            div[c].style.backgroundColor = '#021d2e'
            div[c].style.color ='#fff2f2'
    
        }

    }

    

    

}

