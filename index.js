const colors = [
    '#FFFFFF','#2196F3','#4CAF50','#FF9800','#009688','#795548',
  ];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBtnStatus = (addForStop, addForStart) => {
    refs.startBtn.disabled = addForStart;
    refs.stopBtn.disabled = addForStop;
};  

let colorSwitch;
refs.startBtn.addEventListener("click", () => {
    changeBtnStatus(false, true);

    colorSwitch = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(colorSwitch);
    changeBtnStatus(true, false);
});