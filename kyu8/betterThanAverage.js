function betterThanAverage(classPoints, yourPoints) {
  const allPoints = classPoints.concat([yourPoints]);
  
  const studentsAmount = allPoints.length;
  const summaryPoints = allPoints.reduce((a, b) => a + b, 0);
  
  return yourPoints > summaryPoints / studentsAmount;
}
