function checkData() {
    const inputText = document.getElementById("input").value;
    const inputArray = inputText.split(/[ ,]+/).map(Number); // Split text by commas or spaces and convert to array of numbers
    
    const firstDigits = inputArray.map(num => parseInt(num.toString()[0])); // Get array of first digits
    
    const distribution = Array.from({length: 9}, () => 0); // Initialize array of size 9 with zeros
    firstDigits.forEach(digit => distribution[digit - 1]++); // Count occurrences of each first digit

    const benfordPercentages = [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6]; // Benford's Law percentages for each first digit (1-9)
    
    let total = 0;
    for(let i = 0; i < 9; i++) {
      total += Math.pow((distribution[i]/firstDigits.length)*100 - benfordPercentages[i], 2);
    }
    const chiSquareValue = total / 100;
    const chiSquareResult = (chiSquareValue <= 15.507) ? "passes" : "fails"; // Compare calculated Chi-Square value with critical value of 15.507 for 8 degrees of freedom
    
    document.getElementById("result").innerHTML = `This dataset adheres to Benford's Law ${Math.round(chiSquareValue * 100) / 100}% of the time.<br>
                                                     The Chi-Square Test result is: ${chiSquareResult}`;
}

function resetData() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerHTML = "";
  }