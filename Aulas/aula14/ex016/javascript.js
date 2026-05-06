function contar(){
    var n_inicial_obj = window.document.getElementById('n_inicial')  
    var n_final_obj = window.document.getElementById('n_final') 

    var passos_obj = window.document.getElementById('passos')
    var passos_v = Number(passos_obj.value)

    var frase_obj = window.document.getElementById('frase_elem')

    //teste de validade de n1 e n2
    if(n_inicial_obj.value != "" && n_final_obj.value != ""){
        var n1 = Number(n_inicial_obj.value)
        var n2 = Number(n_final_obj.value)
        if(passos_v >0 ){
            frase_obj.innerHTML = '<p>Contando: </p>'
            //Contagem Crescente
            if(n1 < n2) {
                for( var c = n1; c <= n2; c += passos_v){
                    frase_obj.innerHTML += c + '&#128073;'
                }
                frase_obj.innerHTML += '&#127937;'
            //Contagem decrescente
            }else {
                for (var c = n1; c >= n2; c -= passos_v){
                    frase_obj.innerHTML += c + '&#128073;'
                }
            frase_obj.innerHTML += '&#127937;'
        }
        }else {
            window.alert('Digite um valor maior que zero em Passos')
        }
    }else{
        window.alert('ERRO - Os campos Inicio e Fim precisam estar preenchidos')
    }

    
    
}
