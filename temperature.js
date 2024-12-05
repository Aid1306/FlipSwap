// Toggle Menu for Small Screen
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Temperature Conversion Function
function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById('inputTemperature').value);
  const unitFrom = document.getElementById('unitFrom').value;
  const unitTo = document.getElementById('unitTo').value;

  let outputTemp;

  if (isNaN(inputTemp)) {
    document.getElementById('outputTemperature').value = "";
    return;
  }

  if (unitFrom === "celsius") {
    if (unitTo === "fahrenheit") {
      outputTemp = (inputTemp * 9/5) + 32;
    } else if (unitTo === "kelvin") {
      outputTemp = inputTemp + 273.15;
    } else {
      outputTemp = inputTemp;
    }
  } else if (unitFrom === "fahrenheit") {
    if (unitTo === "celsius") {
      outputTemp = (inputTemp - 32) * 5/9;
    } else if (unitTo === "kelvin") {
      outputTemp = (inputTemp - 32) * 5/9 + 273.15;
    } else {
      outputTemp = inputTemp;
    }
  } else if (unitFrom === "kelvin") {
    if (unitTo === "celsius") {
      outputTemp = inputTemp - 273.15;
    } else if (unitTo === "fahrenheit") {
      outputTemp = (inputTemp - 273.15) * 9/5 + 32;
    } else {
      outputTemp = inputTemp;
    }
  }

  document.getElementById('outputTemperature').value = outputTemp.toFixed(2);
}