let hrs = document.getElementById('hrs');
let min = document.getElementById('mins');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    // Getting Hours, Minutes & Seconds
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrsRotation = 30 * hh + mm/2;
    let minRotation = 6 * mm;
    let secRotation = 6 * ss;

    hrs.style.transform = `rotate(${hrsRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000);