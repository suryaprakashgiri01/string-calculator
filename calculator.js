function add(numbers) {
  if (!numbers) return 0;

  const { delimiter, cleanedNumbers } = extractDelimiterAndNumbers(numbers);
  const numArray = cleanedNumbers
    .split(new RegExp(`[${delimiter}\n]`))
    .map(Number);

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

function extractDelimiterAndNumbers(numbers) {
  if (numbers.startsWith("//")) {
    const [delimiterLine, cleanedNumbers] = numbers.split("\n", 2);
    const delimiter = delimiterLine.slice(2);
    return { delimiter, cleanedNumbers };
  }
  return { delimiter: ",", cleanedNumbers: numbers };
}

module.exports = { add };
