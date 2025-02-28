const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calcula os graus para cada ponteiro
  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 30 graus por hora + ajuste para minutos
  const minuteDeg = minutes * 6 + (seconds / 60) * 6; // 6 graus por minuto + ajuste para segundos
  const secondDeg = seconds * 6; // 6 graus por segundo

  // Aplica a rotação aos ponteiros
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Inicializa o relógio imediatamente
updateClock();