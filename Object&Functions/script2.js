// //object literals
// let yigit = {
//     name : 'yigit',
//     yearOfBirth : '2010',
//     job : 'student'
// }

// function Person (name , yearOfBirth , job ){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2018 - this.yearOfBirth;
//     }

//     //console.log(this);
// }

let Person = function(name , yearOfBirth , job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2018 - this.yearOfBirth;
    }

}


let yigit = new Person('yiğit',2010,'student');
let emel = new Person('emel',1989,'teacher');

console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());

console.log('*****************');

console.log(emel.name);
console.log(emel.yearOfBirth);
console.log(emel.job);
console.log(emel.calculateAge());





