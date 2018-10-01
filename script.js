//radomly log number
/*
function setDate() {
    let num = Math.floor(Math.random() * 100);
    console.log(num);
}
setInterval(setDate, 1000);
*/

const secondHand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate() {
    let now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90; //Add 90 to offset it
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minhand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hourhand.style.transform = `rotate(${hoursDeg}deg)`;

}
setInterval(setDate, 1000);