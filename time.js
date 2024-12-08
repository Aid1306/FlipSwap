
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


function customIsNaN(value) {
  return value !== value; 
}


function customToFixed(value, decimals) {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
}


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


function resetInputs() {
  document.getElementById('secondsInput').value = '';
  document.getElementById('minutesInput').value = '';
  document.getElementById('hoursInput').value = '';
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
