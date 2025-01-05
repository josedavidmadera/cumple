const wrapper = document.querySelector('.wrapper');
const gif = document.querySelector('.gif'); // Esto parece estar buscando una clase '.jpg', verifica si esto es correcto
const noBtn = document.querySelector('.no-btn'); // Corregí la referencia

noBtn.addEventListener('mouseover', () => {
  const noBtnRect = noBtn.getBoundingClientRect(); // Corregí la variable a 'noBtnRect'
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX); // Corregí 'randomx' a 'randomX'
  const randomY = Math.floor(Math.random() * maxY); // Corregí 'randomy' a 'randomY'

  noBtn.style.left = randomX + 'px'; // Corregí la mayúscula en 'randomX'
  noBtn.style.top = randomY + 'px';  // Corregí 'STYLE' a 'style'
});
// audio.js
window.addEventListener('DOMContentLoaded', () => {
  const audioSrc='Al mismo tiempo.mp3'; // Ruta al archivo de audio
  let audio = null;

  // Revisa si ya existe un reproductor en localStorage
  if (!localStorage.getItem('audioPlayer')) {
      audio = new Audio(audioSrc);
      audio.loop = true; // Reproducción continua
      audio.play();
      localStorage.setItem('audioPlayer', 'playing'); // Guarda el estado
  } else {
      audio = new Audio(audioSrc);
      audio.loop = true; // Reproducción continua
      audio.play();
  }

  // Limpia el reproductor al cerrar el sitio
  window.addEventListener('beforeunload', () => {
      localStorage.removeItem('audioPlayer');
  });
});

