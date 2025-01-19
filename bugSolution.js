function getLargestNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return undefined; // Handle empty array
  }

  // Initialize largest with the first element to handle potential negative numbers
  let largest = numbers[0]; 

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest; // Return largest number
} 