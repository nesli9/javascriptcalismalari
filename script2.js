// var age;
// console.log(age);
// age=20;
// console.log(age);

// var fullname='sadık turan';
// console.log(fullname);

// fullname='çınar turan';
// console.log(fullname);


// Değişken Tipleri
//primitive types
//String
//let firstName='Çınar';

//number
// let age=20;
// let money=100.5;

//boolean
//let isActive = true ;

//null
//let job = null;

//underfined
//let car ;





//referances types
//array
//let names = ['ali','ahmet','can'];

//object
// let adress={
//     city:'kocaeli',
//     country:'türkiye'
// };

//function
// var calculate = function(){
//     return 0;
// };


//console.log(typeof calculate);

//TÜR DÖNÜŞÜMÜ

// let num1 = '5';
// let num2 = '10';

// let num1= Number('5');
// let num2=Number('10');

// let total = num1+num2;

let val;

//number to string
val= String(10);

//bolean to string
val =String(true);

//date to string
val= String(new Date()); // date le tarih zaman biligilerini görebiliriz.

//array to string
val = String([1,2,3,4]);

//toString()
val = (10).toString();

//String to Number
val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1,2,3,4]);

//parseInt
//parseFloat

val = parseInt('10');
val = parseInt('10.5'); //ondalık bir sayı tam sayıya yuvarlanmış şekilde gösterilir.
val = parseFloat('10.5');


console.log(val);
console.log(typeof val);
console.log(val.length); //karakter uzunluğu






// console.log(num1+num2); // num1 ve num2 deki değerler string olarak birleştirildi (yan yana yazıldı)
// console.log(typeof num1);

