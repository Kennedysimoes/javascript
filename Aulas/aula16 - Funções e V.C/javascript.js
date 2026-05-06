let  vetor = []
let tabela = window.document.getElementById('tab_elem')
let frases = window.document.getElementById('div_tab')
let min = 0
let max = 0
let soma = 0

function adicionar(){
    let num_obj = window.document.getElementById('num_elem')
    if (num_obj.value.length != 0 && num_obj.value >=1 && num_obj.value <= 100){
        let num = Number(num_obj.value)
        let duplicagem = false
        for (let c = 0; c < vetor.length; c++){
            if (vetor[c] == num){
                duplicagem = true;
            }
        }
        if (duplicagem == false){
                vetor.push(num)
                soma +=  num
                let novalinha = window.document.createElement('option')
                novalinha.value = `number ${num}`
                novalinha.text = `Valor ${num} adicionado`
                tabela.appendChild(novalinha)
                for (c = 0; c < vetor.length; c++){
                    if (c == 0){
                        min = vetor[c]
                        max = vetor[c]
                    }else{
                        if (vetor[c] < min) { 
                            min = vetor[c]
                        }
                        if (vetor[c] > max) {
                            max = vetor[c]
                        }
                    }
                }
        }else {
            window.alert('ERRO - Esse número já foi inputado')
        }
    }else {
        window.alert('ERRO - Digite um valor válido')
    }
}

function limpar(){
    frases.innerHTML
    let f_total = window.document.createElement('p')
    f_total.innerHTML = `<p>Ao todo temos ${vetor.length} número(s) cadastrado(s)</p><br>`
    frases.appendChild(f_total)
    f_total.innerHTML += `<p>O maior valor informado foi ${max}</p><br>`
    f_total.innerHTML += `<p>O menor valor informado foi ${min}</p><br>`
    f_total.innerHTML += `<p>Somando todos os valores, temos ${soma}</p><br>`
    f_total.innerHTML += `<p>A média dos valores digitados é ${soma/vetor.length}</p><br>`
}