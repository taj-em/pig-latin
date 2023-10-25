function pigLatin(text) {
const vowelArray = ["a", "e", "i", "o", "u"]
const consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", 
"t", "v", "w", "x", "y", "z"]
const wordArray = text.split(" ");
let outputArray = [];
let consonantSort = [];
wordArray.forEach(word => {
 let letterArray = word.split("");
  if (vowelArray.includes(letterArray[0].toLowerCase())) {
    letterArray.push("w", "a", "y");
  } else if (consonantArray.includes(letterArray[0].toLowerCase())) {
    for (let index = 0; index < letterArray.length; index += 1) {
      if (vowelArray.includes(letterArray[index].toLowerCase())) {
        break;
      }
      consonantSort.push(letterArray[index]);
      letterArray[index] = "";
    }
    consonantSort.push("ay");
    letterArray.push(consonantSort.join(""));
  }
  outputArray.push(letterArray.join(""));
});
}




window.addEventListener("load", function() {

});