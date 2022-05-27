//Date Object

let d = new Date();
let birthday = new Date(1990,1,5);

//set metodları  : gösterilen zaman, saat, gün, yıl bilgilerini elle kendimiz girip yazabiliriz (değiştirebiliriz)

d.setFullYear(2020);
d.setMonth(5);
d.setDate(20);
d.setHours(10);


//get metodları  : o andaki zaman, gün, yıl bilgisini gösterir

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getSeconds());

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());


console.log(d);
console.log(typeof d); 

