

// A

//  Switch Statements

// Version 1

console.log('A. v-1');

var meal = prompt('Please enter: breakfast, lunch, or dinner' ).toLowerCase();


switch(meal){
    case 'breakfast':
        console.log('coffee + bagel + Sandwich!');
        break;
    case 'lunch':
        console.log('coffee + bagel + Sandwich!');
        break;
    case 'dinner':
        console.log('Pasta');
        break;
    default:
        console.log('Please try again didnt understand your order');
        break;
}

// Version 2

console.log('A. v-2');

var timeDay = prompt('Please enter: 1 , 2, or 3 to check your meal' );


const bf = 1
const lh = 2
const dn = 3

// const timeDay =  3;

if ( timeDay <= 2){
    console.log('Coffee + bagel + sandwitch');
}
else if (timeDay == 3  ){
    console.log('Pasta');
}

else {
    console.log('Please try again didnt understand your order');
}







// B1
console.log('B.1');

// food = prompt('Please enter: breakfast, lunch, or dinner' ).toLowerCase();

function foodFor4People(originalFood){
   
    return originalFood/4
}

function timeFor4People(originalTime){

    return originalTime/4
}


function microwave(foodWeight, time, mode){

    const foodPeople4 = foodFor4People(foodWeight)
    const timePeople4 = timeFor4People(time)
    
    // console.log(foodWeight, time, mode);

    const readyToEat =  
    (`Your total food weight is: ${foodWeight}
    It can be shared by 4 people with an amount of ${foodPeople4}lb per person,
    Total time for heading you food is ${time} mins, each person should cook their food about ${timePeople4} min under ${mode} mode.`);
    return readyToEat;
}

const food = microwave(2, 4, 'LOW')

console.log(food)









console.log('B.2');
// * TEST DATA: Test for bill values 275, 28 and 430
// total bill
const bill = 28;

// formula
const tip1 = bill * 15 /100;
const tip2 = bill * 20 /100;

bill >= 50 && bill <= 300 ? console.log(`The bill is $${bill}, and your tip should be 15% or $${tip1}, a Total of $${bill + tip1} dollars`): console.log(`The bill is $${bill}, and your tip should be 20% or $${tip2}, a Total of $${bill + tip2} dollars `);














console.log('C. Ive try but culdnt understand how to make the functions work');


// const team1 = 'Nets'
// const team2 = 'Knicks'


// function calcAverage(){

//     // scores
//     const netsScores = [44,23, 71]
//     const knicksScores = [65,54, 49]

//     // adding scores
//     const netstotalPoints = 97 + 112 + 101
//     const knicksTotalPoints = 109 + 95 + 123

//     // average of scores
//     var avgNets = Number(((netstotalPoints / netsScores.length)).toFixed(2)) 
//     var avgKnicks = Number(((knicksTotalPoints / knicksScores.length)).toFixed(2))
//     console.log(`yes ${avgNets} , ${avgKnicks}`);
    
// }

// function checkWinner(avgNets, avgKnicks){
    
//     const timePeople4 = timeFor4People(avgNets)
//     const timePeople4 = timeFor4People(avgKnicks)
//     console.log(`yes ${avgNets} , ${avgKnicks}`);
// }


// calcAverage()
// checkWinner()






// D

console.log('D.');


function celsiusToFahrenheit() {
    // Celsius input
    const cTemp = 40;
    // Calculation
    const fCalculation = (cTemp * 9/5) + 32 
    console.log(`Celsius is ${cTemp}°C and the output in fahrenheit is ${fCalculation}°F `);
}

celsiusToFahrenheit()



function fahrenheitToCelsius() {
    // Celsius input
    const fTemp = 40;
    // Calculation
    const cCalculation = ((fTemp - 32) * 5/9).toFixed(2)
    console.log(`Celsius is ${fTemp}°F and the output in fahrenheit is ${cCalculation}°C `);
}

fahrenheitToCelsius()