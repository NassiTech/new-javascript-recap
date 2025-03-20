let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


function guessNumber(input) {
    let response = null;

    let trials = 0;
    while (response != "C") {
        response = prompt("Enter a number between 1 and 10");

        trials = trials + 1;

        if (Number(response) > Number(input)) {

            alert("Your number is too high!");


        }
        else if (Number(response) < Number(input)) {

            alert("Your number is too low!");


        }
        else {

            alert("Congratulations!!!");
            alert("It took me " + trials + " trials to guess your number");
            break;
        }

        //else {
        //    ("Buzzzz Invalid answer!! Enter a number");
        // }
    }
}
guessNumber(randomNumber);