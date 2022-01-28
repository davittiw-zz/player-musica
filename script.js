let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarmusica);

document.querySelector('.botao-p').addEventListener('click', pausarmusica);

musica.addEventListener('timeupdate', atualizbarra);


// functions
function tocarmusica(){
    musica.play();
    document.querySelector('.botao-p').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarmusica(){
    musica.pause();
    document.querySelector('.botao-p').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizbarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
    let tempocorrido = document.querySelector('.inicio');
    tempocorrido.textContent = segundospminuto(Math.floor(musica.currentTime));
}

function segundospminuto(segundos){
    let campominuto = Math.floor(segundos / 60);
    let camposegundo = segundos % 60;
    if(camposegundo < 10){
        camposegundo = '0' + camposegundo;
    }

    return campominuto+':'+camposegundo;
}