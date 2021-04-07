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
  context.translate(150, 150);

  //earth & earth-rotating on orbit
  const time = new Date();
  //console.log(time);
  context.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );

  //earth on orbit
  context.translate(105, 0);
  context.drawImage(earth, -12, -12); //-12: earth center on orbit

  //moon
  context.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  context.translate(0, 28);

  context.drawImage(moon, -3.5, -3.5);

  context.restore();

  //sun
  context.drawImage(sun, 0, 0);
  window.requestAnimationFrame(draw);
};

draw();
