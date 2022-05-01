function sameCase(a, b){
  function isCharacterALetter(symbol) {
    return symbol.toLowerCase() !== symbol.toUpperCase()
  }
  
  function isLetterInUpperCase(symbol) {
    return symbol === symbol.toUpperCase()
  }

  if (!isCharacterALetter(a) || !isCharacterALetter(b)) {
    return -1;
  }

  if (isLetterInUpperCase(a) === isLetterInUpperCase(b)) {
    return 1
  }
  
  return 0;
}
