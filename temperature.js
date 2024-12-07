// Toggle Menu for Small Screen
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

// Conversion from Celsius
function convertFromCelsius() {
  const celsius = parseFloat(document.getElementById('celsiusBox').value);

  if (isNaN(celsius)) {
    clearAll();
    return;
  }

  document.getElementById('fahrenheitBox').value = (celsius * 9 / 5) + 32; // Celsius to Fahrenheit
  document.getElementById('kelvinBox').value = celsius + 273.15;          // Celsius to Kelvin
}

// Conversion from Fahrenheit
function convertFromFahrenheit() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheitBox').value);

  if (isNaN(fahrenheit)) {
    clearAll();
    return;
  }

  document.getElementById('celsiusBox').value = (fahrenheit - 32) * 5 / 9; // Fahrenheit to Celsius
  document.getElementById('kelvinBox').value = ((fahrenheit - 32) * 5 / 9) + 273.15; // Fahrenheit to Kelvin
}

// Conversion from Kelvin
function convertFromKelvin() {
  const kelvin = parseFloat(document.getElementById('kelvinBox').value);

  if (isNaN(kelvin)) {
    clearAll();
    return;
  }

  document.getElementById('celsiusBox').value = kelvin - 273.15;           // Kelvin to Celsius
  document.getElementById('fahrenheitBox').value = (kelvin - 273.15) * 9 / 5 + 32; // Kelvin to Fahrenheit
}

// Clear all fields
function clearAll() {
  document.getElementById('celsiusBox').value = "";
  document.getElementById('fahrenheitBox').value = "";
  document.getElementById('kelvinBox').value = "";
                          }
