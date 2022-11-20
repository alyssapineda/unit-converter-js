//Generate all conversions when click convert
//Round numbers to 3 decimal places 

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// INITIALISE VARIABLES
let inputEl = document.getElementById("convert-input")
const convertBtn = document.getElementById("convert-btn")
let lengthConversion = document.getElementById("length-conversion")
let volumeConversion = document.getElementById("volume-conversion")
let massConversion = document.getElementById("mass-conversion")

convertBtn.addEventListener("click", function() {
  //Conversions
  let number = Number(inputEl.value)
  let feet = (number * 3.281).toFixed(3)
  let metre = (number / 3.281).toFixed(3)
  let gallon = (number / 3.785).toFixed(3)
  let litre = (number * 3.785).toFixed(3)
  let pound = (number * 2.205).toFixed(3)
  let kilogram = (number / 2.205).toFixed(3)
  lengthConversion.textContent = `${number} metre = ${feet} feet | ${number} feet = ${metre} metres`
  volumeConversion.textContent = `${number} litres = ${gallon} gallon | ${number} gallon = ${litre} litres`
  massConversion.textContent = `${number} kilogram = ${pound} pounds | ${number} pounds = ${kilogram} kilograms`
})