const form = document.querySelector("form");
form.addEventListener('submit', function(e) {

  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  // Check for invalid height input

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else
    // Check for invalid weight input

    if (weight === '' || weight < 0 || isNaN(weight)) {
      result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
      // If both inputs are valid, calculate BMI

      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }
});