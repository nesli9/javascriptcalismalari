// numbers

let val;

// val = 10;
// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('10a');
// val = parseInt('a10a');
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(5); // parantez içine sayının kaç basamağını görmek istediğimizi yazarız.
// val = num.toFixed(5);  //nokta sonraki sayıyı yuvarlama

val = Math.PI;
val = Math.round(2.4); // round en yakın sayıya yuvarlar 
val = Math.round(2.7);
val = Math.ceil(2.4);  // ceil her zaman yukarıya yuvarlar
val = Math.ceil(2.6);
val = Math.floor(2.4);  // floor her zaman aşağıya yuvarlar
val = Math.floor(2.7);
val = Math.sqrt(64); // sqrt : sayının karesini alır 
val = Math.pow(2,4); // pow : sayının üssünü alır 2^4
val = Math.abs(-100); //sayının  mutlak değerini alır
val = Math.min(1,2,3,4,5,9);
val = Math.max(1,2,3,5,9);
val = Math.random(); //randomda verilen rastegele sayı her zaman 0 la 1 arasındadır
val = Math.random()*10; // sayı onluk tbanda görünür
val = Math.floor(Math.random()*10); //onluk tabanda görünen sayının virgülden sonrası atılır.(alt basamağa yuvarlanır.)
val = Math.floor(Math.random()*100+1);




console.log(val);
console.log(typeof val);


