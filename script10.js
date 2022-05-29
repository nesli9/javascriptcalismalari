// strings

const firstName = 'Sadık';
const lastName = 'Turan';
const age = 35;
let hobbies = 'sinama ,spor , kitap.yazılım';
let val ; 

//string concatenation

val = firstName +' '+ lastName;
val = 'Sadık';
val += ' Turan';

//val = 'Benim adım ' +firstName+' '+lastName + ' ve yaşım'+' ' +age +" İzmit'te yaşıyorum." // 'izmit \'te yaşıyorum'  --> şeklindede yazılabilir (tek tırnağın kesme işareti olarak görünmesi için başına ters slaş koyulur.);

//string concat
//val = firstName.concat(' ',lastName);

//string lenght
//val = val.length;

//string uppercase - lovercase
val = val.toUpperCase();
val = val.toLowerCase();

//string replace
val = val.replace('Sadık','Çınar')+'  ';

//trim
val = val.trim();

//val = val[0];
//val = val.indexOf('d');
//val = val.indexOf('turan');

//substrring
//val = val.substring(3,8);

//slice
//val = val.slice(6);

val = hobbies.split(',');

console.log(val); 
console.log(typeof val);
