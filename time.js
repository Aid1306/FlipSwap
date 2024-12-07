// User-defined function to parse a string to a float
function customParseFloat(value) {
  let num = 0, isDecimal = false, decimalFactor = 0.1;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (char === '.') {
      isDecimal = true;
      continue;
    }
    if (char >= '0' && char <= '9') {
      if (!isDecimal) {
        num = num * 10 + (char - '0');
      } else {
        num += (char - '0') * decimalFactor;
        decimalFactor /= 10;
      }
    }
  }
  return num;
}

// User-defined function to check if a value is NaN
function customIsNaN(value) {
  return value !== value; // NaN is the only value in JavaScript not equal to itself
}

// User-defined function to round a number to 2 decimal places
function customToFixed(value, decimals) {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
}

// Convert from seconds and update minutes and hours
function convertFromSeconds() {
  const seconds = customParseFloat(document.getElementById('secondsInput').value);

  if (customIsNaN(seconds)) {
    resetInputs();
    return;
  }

  const minutes = customToFixed(seconds / 60, 2);
  const hours = customToFixed(seconds / 3600, 2);

  document.getElementById('minutesInput').value = minutes;
  document.getElementById('hoursInput').value = hours;
}

// Convert from minutes and update seconds and hours
function convertFromMinutes() {
  const minutes = customParseFloat(document.getElementById('minutesInput').value);

  if (customIsNaN(minutes)) {
    resetInputs();
    return;
  }

  const seconds = customToFixed(minutes * 60, 2);
  const hours = customToFixed(minutes / 60, 2);

  document.getElementById('secondsInput').value = seconds;
  document.getElementById('hoursInput').value = hours;
}

// Convert from hours and update seconds and minutes
function convertFromHours() {
  const hours = customParseFloat(document.getElementById('hoursInput').value);

  if (customIsNaN(hours)) {
    resetInputs();
    return;
  }

  const seconds = customToFixed(hours * 3600, 2);
  const minutes = customToFixed(hours * 60, 2);

  document.getElementById('secondsInput').value = seconds;
  document.getElementById('minutesInput').value = minutes;
}

// Reset all inputs
function resetInputs() {
  document.getElementById('secondsInput').value = '';
  document.getElementById('minutesInput').value = '';
  document.getElementById('hoursInput').value = '';
}
// Menu toggle function remains as is
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
