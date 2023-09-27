function carregar(){
    const msg = window.document.getElementById('msg');
    const img = window.document.getElementById('imagem');
    const data = new Date();
    const hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    
    if(hora >= 0 && hora < 12){
        //Bom dia 
        img.src = 'fotomanha.jpg';
        document.body.style.background = "#e9b384";
    } else if(hora >= 12 && hora < 18){
        //Boa tarde 
        img.src = 'fototarde.jpg';
        document.body.style.background = "#945d56";
    } else{
        //Boa noite 
        img.src = 'fotonoite.jpg'
        document.body.style.background = "#02102b";
    }
}

