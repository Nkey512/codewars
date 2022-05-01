function squareOrSquareRoot(array) {
  return array.map(el => {
    const sqrt = Math.sqrt(el)
    if (sqrt % 1 === 0) {
      return sqrt;
    } else {
      return el * el;
    }
  }); 
}
