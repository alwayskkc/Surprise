// initialize tsParticles for falling petals
tsParticles.load('flower-shower', {
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: false } },
    shape: {
      type: 'image',
      image: {
        src: 'assets/petal.png', // add a transparent petal PNG here
        width: 32,
        height: 32
      }
    },
    gravity: { enable: true, acceleration: 0.15 },
    move: {
      direction: 'bottom',
      enable: true,
      outModes: { default: 'out' },
      speed: { min: 1, max: 3 }
    },
    size: { value: { min: 16, max: 32 } },
    opacity: { value: { min: 0.5, max: 1 } }
  },
  detectRetina: true
});

// typewriter helper
function typeWriter(el, text, speed = 60) {
  el.textContent = '';
  let i = 0;
  const iv = setInterval(() => {
    if (i < text.length) el.textContent += text.charAt(i++);
    else clearInterval(iv);
  }, speed);
}

const scenes = [
  { id: 'flower-shower', wait: 4000 },
  { id: 'scene-text',    wait: 4200, text: 'Chitti chandamama ki oka chinna bday gift.' },
  { id: 'scene-bouquet', wait: 4000 },
  { id: 'scene-seq',     wait: 4600, img: 'assets/2.png', text: 'Manchiga thini, bajjo! Always be happy, no matter what!' },
  { id: 'scene-seq',     wait: 4600, img: 'assets/3.png', text: 'Nee life lo vachey hurdles ni Kummesey, thaggedheley ❤️‍🔥' },
  { id: 'scene-seq',     wait: 4600, img: 'assets/1.jpg', text: 'Happiest Birthday Botuuu 🌝' },
  { id: 'scene-moon',    wait: 4000 }
];

let elapsed = 0;
scenes.forEach((s, i) => {
  setTimeout(() => {
    // hide previous
    if (i > 0) document.getElementById(scenes[i - 1].id).classList.remove('show');

    const el = document.getElementById(s.id);
    el.classList.add('show');

    if (s.text && s.id === 'scene-text') {
      typeWriter(el, s.text);
    } else if (s.id === 'scene-seq') {
      const imgEl = document.getElementById('seq-img');
      const txtEl = document.getElementById('seq-text');
      imgEl.classList.remove('show');
      imgEl.src = s.img;
      setTimeout(() => {
        imgEl.classList.add('show');
        typeWriter(txtEl, s.text);
      }, 50);
    }
  }, elapsed);

  elapsed += s.wait;
});
