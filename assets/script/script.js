let audio = document.getElementById('audio');
let playPause = document.getElementById('playPause');
let loadMusic = document.getElementById('loadMusic');
let audioFileInput = document.getElementById('audioFile');
let videoTitle = document.getElementById('videoTitle');
let videoArtist = document.getElementById('videoArtist');
let tocando = false;

// Controlar a reprodução da música
playPause.addEventListener('click', function() {
  if (tocando) {
    audio.pause();
    playPause.innerHTML = '&#9654;'; // Ícone de play
  } else {
    audio.play();
    playPause.innerHTML = '&#10074;&#10074;'; // Ícone de pause
  }
  tocando = !tocando;
});

// Carregar a música
loadMusic.addEventListener('click', function() {
  const file = audioFileInput.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    audio.src = fileURL;

    // Atualiza título e artista
    videoTitle.innerText = file.name.replace(/\.[^/.]+$/, ""); // Remove a extensão do arquivo
    videoArtist.innerText = "Artista Desconhecido"; // Você pode definir uma lógica para obter o artista se disponível

    // Reseta o estado de tocar
    tocando = false;
    playPause.innerHTML = '&#9654;'; // Reseta para o ícone de play
  } else {
    alert('Por favor, escolha um arquivo de áudio.');
  }
});

// Adicionar controle de próxima música (pode ser implementado mais tarde)
document.getElementById('next').addEventListener('click', function() {
  // Lógica para avançar para a próxima música, se houver
});

// Adicionar controle de música anterior (pode ser implementado mais tarde)
document.getElementById('prev').addEventListener('click', function() {
  // Lógica para voltar à música anterior, se houver
});
