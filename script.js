// utility: typewriter effect
function typeWriter(el, text, speed = 60) {
  el.textContent = '';
  let i = 0;
  const iv = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i++);
    } else {
      clearInterval(iv);
    }
  }, speed);
}

const scenes = [
  { id: 'flower-shower', wait: 3000 },
  { id: 'scene-text',    wait: 2200, text: 'Chitti chandamama ki oka chinna bday gift.' },
  { id: 'scene-bouquet', wait: 2000 },
  { id: 'scene-seq',     wait: 2600, img: 'assets/2.png', text: 'Manchiga thini, bajjo! Always be happy, no matter what!' },
  { id: 'scene-seq',     wait: 2600, img: 'assets/3.png', text: 'Nee life lo vachey hurdles ni Kummesey, thaggedheley ❤️‍🔥' },
  { id: 'scene-seq',     wait: 2600, img: 'assets/1.jpg', text: 'Happiest Birthday Botuuu 🌝' },
  { id: 'scene-moon',    wait: 2000 }
];

let elapsed = 0;
scenes.forEach((s, i) => {
  setTimeout(() => {
    if (i > 0) {
      document.getElementById(scenes[i - 1].id).classList.remove('show');
    }
    const container = document.getElementById(s.id);

    if (s.id === 'scene-seq') {
      // sequence: swap image + type text
      const imgEl = document.getElementById('seq-img');
      const txtEl = document.getElementById('seq-text');
      container.classList.add('show');
      imgEl.classList.remove('show');
      imgEl.src = s.img;
      setTimeout(() => {
        imgEl.classList.add('show');
        typeWriter(txtEl, s.text);
      }, 50);
    } else if (s.text) {
      // initial text scene
      container.classList.add('show');
      typeWriter(container, s.text);
    } else {
      // static scenes (bouquet, moon)
      container.classList.add('show');
    }

  }, elapsed);
  elapsed += s.wait;
});
