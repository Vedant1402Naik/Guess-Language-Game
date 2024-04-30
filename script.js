const words = ["java", "python", "c++", "ruby", "c", "php", "typescript", "swift", "kotlin", "perl"]

let randomGuess = Math.floor(Math.random() * words.length)
let selectedWord = words[randomGuess]
console.log(selectedWord)

let Guesses = []

let displayWord = ""
for (let i = 0; i < selectedWord.length; i++) {
    displayWord += "_ "
}

document.getElementById("letterInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        guessLetter();
    }
});

document.getElementById("displayWord").innerText = displayWord;

function guessLetter() {
    let inputElem = document.getElementById('letterInput')
    if (!inputElem.value) {
        alert("No Guesses Made")
    }
    let letter = inputElem.value.toLowerCase()
    inputElem.value = ""

    if (Guesses.includes(letter)) {
        alert("Already Guessed")
    }

    Guesses.push(letter)
    let updatedDisplay = ""
    let allLettersGuessed = true
    for (let i = 0; i < selectedWord.length; i++) {
        if (Guesses.includes(selectedWord[i])) {
            updatedDisplay += selectedWord[i] + " "
        }
        else {
            updatedDisplay += "_"
            allLettersGuessed = false
        }
    }

    document.getElementById("displayWord").textContent = updatedDisplay
    if (allLettersGuessed) {
        alert("Congrats, You Guessed a correct programming language ")
    }
}