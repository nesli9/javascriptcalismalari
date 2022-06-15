//Prototype  --> JS' de Kalıtım prototype ile yapilir

let Person = function(name , yearOfBirth , job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.lastName = 'Turan';


let emel = new Person('emel',1989,'teacher');
let yigit = new Person('yigit',2010,'student');

console.log(emel.calculateAge());
console.log(yigit.calculateAge());

console.log(emel.getName());

console.log(emel);
console.log(yigit);


console.log(emel.hasOwnProperty('lastName')); //lastName bilgisi prototype içerisinde yer aldığı için false olur
console.log(emel.lastName); // ikisndede turan sonucu gelir çünkü bu objelere person prototypeından direk olarak bu bilgi aktarılır
console.log(yigit.lastName); //


