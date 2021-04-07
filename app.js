const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw();
});

const sun = new Image();
const moon = new Image();
const earth = new Image();

sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';

const draw = () => {
  context.globalCompositeOperation = 'destination-over'; //Les nouvelles formes sont dessinées derrière le contenu existant.
  context.clearRect(0, 0, 300, 300);

  //earth orbit
  context.beginPath();
  context.strokeStyle = 'crimson';

  context.arc(150, 150, 105, 0, Math.PI * 2);
  context.stroke();

  context.save();
};

draw();
