const button = document.getElementById('button');

button.addEventListener('click', () => {
    // Accessing height and weight input values
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // Convert values from string to number
    let heightInCm = Number(height);
    let weightInKg = Number(weight);

    // BMI calculation
    let BMI = (weightInKg * 10000) / (heightInCm * heightInCm);

    // Display the result
    const result = document.getElementById("result");
    result.textContent = "Your BMI is: " + BMI.toFixed(2);
});
