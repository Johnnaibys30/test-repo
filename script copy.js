// Save a reference to temperature input element
const enterTemp;

// Save a reference to Fahrenheit output
const fahOutput;

// Save a reference to Celsius output

const celOutput;

// Save a reference to the Kelvin output
const kelOutput;

// Save a reference to all radio buttons - read up on querySelectorAll
// Be sure to try and use the right css selector - use W3 schools CSS selector reference
const allRadioButtons;

// Save a reference to submit button
const submitBtn;

const userOutput = {
    celsius: null,
    fahrenheit: null,
    kelvin: null
}

// ALREADY DONE
// Fahrenheit to Celsius formula: c = (f - 32) / 1.8
// Fahrenheit to Kelvin formula: k = (f + 459.67) / 1.8
const calculateForCelsius = (c) => {
    userOutput.celsius = c;
    userOutput.fahrenheit = c * 1.8 + 32;
    userOutput.kelvin =  c + 273.15;
}

// ALREADY DONE
// Kelvin to Fahrenheit formula: f = k * 1.8 - 459.67
// Kelvin to Celsius formula: c = k - 273.15
const calculateForKelvin = (k) => {
    userOutput.celsius = k - 273.15;
    userOutput.fahrenheit = k * 1.8 - 459.67;
    userOutput.kelvin = k;
}

// ALREADY DONE
// Celsius to Fahrenheit formula: f = c * 1.8 + 32
// Celsius to Kelvin formula: k = c + 273.15
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
    // Here we want to use our userOutput object to populate our conversions in the DOM
}

const populateUserOutput = (input) => {
    const unitChosen = userUnitChosen();
    if(unitChosen === "Fahrenheit") calculateForFahrenheit(input);
    if(unitChosen === "Celsius") calculateForCelsius(input);
    if(unitChosen === "Kelvin") calculateForKelvin(input);
    setOutput();
}

// We need to add an event listener to our submit button that waits for the user to click on it.
// After the click, we want to populate the user output section of our page.
