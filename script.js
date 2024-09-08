let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let maxAttempts = 10;

function checkGuess() {
    const guessInput = document.getElementById('guessInput').value;
    const resultMessage = document.getElementById('resultMessage');
    const previousGuesses = document.getElementById('previousGuesses');
    
    const guess = Number(guessInput);

    if (!guess || guess < 1 || guess > 100) {
        resultMessage.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    guesses.push(guess);

    if (guess === randomNumber) {
        resultMessage.textContent = `¡Felicidades! Adivinaste el número en ${guesses.length} intentos.`;
        resultMessage.style.color = "green";
        document.getElementById('resetButton').style.display = 'inline-block';
        disableInput();
    } else if (guesses.length >= maxAttempts) {
        resultMessage.textContent = `Lo siento, No adivinaste el número. Era ${randomNumber}.`;
        resultMessage.style.color = "red";
        document.getElementById('resetButton').style.display = 'inline-block';
        disableInput();
    } else {
        resultMessage.textContent = guess < randomNumber ? "Demasiado bajo" : "Demasiado alto";
        resultMessage.style.color = "orange";
    }

    previousGuesses.textContent = `Intentos previos: ${guesses.join(', ')}`;
    document.getElementById('guessInput').value = '';
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('previousGuesses').textContent = '';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
