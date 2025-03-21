let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

function headerStyleChange() {
    const header = document.getElementById("header");
    header.innerHTML = " Ready for playing the game with me?";
    header.style.color = "red";
    header.style.backgroundcolor = "green";
    header.style.fontSize = "50px";
}


let buttonR = document.getElementById("Reset");
let buttonS = document.getElementById("Start");
let buttonP = document.getElementById("Play again");
let buttonF = document.getElementById("Feedback");

//let button0 = document.getElementById("0");
//let button1 = document.getElementById("1");
//let button2 = document.getElementById("2");
//let button3 = document.getElementById("3");
//let button4 = document.getElementById("4");
//let button5 = document.getElementById("5");
//let button6 = document.getElementById("6");
//let button7 = document.getElementById("7");
//let button8 = document.getElementById("8");
//let button9 = document.getElementById("9");
//let button10 = document.getElementById("10");

//let outputField = document.getElementById("inputField");

function showInputValue() {
    console.log(document.getElementById("inputField").value);
}

function guessNumber(input) {
    let response = null;
    let trials = 0;

    while (response != "C") {
        //response = outputField
        //response = prompt("Enter a number between 1 and 10");

        trials = trials + 1;

        if (Number(response) > Number(input)) {
            // alert("Your number is too high!");


        }
        else if (Number(response) < Number(input)) {

            //alert("Your number is too low!");


        }
        else {

            //alert("Congratulations!!!");
            // alert("It took me " + trials + " trials to guess your number");
            break;
        }

        //else {
        //    ("Buzzzz Invalid answer!! Enter a number");
        // }
    }
}


//guessNumber(randomNumber);

function button0() {
    if (randomNumber == 0) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };
}

function button1() {
    if (randomNumber == 1) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 1) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button2() {
    if (randomNumber == 2) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 2) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button3() {
    if (randomNumber == 3) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 3) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button4() {
    if (randomNumber == 4) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 4) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button5() {
    if (randomNumber == 5) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 5) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button6() {
    if (randomNumber == 6) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 6) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button7() {
    if (randomNumber == 7) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 7) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button8() {
    if (randomNumber == 8) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 8) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button9() {
    if (randomNumber == 9) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 9) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}

function button10() {
    if (randomNumber == 10) {
        document.getElementById("outputField").textContent = "You win!!! Try again ...";
        randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);
    } else if (randomNumber < 10) {
        document.getElementById("outputField").textContent = "Too high";
    } else {
        document.getElementById("outputField").textContent = "Too low";
    };

}





