//equal not equal
let x = 7
console.log(x == 7)



// is greater than 
console.log(3 > 7) // false
console.log(3 < 3)// flase
console.log(3 <= 3)//true

let age >= 28;
if (age >= 18) {
    console.log("you cannot watch the movie");
}
else {
    console.log("you are too young")
}

//bmi calculator
//weight/(height*height)

let weightinKg = 120
let heightinMeter = 1.80
let bmiResult = weight / (height * height)
if (bmiResult < 20) {
    console.log("You are underweighted")
}
else if (bmiResult >= 20 && bmiResult <= 25) {
    console.log("You have a normal weight")
}
else if (bmiResult >= 25 && bmiResult < 30) {
    console.log("You are overweighted")
}
else {
    console.log("You are extreme overweighted after BMI calculator")
}


