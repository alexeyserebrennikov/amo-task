const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const createTimerAnimator = () => {
  let secondsLeft = 0;
  let timerIntervalId = null;

  return (seconds) => {
    if (timerIntervalId !== null) {
      clearInterval(timerIntervalId);
    }

    secondsLeft = seconds;

    timerIntervalId = setInterval(() => {
      const hours = Math.floor(secondsLeft / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      timerEl.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`;

      secondsLeft--;

      if (secondsLeft < 0) {
        clearInterval(timerIntervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});

