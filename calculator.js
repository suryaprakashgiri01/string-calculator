function add(numbers) {
  if (!numbers) return 0;

  let delimiter = ',';
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    delimiter = parts[0].slice(2);
    numbers = parts[1];
  }

  const numArray = numbers.replace(/\n/g, delimiter).split(delimiter).map(Number);
  const negatives = numArray.filter(n => n < 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
