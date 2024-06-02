window.onload=function(){

const fieldBlock1 = document.getElementById("field1")
const fieldBlock2 = document.getElementById("field2")
const fieldBlock3 = document.getElementById("field3")
let conversionBtn = document.getElementById("convert-btn")
let conversionInput = document.getElementById("conversion")

function meterToFeet() {
    return conversionInput.value * 3.281
}

function feetToMeter() {
    return conversionInput.value / 3.281
}

function literToGallon() {
    return conversionInput.value * 0.264
}

function gallonToLiter() {
    return conversionInput.value / 0.264
}

function kilogramToPound() {
    return conversionInput.value * 2.204 
}

function poundToKilogram() {
    return conversionInput.value / 2.204 
}

conversionBtn.addEventListener("click", function() {
    fieldBlock1.textContent = `${conversionInput.value} meters = 
        ${meterToFeet().toFixed(3)} feet 
            | ${conversionInput.value} feet = 
                ${feetToMeter().toFixed(3)} meters`

    fieldBlock2.textContent = `${conversionInput.value} liters = 
        ${literToGallon().toFixed(3)} gallons 
            | ${conversionInput.value} gallons =  
                    ${gallonToLiter().toFixed(3)} liters`
                    
    fieldBlock3.textContent = `${conversionInput.value} kilos = 
        ${kilogramToPound().toFixed(3)} pounds 
            | ${conversionInput.value} 
                pounds = ${poundToKilogram().toFixed(3)} kilos`
})
}