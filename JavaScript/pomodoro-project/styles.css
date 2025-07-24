let time = 1500; // 25 minutos
let timerRunning = false;
let interval;
let isWorkMode = true;

const timeDisplay = document.getElementById("time");
const statusDisplay = document.getElementById("status");
const startBtn = document.getElementById("start");

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    startBtn.textContent = "PAUSE";
    statusDisplay.textContent = isWorkMode ? "Foco total!" : "Pausa ativa!";
    interval = setInterval(() => {
      time--;
      updateDisplay();
      if (time <= 0) {
        clearInterval(interval);
        timerRunning = false;
        isWorkMode = !isWorkMode;
        time = isWorkMode ? 1500 : 300;
        updateDisplay();
        startBtn.textContent = "START";
        statusDisplay.textContent = isWorkMode ? "Nova sessão de trabalho" : "Hora de relaxar!";
      }
    }, 1000);
  } else {
    // se já está rodando e clicou de novo, pausa
    clearInterval(interval);
    timerRunning = false;
    startBtn.textContent = "START";
    statusDisplay.textContent = "press start to begin";
  }
}

startBtn.addEventListener("click", startTimer);

updateDisplay(); // exibe tempo inicial
