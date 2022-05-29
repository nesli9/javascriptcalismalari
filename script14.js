//Demo : Arrays
//"BMW , Mercedes , Opel , Mazda" elmanlarına sahip bir dizi oluşrurunuz.
var arr = ["BMW","Mercedes","Opel","Mazda"];
//var arr2 = new Array("BMW","Mercedes","Opel","Mazda");
console.log(arr);
//console.log(arr2);

//Dizi Kaç elemanlıdır?
console.log(arr.length);

//Dizinin ilk ve son elamanı nedir?
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[arr.length-1]); //dizinin son elamnını yazdırır


//"Renault" değerini dizinin sonuna ekleyin.
// arr[4]="Renault";

arr[arr.length] = "Renault";
arr[arr.length] = "Fiat";

arr.push('Toyota');

console.log(arr);

//"Toyota" değerini dizinin başına ekleyıin.

arr.unshift('Seat');
console.log(arr);

//"Renault" değerini siliniz.

arr.shift('Seat');
console.log(arr);

//"Toyota" değerini siliniz.

arr.pop('Toyota');
console.log(arr);

//Dizi elemanlarını ters çevirin
arr.reverse();
console.log(arr);

//Dizi elemanları alfabetik olarak sıralayın.

arr.sort();
console.log(arr);

//[1,2,5,80] dizisini sıralayınız.

var numbers = [1,2,5,80,15,30];

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

console.log(numbers.sort(compare));

//"Opel" değeri dizinin bir elemanı mıdır?

console.log(arr.indexOf('Opel'));
console.log(arr.includes('Opel'));
console.log(arr);


//var str = "Chevrolet,Dacia";
//İfadesini diziye çevir.

var str = "Chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2);

//oluşturulan 2 dizinin elamanlarını başka bir dizi ile birleştirin.
var arr3 = arr.concat(arr2);
console.log(arr3);


//oluşturulan diziden son 2 elemanı siliniz.
// console.log(arr3.pop());
// console.log(arr3.pop());
console.log(arr3.splice(6));
console.log(arr3);

/** aşağıda verilen elemanları bir dizi içerisinde saklayıınız
 * 
 * studentA  : Yiğit Bilgi 2010
 * studentB : Sena Turan 1999
 * studentC : Ahmet Turan 1998
 */

var studentA = ['yiğit','bilgi',2010];
var studentB = ['sena','turan',1999];
var studentC = ['yiğit','turan',1998];

var students = [studentA,studentB,studentC];

console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

console.log(students);





