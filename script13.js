//Arrays 
let names = ['çınar','sena','ada','yiğit'];
let years =[2017,1999,2012,2010]
let mix =['sadık',1983,null,undefined,['sinema','kitap']];

// //get array item
// console.log(names[0]);
// console.log(names[3]);

// //set array item
// names[0]='emel';
// names[names.length]='ayşe';

// //add item
// years.push(1986);
// years.unshift(1986); // 1986 dizini ilk elemanı olarak yazılır.

// //remove item
// years.pop(); //dizideki son eleman pop edilir.
// years.shift(); //dizideki ilk eleman gider (kaldırılır.)

// //indexof
// let index = names.indexOf('ada'); //dizideki 2. eleman olarak gösterilir
// console.log('index : '+index);

// //revers
// names.reverse(); //index numaraları ters çevrilir (en son eleman ilk eleman olur)

// //sort
// years.sort();

// //concet
// let val = years.concat(names);
// console.log(val);

// console.log(years);
// console.log(mix);

//splice
// names.splice(2,0,'seda'); //diziye 2. elemandan sonra verilen değer eklenir (0 değeri dizide hiçbir elemanı silmek istemediğimizi belirtir.)
// names.splice(1,1,'tuna');

//filter
function over18(year){
    let age = 2018 - year;
    return age >=18;

}

// let val = years.find(over18); //dizideki ilk 18 yaşından büyük olan elemanı yazdırır.
// console.log(val);

//filter
let val = years.filter(over18);
console.log(val);


//console.log(over18(1980));

console.log(names);
console.log(names.length);
console.log(typeof names);
