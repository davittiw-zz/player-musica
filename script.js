let musicas = {
    {titulo: 'BSC State Of Mind', artista: 'Squadda', src: 'musicas/BSC State of Mind - Squadda B.mp3', img: 'imagens/1.jpg'}

    {titulo: 'Bay Street Billionaires', artista: 'Squadda', src: 'musicas/Bay Street Billionaires - Squadda B.mp3', img: 'imagens/2.jpg'}

    {titulo: 'Believe', artista: 'NEFFEX', src: 'musicas/Believe - NEFFEX.mp3', img: 'imagens/3.jpg'}

    {titulo: 'Born a Rockstar', artista: 'NEFFEX', src: 'musicas/Born a Rockstar - NEFFEX.mp3', img:'imagens/4.jpg'}

    {titulo: 'Space Age Hustle', artista: 'Squadda', src: 'musicas/Space Age Hustle - Squadda B.mp3', img:'imagens/5.jpg'}

    {titulo: 'Squadda Bambino Tumblr', artista: 'Squadda', src: 'musicas/Squadda Bambino Tumblr - Squadda B.mp3', img:'imagens/6.jpg'}

    {titulo: 'Travel Nonstop', artista: 'Squadda', src: 'musicas/Travel Nonstop - Squadda B.mp3', img:'imagens/7.jpg'}
};

let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundospminuto(Math.floor(musica.duration));

// eventos
document.querySelector('.botao-play').addEventListener('click', tocarmusica);

document.querySelector('.botao-p').addEventListener('click', pausarmusica);

musica.addEventListener('timeupdate', atualizbarra);


// funções
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