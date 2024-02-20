let hr = document.querySelector("#hrs");
let mn = document.querySelector("#min");
let sc = document.querySelector("#sec");

// Digital Clock
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let secend = document.getElementById("second");
let ampm = document.getElementById("ampm");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours() * 30;
  let minutes = date.getMinutes() * 6;
  let secends = date.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
  mn.style.transform = `rotateZ(${minutes}deg)`;
  sc.style.transform = `rotateZ(${secends}deg)`;

  //   Digital Clock
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  var am = h >= 12 ? "PM" : "AM";

  //   Convert 24Hours Clock to 12Hours Clock
  if (h > 12) {
    h = h - 12;
  }

  //   Add Zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  secend.innerHTML = s;
  ampm.innerHTML = am;
});
