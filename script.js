let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarmusica);

document.querySelector('.botao-p').addEventListener('click', pausarmusica);

musica.addEventListener('timeupdate', atualizbarra);

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
}