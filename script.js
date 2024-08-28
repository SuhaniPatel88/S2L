let timerDuration = 180; // 3 minutes in seconds
let intervalId;

function startTimer() {
    const startButton = document.getElementById("startButton");
    const resetButton = document.getElementById("resetButton");
    startButton.classList.add('hidden');
    resetButton.classList.remove('hidden');

    const warningBell = document.getElementById("warningBell");
    const stopBell = document.getElementById("stopBell");

    let remainingTime = timerDuration;

    intervalId = setInterval(() => {
        remainingTime--;

        const timerElement = document.getElementById("timer");

        if (remainingTime === 1) { // 2 min 30 sec warning
            warningBell.play();
        }

        if (remainingTime <= 0) {
            clearInterval(intervalId);
            stopBell.play();
            timerElement.innerHTML = "TIMES UP!";
            timerElement.classList.remove('pulsing');
            resetButton.classList.remove('hidden');
        } else if (remainingTime <= 5) { // Last 5 seconds pulsing
            timerElement.classList.add('pulsing');
        }

        if (remainingTime > 0) {
            timerElement.innerHTML = formatTime(remainingTime);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(intervalId);
    document.getElementById("timer").innerHTML = "03:00";
    document.getElementById("startButton").classList.remove('hidden');
    document.getElementById("resetButton").classList.add('hidden');
    document.getElementById("timer").classList.remove('pulsing');
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
