//Demo: Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny bussiness.  ";

var url = "http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye";

// cümle kaç karakterlidir?
console.log(sentence.length);

// kaç kelimeden oluşuyor?
console.log(sentence.trim().split(' ').length);

// Tüm cümleyi küçük harfe çevir.
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

//Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim());

// '-' karakterini siliniz
console.log(sentence.replace('-',''));

// url icinden str kısmını çıkarınız.
var str = 'http://';
console.log(url.substring(str.length));
console.log(url.slice(str.length));

// url hangi protokolu'u kullanmaktadır? (http , https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

//url , '.com' ifadesini içeriyormu ?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.toLowerCase()
                .replace(/ /g,'-')
                .replace(/ı/g,'i')
                .replace(/ü/g ,'u')  // url içerisinde istediğimiz her hangi bir karakteri değiştirme (türkçeyi ingilizce harf yapmak gibi)
                .replace(/ö/g ,'o')
                .replace(/ş/g ,'s')
                .replace(/ç/g ,'c')
                );





