console.log("hello");

const countdownPharm = () => {
  const pharmDate = new Date("Sept 16, 2023").getTime();
  // console.log(pharmDate);
  const now = new Date().getTime();

  // calculate remaining time
  const gap = pharmDate - now;

  // workout the time in days, hours, mins, seconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // update the html with the calculated values
  // check if the time is past 0.
  document.querySelector(".pharmDay").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".pharmHour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".pharmMinute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".pharmSecond").innerText = textSecond > 0 ? textSecond : 0;
};

countdownPharm();

const countdownWpg = () => {
  const wpgDate = new Date("Sept 18, 2023").getTime();
  // console.log(wpgDate);
  const now = new Date().getTime();

  // calculate remaining time
  const gap = wpgDate - now;

  // workout the time in days, hours, mins, seconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // update the html with the calculated values
  // check if the time is past 0.
  document.querySelector(".wpgDay").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".wpgHour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".wpgMinute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".wpgSecond").innerText = textSecond > 0 ? textSecond : 0;
};

countdownWpg();
