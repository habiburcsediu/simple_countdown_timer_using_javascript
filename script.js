let [minutes, seconds] = [2, 60];
let displayTime = document.querySelector('#display_time');
let t = null;

function timer() {
    seconds--;

    if(seconds === 0){
        seconds = 60;
        minutes--;
    }

    let m = minutes < 10 ? '0' + minutes : minutes; 
    let s = seconds < 10 ? '0' + seconds : seconds; 

    displayTime.innerHTML = m + ':' + s;

    if(minutes == -1){
        clearInterval(t);
        displayTime.innerHTML = '00:00'
    }
}

function startTimer(){

    if(t !== null){
        clearInterval(t);
    }
    t = setInterval(timer, 1000);
}