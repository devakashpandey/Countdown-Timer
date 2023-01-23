// let milliseconds = 0;
let seconds = 0;
let minutes  = 0;
let hours = 0;
let day = 0;

setInterval(function() {
 
  parseInt(seconds++);

//   if(milliseconds < 10)
//   {
//     milliseconds = "00" + milliseconds;
//   }
//   if(milliseconds === 300)
//   {
//      seconds++;
//      milliseconds = "000"
//   }
  if (seconds === 60)
  {
    minutes++;
    seconds = "00";
  }
  if(minutes === 60)
  {
     hours++;
     minutes = "00";
  }
  if(hours === 24)
  {
     day++;
     hours = "00";
  }

//   document.getElementById("millisec").innerText = milliseconds;
  document.getElementById("secs").innerText = seconds;
  document.getElementById("min").innerText = minutes;
  document.getElementById("hour").innerText = hours;
  document.getElementById("day").innerText = day;

}, 1000)