let inputNum = document.getElementById("input-num")
let convertBtn = document.getElementById("convert-el")
let length = document.getElementById("length-el")
let volume = document.getElementById("volume-el")
let mass = document.getElementById("mass-el")
let num = 0


function unitConvert() {

    const unit = inputNum.value;
    const meterToFeet = (unit * 3.28084).toFixed(3)
    const feetToMeter = (unit * 0.3048).toFixed(3)

    const litersToGallons = (unit * 0.264172).toFixed(3)
    const GallonsToLiters = (unit * 3.785412).toFixed(3)

    const kilogramsToPounds = (unit * 2.2).toFixed(3)
    const poundsToKilograms = (unit / 2.2).toFixed(3)

    length.textContent = 
    unit +" meters = "+ meterToFeet +" feet | "+unit+" feet = "+feetToMeter+" meters"

    volume.textContent = 
    unit +" liters = "+ litersToGallons +" gallons | "+unit+" gallons = "+GallonsToLiters+" liters"

   mass.textContent = 
    unit +" kilos = "+ kilogramsToPounds +" pounds | "+unit+" pounds = "+poundsToKilograms+" kilos"
}

convertBtn.addEventListener('click', function () {
  unitConvert()
});