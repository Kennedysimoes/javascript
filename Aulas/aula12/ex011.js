var idade = 18
console.log(`Com ${idade} anos de idade`)
if (idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório')
}