
alert("This is a randomly guessing number game.Press OK to Continue");
var guessedNumber = 25;
guessedNumber = parseInt(guessedNumber);
var yourNumber = prompt("Enter your number between 1 -100");

if (yourNumber === "") {
    alert("Enter some value.");
} else if (isNaN(yourNumber)) {
    alert("Enter numbers only.");
} else {
    yourNumber = parseInt(yourNumber);

    if (yourNumber === guessedNumber) {
        // If the guessed number is correct, display the centered GIF and message
        var congratsDiv = document.createElement("div");
        congratsDiv.textContent = "✅Congratulations! Your guessed number is right.";
        congratsDiv.style.fontSize = "24px";
        congratsDiv.style.color = "green";
        congratsDiv.style.textAlign = "center";
        congratsDiv.style.marginTop = "20px";
        
        var congratsIframe = document.createElement("iframe");
        congratsIframe.src = "https://giphy.com/embed/3oz9ZE2Oo9zRC";
        congratsIframe.width = "480";
        congratsIframe.height = "270";
        congratsIframe.frameBorder = "0";
        congratsIframe.className = "giphy-embed";
        congratsIframe.allowFullScreen = true;
        congratsIframe.style.margin = "0 auto"; // Center the iframe horizontally
        congratsIframe.style.display = "block"; // Center the iframe vertically
        
        document.body.appendChild(congratsIframe);
        document.body.appendChild(congratsDiv);
    } else {
        // If the guessed number is incorrect, display the centered GIF and message
        var wrongGuessDiv = document.createElement("div");
        wrongGuessDiv.textContent = "❌Your guessed number is incorrect. Try again.";
        wrongGuessDiv.style.fontSize = "24px";
        wrongGuessDiv.style.color = "red";
        wrongGuessDiv.style.textAlign = "center";
        wrongGuessDiv.style.marginTop = "20px";

        var wrongGuessIframe = document.createElement("iframe");
        wrongGuessIframe.src = "https://giphy.com/embed/42BtVfS6BxcHgIT59m";
        wrongGuessIframe.width = "480";
        wrongGuessIframe.height = "270";
        wrongGuessIframe.frameBorder = "0";
        wrongGuessIframe.className = "giphy-embed";
        wrongGuessIframe.allowFullScreen = true;
        wrongGuessIframe.style.margin = "0 auto"; // Center the iframe horizontally
        wrongGuessIframe.style.display = "block"; // Center the iframe vertically
        
        document.body.appendChild(wrongGuessIframe);
        document.body.appendChild(wrongGuessDiv);
    }
}
