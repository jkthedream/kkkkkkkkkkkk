let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(evento){
    evento.preventDefault()
    
    let form = document.querySelector('#form-adiciona')
    console.log(form)

    let paciente = obterValoresForm(form)
    console.log(paciente)

    let erros = validaPaciente(paciente)
    console.log(erros)

    if(erros.length > 0){
        exibeMensagemDeErro(erros)
        return
    }
    
    adicionaPacienteNaTabela(paciente)
})

function obterValoresForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function validaPaciente(paciente){
    let erros = []

    if(paciente.nome.length == 0){
        erros.push('O nome não pode estar em branco')
    }
    if(paciente.gordura.length == 0){
        erros.push('A gordura não pode estar em branco')
    }
    if(paciente.peso.length == 0){
        erros.push('O peso não pode estar em branco')
    }
    if(paciente.altura.length == 0){
        erros.push('A altura não pode estar em branco')
    }
    if(!validaPeso(paciente.peso)){
        erros.push('peso Invalido')
    }
    if(!validaAltura(paciente.altura)){
        erros.push('altura invalida')
    }

    return erros
}

function exibeMensagemDeErro(erros){
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function(erros){
        let li = document.createElement('li')
        li.textContent = erros
        ul.appendChild(li)
    })
}

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 1000){
        return true
    } else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    } else{
        return false
    }
}

//  cria uma tr (fileira da tabela)
function montarTr(paciente){
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

// cria uma td (dado da tabela)
function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}