// Demo : Operators
// 1- Can ve Ada'nın  boy ve kg bilgilerini alın.
// 2- Alınan bilgilere göre kg indexlerini hesaplayınız.
// ** Formül : kilo / boy uzunluğu^2
// 3- Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4- Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4 : Zayıf
// 18,5 - 24,9 : Normal
//25 - 29,9 : Fazla kilolu
//30 - 34,9 : Şişman (obez)

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda= 40;

const boyCan = 1.70;
const boyAda = 1.50;


IndexAda = (kgAda) / (boyAda * boyAda);
IndexCan = (kgCan) / (boyCan * boyCan);

console.log(IndexAda , IndexCan);

let adaBuyukIndex = IndexAda > IndexCan;
let canBuyukIndex = IndexCan > IndexAda;


console.log("Adanın kilo indexi Canın kilo indeksinden daha büyüktür." +adaBuyukIndex);

console.log("Canın kilo indeksi adanın kilo indeksinden daha büyüktür." +canBuyukIndex);

let AdaZayif = (IndexAda >= 0 ) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5 ) && (IndexAda <= 24.9);
let AdaKilolu = (IndexAda >= 25 ) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30 ) && (IndexAda <= 34.9);

console.log("Ada zayıf  : " +AdaZayif);
console.log("Ada normal  : " +AdaNormal);
console.log("Ada kilolu  : " +AdaKilolu);
console.log("Ada Şişman  : " +AdaSisman);

