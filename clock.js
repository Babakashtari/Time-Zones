const hours_handle = document.querySelectorAll(".hour_handle");
const minutes_handle = document.querySelectorAll(".minute_handle");
const seconds_handle = document.querySelectorAll(".second_handle");

const hours_number = document.querySelectorAll("section p>span:first-of-type");
const minutes_number = document.querySelectorAll(
  "section p>span:nth-of-type(2)"
);
const seconds_number = document.querySelectorAll("section p>span:last-of-type");

const timeCount = () => {
  const time = new Date();

  // time in Iran:
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hours_number[0].innerHTML = hours;
  minutes_number[0].innerHTML = minutes;
  seconds_number[0].innerHTML = seconds;

  hours_handle[0].style.transform = `rotate(${hours * 30 + 180}deg)`;
  minutes_handle[0].style.transform = `rotate(${minutes * 6 + 180}deg)`;
  seconds_handle[0].style.transform = `rotate(${seconds * 6 + 180}deg)`;

  // time in France:
  const Iranian_Time_In_Milliseconds = Date.now();
  const French_Time = new Date(Iranian_Time_In_Milliseconds - 9000000); //UTC+1

  const hours_France = French_Time.getHours();
  const minutes_France = French_Time.getMinutes();
  const seconds_France = French_Time.getSeconds();

  hours_number[1].innerHTML = hours_France;
  minutes_number[1].innerHTML = minutes_France;
  seconds_number[1].innerHTML = seconds_France;

  hours_handle[1].style.transform = `rotate(${hours_France * 30 + 180}deg)`;
  minutes_handle[1].style.transform = `rotate(${minutes_France * 6 + 180}deg)`;
  seconds_handle[1].style.transform = `rotate(${seconds_France * 6 + 180}deg)`;

  //   time in the US - Los Angeles:
  const LA_Time = new Date(Iranian_Time_In_Milliseconds - 41400000); //UTC-10

  const hours_LA = LA_Time.getHours();
  const minutes_LA = LA_Time.getMinutes();
  const seconds_LA = LA_Time.getSeconds();

  hours_number[2].innerHTML = hours_LA;
  minutes_number[2].innerHTML = minutes_LA;
  seconds_number[2].innerHTML = seconds_LA;

  hours_handle[2].style.transform = `rotate(${hours_LA * 30 + 180}deg)`;
  minutes_handle[2].style.transform = `rotate(${minutes_LA * 6 + 180}deg)`;
  seconds_handle[2].style.transform = `rotate(${seconds_LA * 6 + 180}deg)`;
};
setInterval(timeCount, 1000);
