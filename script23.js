//Functions

function yasHesapla(dogumYili){
    return 2018 - dogumYili;
};

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);


function emekliligeKacYilKaldi(dogumYili , isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik= 65 - yas;

    if (emeklilik>0){
        console.log(`${isim} Emekli olmana ${emeklilik} yıl kaldı.`);
    }else{
        console.log('Zaten emekli oldunuz');
    }


};
emekliligeKacYilKaldi(2012,'Ada');
emekliligeKacYilKaldi(2010,'Yiğit');
emekliligeKacYilKaldi(1950,'Çınar');


