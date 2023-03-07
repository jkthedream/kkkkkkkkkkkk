//mudando titulo dinamicamente
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

//selecionando todos os pacientes
let pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)
//percorrendo lista de pacientes
for (var i = 0; i <= pacientes.length; i++){
    let paciente = pacientes[i]
//selecionando peso
    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent
//selecionando altura
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent


    let imcTd = paciente.querySelector('.info-imc')
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



imcTd.textContent = imc