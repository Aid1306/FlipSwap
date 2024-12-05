function convertNumber() {
  let inputNumber = document.getElementById("inputNumber").value;
  let fromBase = document.getElementById("fromBase").value;
  let toBase = document.getElementById("toBase").value;
  let outputNumber = document.getElementById("outputNumber");

  // Ensure the input is valid
  if (inputNumber === "") {
    outputNumber.value = "";
    return;
  }

  // Convert input to decimal first
  let decimalValue = parseInt(inputNumber, fromBase);

  // Check if the value is a valid number
  if (isNaN(decimalValue)) {
    outputNumber.value = "Invalid Input";
    return;
  }

  // Convert decimal to the desired output base
  if (toBase == 2) {
    outputNumber.value = decimalValue.toString(2);
  } else if (toBase == 8) {
    outputNumber.value = decimalValue.toString(8);
  } else if (toBase == 10) {
    outputNumber.value = decimalValue.toString(10);
  } else if (toBase == 16) {
    outputNumber.value = decimalValue.toString(16).toUpperCase();
  }
}