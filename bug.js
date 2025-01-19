function getLargestNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return undefined; // Handle empty array
  }

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest; // Return largest number
}