function calcular(){
    var num_obj = window.document.getElementById('num_elem')
    var num_val = Number(num_obj.value)

    let quadro_obj = window.document.getElementById('quadro_elem')

    var frase_obj = window.document.getElementById('linha_elem')

    if (num_obj.value == ""){
        window.alert('ERRO - Digite uma valor')
    }else {
        quadro_obj.innerHTML = ''
        for (var c = 0; c <= 10; c++){
            let novalinha = window.document.createElement('option')
            novalinha.value = `line${c}`
            if ((c * num_val)% 1 == 0){
                novalinha.innerText = `${num_val} x ${c} = ${c * num_val}`
            }else {
                novalinha.innerText = `${num_val} x ${c} = ${(c * num_val).toFixed(1)}`
            }
            quadro_obj.appendChild(novalinha)
        }
    }

}