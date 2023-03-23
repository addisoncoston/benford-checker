// This code checks if a given data set follows the Benford's law.

// 1. Get the data set
const dataSet = [...];

// 2. Create an object to store the frequency of the first digits
const firstDigitsFrequency = {};

// 3. Iterate over the data set
dataSet.forEach(num => {
  // 4. Get the first digit of the number
  const firstDigit = num.toString().charAt(0);
  
  // 5. Add the first digit to the frequency object
  if (firstDigitsFrequency[firstDigit]) {
    firstDigitsFrequency[firstDigit] += 1;
  } else {
    firstDigitsFrequency[firstDigit] = 1;
  }
});

// 6. Calculate the expected frequency of the first digits
const expectedFrequency = {
  '1': 0.301, 
  '2': 0.176, 
  '3': 0.125, 
  '4': 0.097, 
  '5': 0.079,
  '6': 0.067,
  '7': 0.058,
  '8': 0.051,
  '9': 0.046
};

// 7. Calculate the chi-squared test statistic
let chiSquare = 0;

Object.keys(expectedFrequency).forEach(digit => {
  chiSquare += Math.pow(firstDigitsFrequency[digit] - (dataSet.length * expectedFrequency[digit]), 2) / (dataSet.length * expectedFrequency[digit]);
});

// 8. Check if the data set follows Benford's law
if (chiSquare < 3.84) {
  console.log('The data set follows Benford\'s law.');
} else {
  console.log('The data set does not follow Benford\'s law.');
}
