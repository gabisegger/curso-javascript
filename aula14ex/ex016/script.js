function contar(){
    const inicio = document.getElementById('txtinicio');
    const fim = document.getElementById('txtfim');
    const passo = document.getElementById('txtpasso');
    const resultado = document.getElementById('resultado');

    for(let i = inicio; i <= fim; i + passo){
        resultado.innerText = i
    }
}
