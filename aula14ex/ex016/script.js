function contar(){
    const inicio = Number(document.getElementById('txtinicio').value);
    const fim = Number(document.getElementById('txtfim').value);
    const passo = Number(document.getElementById('txtpasso').value);
    const resultado = document.getElementById('resultado');

    let numbers = [];
    if(inicio.lenght > 0 && fim.lenght > 0 && passo.lenght > 0) {
        for(i = inicio; i <= fim; i += passo){
            numbers.push(i);
            console.log(numbers);
            resultado.innerHTML = numbers.join(' ');
        }
    } else{
        alert('Preencha todos os campos para iniciar a contagem!');
    }
}
