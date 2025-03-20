let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


let counts = 0;
let high = 100;
let low = 0;
let trial = 1;
let cleverGuess = 50;
let userInput = null;


userInput = prompt("Enter a number between 1 and 10");
console.log(userInput);

function guessNumber(input) {
    let response = null;
    while (response != "C") {
        cleverGuess = Math.floor((high + low) / 2);
        console.log(cleverGuess);
        trial++;
        response = prompt("Is the number to guess = " + cleverGuess + "? ");

        if (response == "high") {
            cleverGuess = (50 - low) / 2;
            alert("Your number is too high!");
            low = low + 1;

        }
        else if (response == "low") {
            cleverGuess = ((high / 2) + 50) / 2;
            alert("Your number is too low!");
            high = high - 1;

        }
        else if (response == "C") {

            alert("Congratulations!!!");
            alert("It took me ${trials} trials to guess your number");
            break;
        }

        else {
            ("Buzzzz Invalid answer!! Enter a number");
        }




    }
}

guessNumber(randomNumber);
