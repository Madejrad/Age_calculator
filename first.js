const input = document.querySelector("#input");
const result = document.querySelector(".result");
const button = document.querySelector("#butt");
const now = new Date();

let nowDay = now.getDate();
let nowMonth = now.getMonth() + 1;
let nowYear = now.getFullYear();

let inputYear = parseInt(input.value.substr(0, 4));
let inputMonth = parseInt(input.value.substr(5, 2));
let inputDay = parseInt(input.value.substr(8));

const counted = nowYear - inputYear;

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (counted > 1) {
    if (inputMonth < nowMonth) {
      const age = counted;
      result.textContent = `Your age is ${age} years.`;
    } else if (inputMonth > nowMonth) {
      const age = counted - 1;
      result.textContent = `Your age is ${age} years.`;
    } else {
      if (inputDay > nowDay) {
        const age = counted - 1;
        result.textContent = `Your age is ${age} years.`;
      } else {
        const age = counted;
        result.textContent = `Your age is ${age} years.`;
      }
    }
  } else if (counted == 1) {
    if (inputMonth < nowMonth) {
      const age = counted;
    } else if (inputMonth == nowMonth) {
      if (inputDay > nowDay) {
        result.textContent = `Your age is less than one year.`;
      } else {
        result.textContent = `Your age is 1 year.`;
      }
    } else result.textContent = `Your age is less than one year.`;
  } else {
    result.textContent = `Your age is less than one year.`;
  }
});
