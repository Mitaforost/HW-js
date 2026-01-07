"use strict";

const timerElement = document.getElementById("timer");
const newYear = new Date("2027-01-01T00:00:00");

function updateTimer() {
  const now = new Date();
  let diff = newYear - now;

  if (diff <= 0) {
    timerElement.textContent = "С Новым Годом!";
    return;
  }

  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;
  const msInMonth = msInDay * 30.44;

  const months = Math.floor(diff / msInMonth);
  diff -= months * msInMonth;

  const days = Math.floor(diff / msInDay);
  diff -= days * msInDay;

  const hours = Math.floor(diff / msInHour);
  diff -= hours * msInHour;

  const minutes = Math.floor(diff / msInMinute);
  diff -= minutes * msInMinute;

  const seconds = Math.floor(diff / msInSecond);

  timerElement.textContent = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

setInterval(updateTimer, 1000);
updateTimer();
