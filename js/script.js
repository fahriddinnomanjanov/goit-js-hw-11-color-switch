const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const colorRefs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}
const colorTime = null;




colorRefs.startBtn.addEventListener('click', startToChangeBgColor)
function startToChangeBgColor() {
    colorTime = setInterval(() => {
        const randomColors = randomIntegerFromInterval(0 , colors.length)
        document.body.style.backgroundColor = colors[randomColors]
        colorRefs.startBtn.disabled = true;
        colorRefs.stopBtn.disabled = false;
    }, 1000);
}




colorRefs.stopBtn.addEventListener('click', stopToChangeColor)

function stopToChangeColor() {
    clearInterval(colorTime)
    colorRefs.startBtn.disabled = false;
    colorRefs.stopBtn.disabled = true;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};