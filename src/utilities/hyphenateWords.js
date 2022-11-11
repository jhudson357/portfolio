function hyphenate (str){
  let removeSpecialCharStr = str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
  let hyphenatedStr = removeSpecialCharStr.replaceAll(' ', '-')
  return hyphenatedStr
}

export {
  hyphenate
}

// console.log(hyphenate("Tic Tac Toe,@'#$%^&**[]{**"))