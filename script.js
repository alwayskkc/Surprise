tsParticles.load('flower-showers', {
  fpsLimit: 100,
  particles: {
    number: { value: 60, density: { enable: false } },
    opacity: { value: { min: 0.5, max: 1 } },
    shape: {
      type: 'image',
      image: {
        src: 'assets/petal.png', // add a transparent petal PNG here
        width: 20,
        height: 20
      }
    },
    gravity: { enable: true, acceleration: 0.45 },
    move: {
      direction: 'bottom',
      enable: true,
      outModes: { default: 'out' },
      speed: { min: 1, max: 3 }
    },
    size: { value: { min: 16, max: 32 } }
  },
  detectRetina: true
});
// Typewriter helper
function typeWriter(el, text, speed = 60) {
  el.textContent = '';
  let i = 0;
  const iv = setInterval(() => {
    if (i < text.length) el.textContent += text.charAt(i++);
    else clearInterval(iv);
  }, speed);
}

const scenes = [
  { id: 'flower-showers', wait: 3400 },
  { id: 'scene-text',    wait: 2500, text: 'Botu...' },
  { id: 'scene-bouquet', wait: 4000 },
  { id: 'scene-seq',     wait: 4600, img: 'assets/2.png', text: 'Always be happy, no matter what!' },
  { id: 'scene-seq',     wait: 5700, img: 'assets/3.png', text: 'Life ni enjoy chesthu, anni problems ni dhaatukuntu, dhooskupo, thaggedheley❤️‍🔥' },
  { id: 'scene-seq',     wait: 4600, img: 'assets/1.jpg', text: 'Once again, Happiest Birthday Botuuu 🌝' },
  { id: 'scene-moon',    wait: 4000 }
  
];

let elapsed = 0;
scenes.forEach((s, i) => {
  setTimeout(() => {
    if (i > 0) document.getElementById(scenes[i - 1].id).classList.remove('show');
    const el = document.getElementById(s.id);
    el.classList.add('show');

    if (s.text && s.id === 'scene-text') typeWriter(el, s.text);
    else if (s.id === 'scene-seq') {
      const imgEl = document.getElementById('seq-img');
      const txtEl = document.getElementById('seq-text');
      imgEl.classList.remove('show');
      imgEl.src = s.img;
      setTimeout(() => { imgEl.classList.add('show'); typeWriter(txtEl, s.text); }, 50);
    }
  }, elapsed);
  elapsed += s.wait;
});