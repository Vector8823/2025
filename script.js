//B1 
const btnEmpezar = document.getElementById("btn-empezar");
const pantallaInicial = document.getElementById("pantalla-inicial");
const pantallaCuenta = document.getElementById("pantalla-cuenta");
const contador = document.getElementById("contador");
const pantallaNegra = document.getElementById("pantalla-negra");
const tarjeta = document.getElementById("tarjeta");
const audio = document.getElementById("audio");
const confetiCanvas = document.getElementById("confeti");

let confetiCtx = confetiCanvas.getContext("2d");
let confetiPieces = [];

// B2
btnEmpezar.addEventListener("click", () => {
  pantallaInicial.classList.add("oculto"); // B-2.1
  pantallaCuenta.classList.remove("oculto"); // B-2.2
  iniciarCuentaRegresiva();
});

// B3
function iniciarCuentaRegresiva() {
  let tiempo = 5; // TIME
  contador.textContent = tiempo;

  const intervalo = setInterval(() => {
    tiempo--;
    contador.textContent = tiempo;

    if (tiempo === 0) {
      clearInterval(intervalo);
      pantallaCuenta.classList.add("oculto");
      mostrarPantallaNegra();
    }
  }, 1000); // B4

// B5
function mostrarPantallaNegra() {
  pantallaNegra.classList.remove("oculto");
  audio.play();
  audio.addEventListener("ended", lanzarConfeti); // B6
}

// B7
function lanzarConfeti() {
  confetiCanvas.classList.remove("oculto");
  generarConfeti();

  setTimeout(() => {
    explotarConfeti();
  }, 4000); // B8
}

// B9
function generarConfeti() {
  const colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
  for (let i = 0; i < 200; i++) {
    confetiPieces.push({
      x: Math.random() * confetiCanvas.width,
      y: Math.random() * confetiCanvas.height - confetiCanvas.height,
      color: colores[Math.floor(Math.random() * colores.length)],
      size: Math.random() * 5 + 5,
      velocityX: Math.random() * 2 - 1,
      velocityY: Math.random() * 3 + 2,
    });
  }

  requestAnimationFrame(animarConfeti);
}

// B10a
function animarConfeti() {
  confetiCtx.clearRect(0, 0, confetiCanvas.width, confetiCanvas.height);

  confetiPieces.forEach((confeti) => {
    confeti.x += confeti.velocityX;
    confeti.y += confeti.velocityY;

    confetiCtx.fillStyle = confeti.color;
    confetiCtx.fillRect(confeti.x, confeti.y, confeti.size, confeti.size);
  });

  requestAnimationFrame(animarConfeti);
}

// END
function explotarConfeti() {
  confetiPieces = []; 
  confetiCtx.clearRect(0, 0, confetiCanvas.width, confetiCanvas.height);
  tarjeta.classList.add("oculto"); 

 
  const explosionDiv = document.createElement("div");
  explosionDiv.classList.add("explosion");
  document.body.appendChild(explosionDiv);

  setTimeout(() => {
    explosionDiv.remove(); 
    window.close(); 
  }, 2000);
}

// Z1
window.addEventListener("resize", ajustarCanvas);
function ajustarCanvas() {
  confetiCanvas.width = window.innerWidth;
  confetiCanvas.height = window.innerHeight;
}

ajustarCanvas();  }