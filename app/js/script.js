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

  // update the html with the calculated values
  // check if the time is past 0.
  document.querySelector(".pharmDay").innerText = textDay;
  document.querySelector(".pharmHour").innerText = textHour;
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

  // update the html with the calculated values
  // check if the time is past 0.
  document.querySelector(".wpgDay").innerText = textDay;
  document.querySelector(".wpgHour").innerText = textHour;
};

countdownWpg();
