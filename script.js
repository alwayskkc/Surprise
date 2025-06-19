const scenes = [
  { id: 'flower-shower', wait: 4000 },
  { id: 'scene-text',    wait: 3000, text: 'Chitti chandamama ki oka chinna bday gift.' },
  { id: 'scene-bouquet', wait: 3000 },
  { id: 'scene-seq',     wait: 4000, img: 'assets/2.png', text: 'Manchiga thini, bajjo! Always be happy, no matter what!' },
  { id: 'scene-seq',     wait: 4000, img: 'assets/3.png', text: 'Nee life lo vachey hurdles ni Kummesey, thaggedheley ❤️‍🔥' },
  { id: 'scene-seq',     wait: 4000, img: 'assets/1.jpg', text: 'Happiest Birthday Botuuu 🌝' },
  { id: 'scene-moon',    wait: 4000 }
];

let elapsed = 0;
scenes.forEach((s, i) => {
  setTimeout(() => {
    if (i > 0) document.getElementById(scenes[i - 1].id).classList.remove('show');

    const container = document.getElementById(s.id);

    if (s.id === 'scene-seq') {
      container.querySelector('img').classList.remove('show');
      container.classList.add('show');
      setTimeout(() => {
        const imgEl = document.getElementById('seq-img');
        const txtEl = document.getElementById('seq-text');
        imgEl.src = s.img;
        txtEl.textContent = s.text;
        imgEl.classList.add('show');
      }, 50);
    } else {
      if (s.text && s.id === 'scene-text') container.textContent = s.text;
      container.classList.add('show');
    }

  }, elapsed);
  elapsed += s.wait;
});
