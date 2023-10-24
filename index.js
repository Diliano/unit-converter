/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input");

inputEl.addEventListener("input", function() {
    if (inputEl.value.length > 5) {
        inputEl.value = inputEl.value.slice(0, 5);
    }
})

const convertBtn = document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

convertBtn.addEventListener("click", function() {
    const inputValue = Math.abs(inputEl.value);
    inputEl.value = inputValue;
    convertLength(inputValue);
    convertVolume(inputValue);
    convertMass(inputValue);
});

function convertLength(input) {
    const metersToFeet = (input * 3.281).toFixed(3);
    const feetToMeters = (input / 3.281).toFixed(3);
    lengthResult.textContent = `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters} meters`;
}

function convertVolume(input) {
    const litersToGallons = (input * 0.264).toFixed(3);
    const gallonsToLiters = (input / 0.264).toFixed(3);
    volumeResult.textContent = `${input} liters = ${litersToGallons} gallons | ${input} gallons = ${gallonsToLiters} liters`;
}

function convertMass(input) {
    const kilosToPounds = (input * 2.204).toFixed(3);
    const poundsToKilos = (input / 2.204).toFixed(3);
    massResult.textContent = `${input} kilos = ${kilosToPounds} pounds | ${input} pounds = ${poundsToKilos} kilos`;
}