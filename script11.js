// Tamplate Literals

const fullName = 'Sena Turan';
const city = 'Kocaeli';
const yaerOfBirth = 1999;

let val;

val = 'My name is '+fullName+
       ' I\'m '+(2018 - yaerOfBirth)+' years old '+
       'and I live in '+city;

//ternary operator
val = `My name is ${fullName} I'm ${(2018-yaerOfBirth>=18)? 'over 18':'under 18'} years ols and I live in ${city}`;

console.log(val);
