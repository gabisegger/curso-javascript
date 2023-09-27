function verificar(){
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById('txtano');
    const res = document.querySelector('#res');

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fano.value);
        let genero = '';
        const img = document.createElement('img');
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem';

            if(idade >= 0 && idade < 13){
                //Criança
                img.setAttribute('src', 'bebemenino.jpg');
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'jovemhomem.jpg');
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adultohomem.jpg');
            }else{
                //Idoso
                img.setAttribute('src', 'idosohomem.jpg');
            }

        } else if(fsex[1].checked){
            genero = 'Mulher';

            if(idade >= 0 && idade < 13){
                //Criança
                img.setAttribute('src', 'bebemenina.jpg');
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'jovemmulher.jpg');
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'adultomulher.jpg');
            }else{
                //Idoso
                img.setAttribute('src', 'idosomulher.jpg');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}