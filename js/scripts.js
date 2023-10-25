function pigLatin(text) {
  const vowelArray = ["a", "e", "i", "o", "u"]
  const consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s",
    "t", "v", "w", "x", "y", "z"]
  const wordArray = text.split(" ");
  let outputArray = [];
  wordArray.forEach(word => {
    let consonantSort = [];
    let letterArray = word.split("");
    if (vowelArray.includes(letterArray[0].toLowerCase())) {
      letterArray.push("w", "a", "y");
    } else if (letterArray[0].toLowerCase() === "q" && letterArray[1].toLowerCase() === "u") {
      consonantSort.push(letterArray[0], letterArray[1]);
      letterArray[0] = "";
      letterArray[1] = "";
      consonantSort.push("ay");
      letterArray.push(consonantSort.join(""));
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
    console.log("Output: " + outputArray)
  });
  return outputArray.join(" ");
}

function display(event) {
  event.preventDefault();
  const text = document.getElementById("text-box").value;
  const translate = pigLatin(text);
  document.getElementById("display-translation").innerText = translate;
}


window.addEventListener("load", function () {
this.document.querySelector("form").addEventListener("submit", display)
});