const inputEl = document.querySelector("#input-el");
const btnEl = document.querySelector("#btn-el");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

let inputVal = 0;

btnEl.addEventListener("click", function () {
  inputVal = inputEl.value;
  lengthEl.textContent = `${inputVal} meters = ${(inputVal * 3.281).toFixed(
    3
  )} feet | ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meters`;
  volumeEl.textContent = `${inputVal} liters = ${(inputVal * 0.264).toFixed(
    3
  )} gallons | ${inputVal} gallons = ${(inputVal / 0.264).toFixed(3)} liters`;
  massEl.textContent = `${inputVal} kilograms = ${(inputVal * 2.204).toFixed(
    3
  )} pounds | ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} kilograms`;
});
