const displayDate = document.querySelector('#today');
const displayTime = document.querySelector('#clock');

//date
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() +1;
const Date1 = today.getDate();
const day1 = today.getDay();

let day2=" "; 

switch(day1){
    case 0:
        day2="sunday";break;
    case 1:
        day2="monday";break;
    case 2:
        day2="tuesday";break;
    case 3:
        day2="wednesday";break;
    case 4:
        day2="thursday";break;
    case 5:
        day2="friday";break;
    case 6:
        day2="saturday";break;
}

//date
displayDate.innerHTML = `year: ${year} month: ${month} date: ${Date1} <span style="font-weight:bold"> ${day2}</span>`;

//time
let clock_clk= () => {
//current time
let current = new Date();
let hrs = current.getHours();
let mins = current.getMinutes();
let secs = current.getSeconds();

let period = "AM";
if (hrs >12){
    period="PM";
}

//for ones place,
hrs = (hrs < 10)? "0"+hrs : hrs;
mins = (mins < 10)? "0"+mins : mins;
secs = (secs < 10)? "0"+secs : secs;

displayTime.innerHTML = `<span style="font-weight:bold">${period} ${hrs} : ${mins} : ${secs}</span>`;
}

setInterval(clock_clk,1000);