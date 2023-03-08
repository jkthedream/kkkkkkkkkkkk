//mudando titulo dinamicamente
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

//selecionando todos os pacientes
let pacientes = document.querySelectorAll('.paciente')
//console.log(pacientes)

//percorrendo lista de pacientes
for (var i = 0; i <= pacientes.length; i++){
    let paciente = pacientes[i]
//selecionando peso
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent
//selecionando altura
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent

}

let pesoEhValido = validaPeso(peso)
let alturaEhValido = validaAltura (altura)

    if(!pesoEhValido){
        console.log('peso invalido')
        pesoEhValido = false
        imcTd.textContent = ('peso ivalido')
        paciente.classList.add('paciente invalido')

    }

    
    if(!alteraEhValido){
        console.log('altura invalido')
        pesoEhValido = false
        imcTd.textContent ='altura ivalido'
        paciente.classList.add('paciente invalido')

    }

    if(pesoEhValido && alturaEhValido){
        let imc = calculaImc(peso, altura)
        imcTd.textContent = imc
    }


//calculando imc
function calculaImc (peso, altura){
    let imc = 0
    imc = peso / (altura * altura)
    //ajustando numero de casas decimais
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true
    }else{
        return false
    }
 }  

    function validaAltura(altura){
        if(altura >= 0 && altura <= 3.00){
            return true
        }else{
            return false
        }
}
console.log
