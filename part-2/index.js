backwardsLetters = function (cipherWord) {
  cipherWord = cipherWord.split;
  console.log(cipherWord);
  for (let i = 0; i < cipherWord.length; i++) {
    if (backwardsLetters[i] === "a") {
      backwardsLetters[i] = "z";
    } else if (backwardsLetters[i] === "b") {
      backwardsLetters[i] = "y";
    }
  }
};

console.log(backwardsLetters("ab"));
