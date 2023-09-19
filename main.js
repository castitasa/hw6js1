let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let second = document.getElementById('second');
let minute = document.getElementById('minute');
let mskd = document.getElementById('mskd');

let min = 0;
let sec = 0;
let ms = 0;
let timer;

const func = () => {
    second.textContent = sec;
    minute.textContent = min;
    mskd.textContent = ms;
}

start.onclick = () => {
    timer = setInterval(()=>{
        ms++;
        if (ms === 100) {
            ms = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
            func()
        } else {
            func()
        }
    }, 10)
}

stop.onclick = () => {
    clearInterval(timer)
    func()
}

reset.onclick = () => {
    clearInterval(timer);
    min = 0;
    sec = 0;
    ms = 0;
    func()
}