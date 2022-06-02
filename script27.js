//Scopes



//** Global Scopes

var name = ' çınar';
var age = 25;

function logName(){
    var name ='Ada';
    var age =12;
    console.log('function scope' ,name,age);
};

if(true){
    var age = 30;
    console.log('block scope' ,name , age);
};

logName();
console.log(name);


//** Local Scopes

//fonksiyonlar kendi scoplarını oluşturur.
//Block'lar yeni scope oluşturmaz. (var ile oluşturulanlar)
//ES6 ile gelen let ve const block scop oluşturur.

console.log('*******************');

if(true){
    var model = 'opel';
    let year = 2016;
    const color = 'white';
    console.log('block scope' ,name , year , color);
};

console.log(model);
//console.log(color); //blok scop tan dolayı görüntülenemez

var i = 1;

// for( var i =0;i<10;i++){
//     console.log('i',i);    //let ile tanımlayınca --> for dışında consolla i yi yazdırdığımızda 10 çıktısı alırız
// };

for( let i =0;i<10;i++){
    console.log('i',i);   // let ile tanımlayınca --> for dışında consolla i yi yazdırdığımızdada 1 değerini görürüz
};

console.log(i);


