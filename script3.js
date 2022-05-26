//** Aşağıdaki Müşteri bilgileri için değişken oluşturma

// **Müşteri adı
// **Müşteri soyadı
// **Müşteri tc no
// **Müşteri sipariş toplam
// **Müşteri cinsiyet
// **Müşteri adres bilgisi
// **Müşteri hobiler

var customerName = 'çınar';
var customerLastName='turan';

var fullName='çınar turan';
var musteriId = '12365478912';
var total= 205.6;
var gender = 'erkek'; // var gender = true;  (kadın true , erkek false)
//object türü
var adres = {
    city :'Kocaeli',
    district :'izmit',
    body:'abc mah.'
}
//array türü
var hobbies = ['sinema','kitap','spor']




//** Sipariş toplamı

var order1= Number('100');
var order2= Number('50');

var totalOrder = order1 + order2;
console.log(totalOrder);

var order3 = Number('100.2');
var order4 = Number('150.5'); // ondalıklı olarak toplanır

var totalOrder2 = order3 + order4;
console.log(totalOrder2);

var order5 = parseInt('100.2');
var order6 = parseInt('150.5'); //tam sayı olarak toplamak için

var totalOrder3 = order5 + order6;
console.log(totalOrder3);

//doğum yılına göre yaş hesaplama

const yearOfBirth = 1986;

console.log(new Date().getFullYear()-yearOfBirth);

// ifadenin karakter sayısını bulma

var course = 'Modern Javascript Kursu';

console.log(course.length);

