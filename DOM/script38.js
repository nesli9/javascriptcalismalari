// LOCAL STORAGE  //yapılan uygulamaların bilgilerini tarayıcı hafızasında tutmaya yarar
                   //belli url ile ilişkilendirilen yapıları tarayıcı kapansa bile saklar
let val;

// set item  //eleman atama

const firstName = localStorage.setItem('firstName','Sadık');
const lastName = localStorage.setItem('lastName','Turan');
let hobies = ['sinema','araba','gezmek'];

// get item  //eleman alma
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');


// remove item  //item silme
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

// clear //bütün elemanları silmek için kullanılır
// localStorage.clear();

// set array to storage
localStorage.setItem('hobies',JSON.stringify(hobies));

val = JSON.parse(localStorage.getItem('hobies'));

console.log(val);
console.log(localStorage);


// SESSION STORAGE  //tarayıcı kapandığı anda tuttuğu bilgiler gider
// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');

//  console.log(sessionStorage);