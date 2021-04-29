

const enterTemp = document.querySelector("#enter-temp > input ");
console.log(enterTemp, "<--- checking...")

const fahOutput = document.querySelector("#fanenheit-output");

const celOutput = document.querySelector("#celcius-output");

const kelOutput = document.querySelector("#kelvin-output");



const allRadioButtons = document.querySelectorAll("#choose-unit input");


const submitBtn = document.querySelector("submit");

const userOutput = {
    celsius: null,
    fahrenheit: null,
    kelvin: null
}

const calculateForCelsius = (c) => {
    userOutput.celsius = c;
    userOutput.fahrenheit = c * 1.8 + 32;
    userOutput.kelvin =  c + 273.15;
}
const calculateForKelvin = (k) => {
    userOutput.celsius = k - 273.15;
    userOutput.fahrenheit = k * 1.8 - 459.67;
    userOutput.kelvin = k;
}
const calculateForFahrenheit = (f) => {
    userOutput.celsius = (f - 32) / 1.8;
    userOutput.fahrenheit = f;
    userOutput.kelvin = (f + 459.67) / 1.8;
}
const userUnitChosen = () => {
    for(let i = 0; i < allRadioButtons.length; i++){
        
        if(allRadioButtons[i].checked) return allRadioButtons[i].value;
    }
}
const setOutput = () => {
}
const populateUserOutput = (input) => {
    const unitChosen = userUnitChosen();
    if(unitChosen === "Fahrenheit") calculateForFahrenheit(input);
    if(unitChosen === "Celsius") calculateForCelsius(input);
    if(unitChosen === "Kelvin") calculateForKelvin(input);
    setOutput();
}