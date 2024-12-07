function updateValues(base) {
  const decimalInput = document.getElementById('decimalInput');
  const binaryInput = document.getElementById('binaryInput');
  const hexInput = document.getElementById('hexInput');
  const octalInput = document.getElementById('octalInput');

  let decimalValue;

  // Convert input to decimal based on the base
  if (base === 'decimal') {
    decimalValue = parseInt(decimalInput.value, 10);
  } else if (base === 'binary') {
    decimalValue = binaryToDecimal(binaryInput.value);
  } else if (base === 'hex') {
    decimalValue = hexToDecimal(hexInput.value);
  } else if (base === 'octal') {
    decimalValue = octalToDecimal(octalInput.value);
  }

  // If conversion failed, clear all fields
  if (isNaN(decimalValue)) {
    decimalInput.value = '';
    binaryInput.value = '';
    hexInput.value = '';
    octalInput.value = '';
    return;
  }

  // Update all other fields
  decimalInput.value = decimalValue;
  binaryInput.value = decimalToBinary(decimalValue);
  hexInput.value = decimalToHex(decimalValue);
  octalInput.value = decimalToOctal(decimalValue);
}

// Conversion functions (no pre-defined functions like toString())
function decimalToBinary(decimal) {
  let result = '';
  while (decimal > 0) {
    result = (decimal % 2) + result;
    decimal = Math.floor(decimal / 2);
  }
  return result || '0';
}

function decimalToHex(decimal) {
  const hexChars = '0123456789ABCDEF';
  let result = '';
  while (decimal > 0) {
    result = hexChars[decimal % 16] + result;
    decimal = Math.floor(decimal / 16);
  }
  return result || '0';
}

function decimalToOctal(decimal) {
  let result = '';
  while (decimal > 0) {
    result = (decimal % 8) + result;
    decimal = Math.floor(decimal / 8);
  }
  return result || '0';
}

function binaryToDecimal(binary) {
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    result = result * 2 + parseInt(binary[i], 10);
  }
  return result;
}

function hexToDecimal(hex) {
  const hexChars = '0123456789ABCDEF';
  let result = 0;
  for (let i = 0; i < hex.length; i++) {
    result = result * 16 + hexChars.indexOf(hex[i].toUpperCase());
  }
  return result;
}

function octalToDecimal(octal) {
  let result = 0;
  for (let i = 0; i < octal.length; i++) {
    result = result * 8 + parseInt(octal[i], 10);
  }
  return result;
}

// Populate guide table dynamically
function populateGuideTable() {
  const tableBody = document.getElementById('guideTableBody');
  for (let i = 0; i <= 15; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${i}</td>
      <td>${decimalToBinary(i)}</td>
      <td>${decimalToOctal(i)}</td>
      <td>${decimalToHex(i)}</td>
    `;
    tableBody.appendChild(row);
  }
}

// Initialize the guide table on page load
window.onload = populateGuideTable;
