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
    convertLength();
    convertVolume();
    convertMass();
});

function convertLength() {
    const metersToFeet = (inputEl.value * 3.281).toFixed(3);
    const feetToMeters = (inputEl.value / 3.281).toFixed(3);
    lengthResult.textContent = `${inputEl.value} meters = ${metersToFeet} feet | ${inputEl.value} feet = ${feetToMeters} meters`;
}

function convertVolume() {
    const litersToGallons = (inputEl.value * 0.264).toFixed(3);
    const gallonsToLiters = (inputEl.value / 0.264).toFixed(3);
    volumeResult.textContent = `${inputEl.value} liters = ${litersToGallons} gallons | ${inputEl.value} gallons = ${gallonsToLiters} liters`;
}

function convertMass() {
    const kilosToPounds = (inputEl.value * 2.204).toFixed(3);
    const poundsToKilos = (inputEl.value / 2.204).toFixed(3);
    massResult.textContent = `${inputEl.value} kilos = ${kilosToPounds} pounds | ${inputEl.value} pounds = ${poundsToKilos} kilos`;
}