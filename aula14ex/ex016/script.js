function contar(){
    const inicio = Number(document.getElementById('txtinicio').value);
    const fim = Number(document.getElementById('txtfim').value);
    let passo = Number(document.getElementById('txtpasso').value);
    const resultado = document.getElementById('resultado');

    let numbers = [];
    resultado.innerHTML = `Contando: <br>`;

    if(inicio >= 0 && fim >= 0 && passo >= 0) {

        if(passo <= 0){

            alert('Passo inválido! Considerando PASSO: 1');
            passo = 1;

        } 

        if(inicio < fim){
            //Contagem crescente
            for(i = inicio; i <= fim; i += passo){
                numbers.push(i);
                resultado.innerHTML += ` ${i} \u{1F449}`;
            }

        } else {
            //Contagem descrescente
            for(i = inicio; i >= fim; i -= passo){
                numbers.push(i);
                resultado.innerHTML += ` ${i} \u{1F449}`;
            }

        }

        resultado.innerHTML += `\u{1F3C1}`;
    
    } else{

        resultado.innerText = "Impossível contar!";
        
    }
}
