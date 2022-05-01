function vowelIndices(word){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const result = []
  
  word.split('').forEach((char, index) => {
    if (vowels.includes(char.toLowerCase())) {
      result.push(index + 1)
    }
  })
  
  return result
}
