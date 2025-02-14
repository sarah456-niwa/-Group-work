function findMaximum() {
    // Get the values from the input fields
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;

    // Convert input values to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    // Use Math.max to find the maximum value
    let maxNumber = Math.max(num1, num2, num3);

    // Display the result
    document.getElementById('result').textContent = `Maximum is: ${maxNumber}`;
}