const units = {
    kilometer: {
        meter: 1000,
        centimeter: 100000,
        mile: 0.621371,
        yard: 1093.61
    },
    meter: {
        kilometer: 0.001,
        centimeter: 100,
        mile: 0.000621371,
        yard: 1.09361
    },
    centimeter: {
        meter: 0.01,
        kilometer: 0.00001,
        mile: 0.00000621371,
        yard: 0.0109361
    },
    mile: {
        kilometer: 1.60934,
        meter: 1609.34,
        centimeter: 160934,
        yard: 1760
    },
    yard: {
        kilometer: 0.0009144,
        meter: 0.9144,
        centimeter: 91.44,
        mile: 0.000568182
    }
};

// Get DOM elements
const input = document.getElementById('input');
const result = document.getElementById('result');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');

// Add event listeners
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

function myResult() {
    const inputValue = parseFloat(input.value);
    const inputTypeValue = inputType.value;
    const resultTypeValue = resultType.value;

    // Check if conversion is defined
    if (units[inputTypeValue] && units[inputTypeValue][resultTypeValue]) {
        result.value = inputValue * units[inputTypeValue][resultTypeValue];
    } else {
        result.value = input.value; // Default: no conversion
    }
}
