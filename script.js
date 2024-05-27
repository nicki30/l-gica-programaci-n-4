// Obtener el canvas y el contexto
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Establecer el tamaño del canvas como el tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Arreglo para almacenar los puntos voladores
var puntos = [];

// Función para inicializar los puntos
function inicializar() {
  for (var i = 0; i < 100; i++) {
    var x = Math.random() * canvas.width; // Posición x aleatoria
    var y = Math.random() * canvas.height; // Posición y aleatoria
    var velocidadX = (Math.random() - 0.5) * 4; // Velocidad x aleatoria
    var velocidadY = (Math.random() - 0.5) * 4; // Velocidad y aleatoria
    var radio = Math.random() * 2; // Radio aleatorio
    puntos.push({x: x, y: y, velocidadX: velocidadX, velocidadY: velocidadY, radio: radio});
  }
}

// Función para dibujar los puntos
function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  
  for (var i = 0; i < puntos.length; i++) {
    ctx.beginPath();
    ctx.arc(puntos[i].x, puntos[i].y, puntos[i].radio, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff'; // Color blanco
    ctx.fill();
  }
}

// Función para actualizar la posición de los puntos
function actualizar() {
  for (var i = 0; i < puntos.length; i++) {
    puntos[i].x += puntos[i].velocidadX;
    puntos[i].y += puntos[i].velocidadY;
    
    // Rebotar los puntos en los bordes del canvas
    if (puntos[i].x < 0 || puntos[i].x > canvas.width) {
      puntos[i].velocidadX *= -1;
    }
    if (puntos[i].y < 0 || puntos[i].y > canvas.height) {
      puntos[i].velocidadY *= -1;
    }
  }
}

// Función principal para animar los puntos voladores
function animar() {
  requestAnimationFrame(animar);
  
  dibujar();
  actualizar();
}

// Función para calcular la serie de Fibonacci
function calcularFibonacci() {
  const numeroInput = document.getElementById('numero');
  const numero = parseInt(numeroInput.value);
  const resultadoDiv = document.getElementById('resultado');
  
  if (isNaN(numero) || numero <= 0) {
    resultadoDiv.textContent = 'Error: Ingresa un número entero positivo.';
    return;
  }
  
  const secuencia = [0, 1];
  
  for (let i = 2; i < numero; i++) {
    secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
  }
  
  const textoResultado = `La serie Fibonacci hasta el número ${numero} es: ${secuencia.join(', ')}`;
  resultadoDiv.textContent = textoResultado;
}

// Llamar a las funciones para inicializar y animar los puntos
inicializar();
animar();
