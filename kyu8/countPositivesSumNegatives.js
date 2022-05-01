function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return []
  }
  
  let countPositives = 0;
  let sumNegatives = 0;
  
  for (const el of input) {
    if (el > 0) {
      countPositives += 1;
    }
    if (el < 0) {
      sumNegatives += el;
    }
  }
  return [countPositives, sumNegatives];
}
