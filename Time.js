function convertTime() {
  const inputTime = parseFloat(document.getElementById('inputTime').value);
  const unitFrom = document.getElementById('unitFrom').value;
  const unitTo = document.getElementById('unitTo').value;

  if (isNaN(inputTime)) {
    document.getElementById('outputTime').value = '';
    return;
  }

  let timeInSeconds;

  // Convert input to seconds
  switch (unitFrom) {
    case 'seconds':
      timeInSeconds = inputTime;
      break;
    case 'minutes':
      timeInSeconds = inputTime * 60;
      break;
    case 'hours':
      timeInSeconds = inputTime * 3600;
      break;
    default:
      timeInSeconds = inputTime;
  }

  // Convert seconds to target unit
  let convertedTime;
  switch (unitTo) {
    case 'seconds':
      convertedTime = timeInSeconds;
      break;
    case 'minutes':
      convertedTime = timeInSeconds / 60;
      break;
    case 'hours':
      convertedTime = timeInSeconds / 3600;
      break;
    default:
      convertedTime = timeInSeconds;
  }

  document.getElementById('outputTime').value = convertedTime.toFixed(2);
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}