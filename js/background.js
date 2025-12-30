(function(){
  const canvas = document.getElementById('sakuraCanvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const petals = [];
  const petalCount = 80;

  function random(min,max){ return Math.random()*(max-min)+min; }

  for(let i=0;i<petalCount;i++){
    petals.push({
      x: random(0,canvas.width),
      y: random(0,canvas.height),
      radius: random(5,12),
      speedY: random(0.5,2),
      speedX: random(-0.5,0.5),
      angle: random(0,Math.PI*2),
      rotationSpeed: random(-0.02,0.02),
      color: `rgba(211,91,91,${random(0.6,1)})`
    });
  }

  function drawPetal(p){
    ctx.save();
    ctx.translate(p.x,p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.bezierCurveTo(-p.radius, -p.radius, p.radius, -p.radius, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let p of petals){
      drawPetal(p);
      p.y += p.speedY;
      p.x += p.speedX;
      p.angle += p.rotationSpeed;

      if(p.y > canvas.height) { p.y = -p.radius; p.x = random(0,canvas.width); }
      if(p.x > canvas.width) p.x = 0;
      if(p.x < 0) p.x = canvas.width;
    }
    requestAnimationFrame(draw);
  }

  draw();
})();